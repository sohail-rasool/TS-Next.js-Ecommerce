import Image from "next/image";
import Link from "next/link";

import { Price } from "@/components/common/price";
import { Rating } from "@/components/common/rating";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";

type ProductCardProps = {
  product: Product;
  className?: string;
};

export function ProductCard({ product, className }: ProductCardProps) {
  const isOutOfStock = product.stock <= 0;

  return (
    <Link
      href={`/product/${product.slug}`}
      className={cn("group flex flex-col gap-2.5 sm:gap-4", className)}
    >
      <div className="relative aspect-square overflow-hidden rounded-[13px] bg-surface sm:rounded-[20px]">
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          sizes="(min-width: 768px) 25vw, 200px"
          className={cn(
            "object-contain transition-transform duration-500 group-hover:scale-105",
            isOutOfStock && "opacity-50",
          )}
        />
        {isOutOfStock && (
          <Badge className="absolute top-3 left-3 rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
            Out of stock
          </Badge>
        )}
      </div>
      <div className="flex flex-col gap-1 sm:gap-2">
        <h3 className="line-clamp-1 text-base font-bold sm:text-xl">
          {product.title}
        </h3>
        <Rating value={product.rating} showValue />
        <Price price={product.price} originalPrice={product.originalPrice} />
      </div>
    </Link>
  );
}
