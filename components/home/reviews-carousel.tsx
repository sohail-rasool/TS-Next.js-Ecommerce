import { ArrowLeft, ArrowRight } from "lucide-react";

import { ReviewCard } from "@/components/common/review-card";
import { SectionHeading } from "@/components/common/section-heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Review } from "@/types";

type ReviewsCarouselProps = {
  title?: string;
  reviews: Review[];
};

const navButtonClass =
  "static size-8 border-0 bg-transparent shadow-none hover:bg-black/5";

export function ReviewsCarousel({
  title = "Our happy customers",
  reviews,
}: ReviewsCarouselProps) {
  return (
    <section className="py-12 md:py-20">
      <Carousel opts={{ align: "start", loop: true }}>
        <div className="page-container mb-6 flex items-end justify-between gap-4 md:mb-10">
          <SectionHeading>{title}</SectionHeading>
          <div className="flex shrink-0 items-center gap-1">
            <CarouselPrevious className={navButtonClass}>
              <ArrowLeft className="size-6" />
            </CarouselPrevious>
            <CarouselNext className={navButtonClass}>
              <ArrowRight className="size-6" />
            </CarouselNext>
          </div>
        </div>
        <div className="page-container">
          <CarouselContent className="-ml-5">
            {reviews.map((review) => (
              <CarouselItem
                key={review.id}
                className="basis-full pl-5 sm:basis-1/2 lg:basis-1/3"
              >
                <ReviewCard review={review} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </section>
  );
}
