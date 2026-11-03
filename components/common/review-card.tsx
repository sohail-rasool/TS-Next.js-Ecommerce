import { CircleCheck } from "lucide-react";

import { Rating } from "@/components/common/rating";
import { cn } from "@/lib/utils";
import type { Review } from "@/types";

type ReviewCardProps = {
  review: Review;
  className?: string;
};

export function ReviewCard({ review, className }: ReviewCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col gap-3 rounded-[20px] border border-black/10 bg-background px-6 py-6 sm:px-8 sm:py-7",
        className,
      )}
    >
      <Rating value={review.rating} starClassName="sm:size-[22px]" />
      <div className="flex items-center gap-1">
        <h3 className="text-base font-bold sm:text-xl">{review.author}</h3>
        {review.verified && (
          <CircleCheck
            className="size-5 fill-verified text-white sm:size-6"
            aria-label="Verified buyer"
          />
        )}
      </div>
      <p className="text-sm leading-relaxed text-black/60 sm:text-base">
        &ldquo;{review.content}&rdquo;
      </p>
      {review.date && (
        <p className="mt-auto pt-2 text-sm font-medium text-black/60 sm:text-base">
          Posted on {review.date}
        </p>
      )}
    </article>
  );
}
