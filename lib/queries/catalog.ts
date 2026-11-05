import "server-only";

import { cacheLife, cacheTag } from "next/cache";

import { CACHE_TAGS } from "@/lib/cache-tags";
import { prisma } from "@/lib/prisma";
import type { Brand, DressStyle } from "@/types";

/** Brands shown in the homepage brands bar. */
export async function getBrands(): Promise<Brand[]> {
  "use cache";
  cacheTag(CACHE_TAGS.brands);
  cacheLife("days");

  return prisma.brand.findMany({
    orderBy: { sortOrder: "asc" },
    select: { name: true, logo: true, width: true, height: true },
  });
}

/** Dress styles shown in the "Browse by dress style" grid. */
export async function getDressStyles(): Promise<DressStyle[]> {
  "use cache";
  cacheTag(CACHE_TAGS.dressStyles);
  cacheLife("days");

  return prisma.dressStyle.findMany({
    orderBy: { sortOrder: "asc" },
    select: { title: true, slug: true, image: true },
  });
}
