import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type PriceProps = {
  price: number;
  originalPrice?: number;
  className?: string;
};

function formatPrice(value: number) {
  return `$${value.toLocaleString("en-US")}`;
}

export function Price({ price, originalPrice, className }: PriceProps) {
  const hasDiscount = originalPrice !== undefined && originalPrice > price;
  const discount = hasDiscount
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <span className="text-xl font-bold sm:text-2xl">{formatPrice(price)}</span>
      {hasDiscount && (
        <>
          <span className="text-xl font-bold text-black/40 line-through sm:text-2xl">
            {formatPrice(originalPrice)}
          </span>
          <Badge className="rounded-full border-0 bg-sale/10 px-3 py-1.5 text-[10px] font-medium text-sale sm:text-xs">
            -{discount}%
          </Badge>
        </>
      )}
    </div>
  );
}
