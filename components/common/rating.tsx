import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

type RatingProps = {
  value: number;
  max?: number;
  /** Show the "4.5/5" label next to the stars. */
  showValue?: boolean;
  className?: string;
  starClassName?: string;
};

export function Rating({
  value,
  max = 5,
  showValue = false,
  className,
  starClassName,
}: RatingProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className="flex items-center gap-1"
        role="img"
        aria-label={`Rated ${value} out of ${max}`}
      >
        {Array.from({ length: max }, (_, i) => {
          // Portion of this star to fill: 1 = full, 0.5 = half, 0 = empty.
          const fill = Math.min(Math.max(value - i, 0), 1);
          if (fill === 0) return null;
          const starClass = cn("size-4 sm:size-5", starClassName);
          if (fill === 1) {
            return (
              <Star
                key={i}
                className={cn(starClass, "fill-star text-star")}
                strokeWidth={0}
              />
            );
          }
          // Partial star: grey star underneath, yellow star clipped on top.
          return (
            <span key={i} className="relative inline-flex">
              <Star
                className={cn(starClass, "fill-black/10 text-black/10")}
                strokeWidth={0}
              />
              <Star
                className={cn(starClass, "absolute inset-0 fill-star text-star")}
                strokeWidth={0}
                style={{ clipPath: `inset(0 ${(1 - fill) * 100}% 0 0)` }}
              />
            </span>
          );
        })}
      </div>
      {showValue && (
        <span className="text-xs text-foreground sm:text-sm">
          {value}
          <span className="text-muted-foreground">/{max}</span>
        </span>
      )}
    </div>
  );
}
