import Link from "next/link";

import { ProductCard } from "@/components/common/product-card";
import { SectionHeading } from "@/components/common/section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";

type ProductSectionProps = {
  title: string;
  products: Product[];
  viewAllHref?: string;
  className?: string;
};

export function ProductSection({
  title,
  products,
  viewAllHref,
  className,
}: ProductSectionProps) {
  return (
    <section className={cn("page-container py-12 md:py-16", className)}>
      <SectionHeading className="mb-8 text-center md:mb-14">{title}</SectionHeading>

      {/* Horizontal scroll on mobile, 4-column grid from md up. */}
      <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 md:mx-0 md:grid md:grid-cols-4 md:gap-5 md:overflow-visible md:px-0">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="w-[198px] shrink-0 snap-start md:w-auto"
          />
        ))}
      </div>

      {viewAllHref && (
        <div className="mt-6 flex justify-center md:mt-9">
          <Button
            asChild
            variant="outline"
            className="h-12 w-full rounded-full border-black/10 px-14 text-sm font-medium sm:w-[218px] md:text-base"
          >
            <Link href={viewAllHref}>View All</Link>
          </Button>
        </div>
      )}
    </section>
  );
}
