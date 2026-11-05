import "server-only";

import { cacheLife, cacheTag } from "next/cache";

import { CACHE_TAGS } from "@/lib/cache-tags";
import type { Product as ProductRow } from "@/lib/generated/prisma/client";
import { prisma } from "@/lib/prisma";
import type { Product } from "@/types";

/** Converts a database row to the plain, serializable shape the UI uses. */
function toProduct(row: ProductRow): Product {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    images: row.images,
    price: row.price.toNumber(),
    originalPrice: row.originalPrice?.toNumber(),
    rating: row.rating.toNumber(),
    numReviews: row.numReviews,
    stock: row.stock,
  };
}

/** Most recently added products. */
export async function getNewArrivals(limit = 4): Promise<Product[]> {
  "use cache";
  cacheTag(CACHE_TAGS.products);
  cacheLife("hours");

  const rows = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
    take: limit,
  });
  return rows.map(toProduct);
}

/** Best-selling products by units sold. */
export async function getTopSelling(limit = 4): Promise<Product[]> {
  "use cache";
  cacheTag(CACHE_TAGS.products);
  cacheLife("hours");

  const rows = await prisma.product.findMany({
    orderBy: [{ sold: "desc" }, { createdAt: "desc" }],
    take: limit,
  });
  return rows.map(toProduct);
}
