import { Separator } from "@/components/ui/separator";
import { BrandsBar } from "@/components/home/brands-bar";
import { DressStyleGrid } from "@/components/home/dress-style-grid";
import { Hero } from "@/components/home/hero";
import { ProductSection } from "@/components/home/product-section";
import { ReviewsCarousel } from "@/components/home/reviews-carousel";
import { getBrands, getDressStyles } from "@/lib/queries/catalog";
import { getNewArrivals, getTopSelling } from "@/lib/queries/products";
import { getFeaturedReviews } from "@/lib/queries/reviews";

export default async function Home() {
  const [brands, newArrivals, topSelling, dressStyles, reviews] =
    await Promise.all([
      getBrands(),
      getNewArrivals(),
      getTopSelling(),
      getDressStyles(),
      getFeaturedReviews(),
    ]);

  return (
    <>
      <Hero />
      <BrandsBar brands={brands} />
      <ProductSection
        title="New Arrivals"
        products={newArrivals}
        viewAllHref="/shop?sort=newest"
        className="pt-12 md:pt-18"
      />
      <div className="page-container">
        <Separator className="bg-black/10" />
      </div>
      <ProductSection
        title="Top Selling"
        products={topSelling}
        viewAllHref="/shop?sort=best-selling"
        className="pb-12 md:pb-20"
      />
      <DressStyleGrid styles={dressStyles} />
      <ReviewsCarousel reviews={reviews} />
    </>
  );
}
