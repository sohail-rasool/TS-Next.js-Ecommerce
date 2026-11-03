import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/common/section-heading";
import { cn } from "@/lib/utils";
import type { DressStyle } from "@/types";

type DressStyleGridProps = {
  styles: DressStyle[];
};

// Alternating narrow / wide tiles: [1 | 2 2] then [3 3 | 4].
const tileSpans = ["md:col-span-1", "md:col-span-2", "md:col-span-2", "md:col-span-1"];

export function DressStyleGrid({ styles }: DressStyleGridProps) {
  return (
    <section className="page-container">
      <div className="rounded-[20px] bg-panel px-6 pt-10 pb-7 md:rounded-[40px] md:px-16 md:pt-17.5 md:pb-19">
        <SectionHeading className="mb-7 text-center md:mb-16">
          Browse by dress style
        </SectionHeading>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {styles.map((style, i) => (
            <Link
              key={style.slug}
              href={`/shop?style=${style.slug}`}
              className={cn(
                "group relative h-[190px] overflow-hidden rounded-[20px] bg-white md:h-[289px]",
                tileSpans[i % tileSpans.length],
              )}
            >
              <Image
                src={style.image}
                alt=""
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-cover object-[right_top] transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-4 left-6 text-2xl font-bold md:top-6 md:left-9 md:text-4xl">
                {style.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
