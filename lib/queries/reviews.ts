import "server-only";

import { cacheLife, cacheTag } from "next/cache";

import { CACHE_TAGS } from "@/lib/cache-tags";
import type { Review as ReviewRow } from "@/lib/generated/prisma/client";
import { prisma } from "@/lib/prisma";
import type { Review } from "@/types";

function toReview(row: ReviewRow): Review {
  return {
    id: row.id,
    author: row.author,
    content: row.content,
    rating: row.rating.toNumber(),
    verified: row.verified,
    date: row.createdAt.toISOString(),
  };
}

/** Latest verified, highly rated reviews for the homepage testimonials. */
export async function getFeaturedReviews(limit = 10): Promise<Review[]> {
  "use cache";
  cacheTag(CACHE_TAGS.reviews);
  cacheLife("hours");

  const rows = await prisma.review.findMany({
    where: { verified: true, rating: { gte: 4 } },
    orderBy: { createdAt: "desc" },
    take: limit,
  });
  return rows.map(toReview);
}
