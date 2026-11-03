import Image from "next/image";

import type { Brand } from "@/types";

type BrandsBarProps = {
  brands: Brand[];
};

export function BrandsBar({ brands }: BrandsBarProps) {
  return (
    <section aria-label="Featured brands" className="bg-black">
      <ul className="page-container flex flex-wrap items-center justify-center gap-x-8 gap-y-5 py-10 md:justify-between md:py-11">
        {brands.map((brand) => (
          <li key={brand.name}>
            <Image
              src={brand.logo}
              alt={brand.name}
              width={brand.width}
              height={brand.height}
              className="h-6 w-auto md:h-8 lg:h-[34px]"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
