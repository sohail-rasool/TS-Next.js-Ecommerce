import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Page Not Found | ${siteConfig.name}`,
};

export default function NotFound() {
  return (
    <section className="page-container flex min-h-[60vh] flex-col items-center justify-center gap-5 py-20 text-center md:gap-6">
      <p className="font-display text-[96px] leading-none md:text-[160px]">
        404
      </p>
      <h1 className="font-display text-2xl md:text-4xl">Page not found</h1>
      <p className="max-w-[460px] text-sm text-black/60 md:text-base">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
        have been moved or no longer exists.
      </p>
      <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <Button
          asChild
          className="h-13 rounded-full bg-black px-14 text-base font-medium text-white hover:bg-black/80"
        >
          <Link href="/">Go Home</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="h-13 rounded-full border-black/10 px-14 text-base font-medium"
        >
          <Link href="/shop">Continue Shopping</Link>
        </Button>
      </div>
    </section>
  );
}
