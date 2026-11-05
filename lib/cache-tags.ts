// Cache tags shared by queries (`cacheTag`) and server actions
// (`updateTag` / `revalidateTag`). After writing to a table, invalidate its tag.
export const CACHE_TAGS = {
  products: "products",
  reviews: "reviews",
  brands: "brands",
  dressStyles: "dress-styles",
} as const;
