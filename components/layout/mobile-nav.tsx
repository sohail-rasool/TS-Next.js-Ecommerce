import { Menu } from "lucide-react";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, shopCategories, siteConfig } from "@/lib/site-config";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button type="button" aria-label="Open menu" className="lg:hidden">
          <Menu className="size-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[85%] gap-0">
        <SheetHeader className="p-6">
          <SheetTitle asChild>
            <Link href="/" className="font-display text-2xl">
              {siteConfig.name}
            </Link>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-6">
          <p className="pb-1 text-sm font-medium text-black/60">Shop</p>
          {shopCategories.map((link) => (
            <SheetClose asChild key={link.href}>
              <Link href={link.href} className="py-2 pl-3 text-base">
                {link.label}
              </Link>
            </SheetClose>
          ))}
          <Separator className="my-3" />
          {navLinks.map((link) => (
            <SheetClose asChild key={link.href}>
              <Link href={link.href} className="py-2 text-base">
                {link.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
