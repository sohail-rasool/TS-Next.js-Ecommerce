import { getImageProps } from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type Stat = { value: string; label: string };

const stats: Stat[] = [
  { value: "200+", label: "International Brands" },
  { value: "2,000+", label: "High-Quality Products" },
  { value: "3,000+", label: "Happy Customers" },
];

function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 104 104" aria-hidden className={className}>
      <path
        d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

function HeroImage() {
  // Art direction: a tighter crop on small screens, the full image on desktop.
  const common = {
    alt: "Two models wearing denim jackets",
    fetchPriority: "high" as const,
  };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    src: "/images/header-homepage.png",
    width: 671,
    height: 970,
    sizes: "50vw",
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    src: "/images/header-res-homepage.png",
    width: 390,
    height: 448,
    sizes: "100vw",
  });

  return (
    <picture>
      <source media="(min-width: 1024px)" srcSet={desktop} />
      <source srcSet={mobile} />
      {/* eslint-disable-next-line jsx-a11y/alt-text -- alt comes from getImageProps */}
      <img
        {...rest}
        className="mx-auto h-auto w-full max-w-[600px] object-contain object-bottom lg:absolute lg:inset-0 lg:h-full lg:max-w-none"
      />
    </picture>
  );
}

export function Hero() {
  return (
    <section className="overflow-hidden bg-hero">
      <div className="page-container grid lg:grid-cols-2">
        <div className="flex flex-col gap-5 pt-10 lg:gap-8 lg:py-26">
          <h1 className="font-display text-4xl leading-[1.05] lg:text-[56px] lg:leading-[1] lg:font-stretch-semi-expanded xl:text-[64px]">
            Find clothes that matches your style
          </h1>
          <p className="max-w-[545px] text-sm text-black/60 lg:text-base">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button
            asChild
            className="h-13 w-full rounded-full bg-black px-14 text-base font-medium text-white hover:bg-black/80 sm:w-fit"
          >
            <Link href="/shop">Shop Now</Link>
          </Button>
          <dl className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:justify-start lg:mt-4 lg:gap-8">
            {stats.map((stat, i) => (
              <div key={stat.label} className="contents">
                {i > 0 && (
                  <Separator
                    orientation="vertical"
                    className={`h-12 bg-black/10 lg:h-16 ${i === 2 ? "hidden sm:block" : ""}`}
                  />
                )}
                <div className="flex flex-col">
                  <dt className="order-2 text-xs text-black/60 lg:text-base">
                    {stat.label}
                  </dt>
                  <dd className="order-1 text-2xl font-bold lg:text-[40px]">
                    {stat.value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mt-6 min-h-[448px] lg:mt-0 lg:min-h-0">
          <HeroImage />
          <Sparkle className="absolute top-10 right-2 size-19 lg:top-20 lg:right-0 lg:size-26" />
          <Sparkle className="absolute top-36 left-2 size-11 lg:top-1/2 lg:left-0 lg:size-14" />
        </div>
      </div>
    </section>
  );
}
