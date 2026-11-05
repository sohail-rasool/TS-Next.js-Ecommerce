// Seeds the database with the starter catalogue in ./seed-data.ts.
// Run with `npm run db:seed` (or `npx prisma db seed`).
// Safe to re-run: products, brands and dress styles are upserted by their
// unique key, and the seeded reviews are replaced.

import { existsSync } from "node:fs";

import { PrismaPg } from "@prisma/adapter-pg";

import { PrismaClient } from "../lib/generated/prisma/client";
import { brands, dressStyles, products, reviews } from "./seed-data";

if (!process.env.DATABASE_URL && existsSync(".env")) process.loadEnvFile(".env");
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set. Add it to your .env file.");
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

const DAY_MS = 24 * 60 * 60 * 1000;
const daysAgo = (days: number) => new Date(Date.now() - days * DAY_MS);

async function main() {
  // Products
  const productIds = new Map<string, string>();
  for (const { addedDaysAgo, originalPrice, ...product } of products) {
    const data = {
      ...product,
      originalPrice: originalPrice ?? null,
      createdAt: daysAgo(addedDaysAgo),
    };
    const { id } = await prisma.product.upsert({
      where: { slug: product.slug },
      create: data,
      update: data,
      select: { id: true },
    });
    productIds.set(product.slug, id);
  }
  console.log(`✔ ${products.length} products`);

  // Reviews: replace the reviews on seeded products so re-runs don't duplicate them.
  await prisma.review.deleteMany({
    where: { productId: { in: [...productIds.values()] } },
  });
  await prisma.review.createMany({
    data: reviews.map(({ productSlug, writtenDaysAgo, ...review }) => {
      const productId = productIds.get(productSlug);
      if (!productId) {
        throw new Error(`Review references unknown product "${productSlug}"`);
      }
      return { ...review, productId, createdAt: daysAgo(writtenDaysAgo) };
    }),
  });
  console.log(`✔ ${reviews.length} reviews`);

  // Dress styles
  for (const [sortOrder, style] of dressStyles.entries()) {
    const data = { ...style, sortOrder };
    await prisma.dressStyle.upsert({
      where: { slug: style.slug },
      create: data,
      update: data,
    });
  }
  console.log(`✔ ${dressStyles.length} dress styles`);

  // Brands
  for (const [sortOrder, brand] of brands.entries()) {
    const data = { ...brand, sortOrder };
    await prisma.brand.upsert({
      where: { name: brand.name },
      create: data,
      update: data,
    });
  }
  console.log(`✔ ${brands.length} brands`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
