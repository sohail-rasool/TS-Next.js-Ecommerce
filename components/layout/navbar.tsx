import { ChevronDown, CircleUserRound, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";

import { MobileNav } from "@/components/layout/mobile-nav";
import { SearchForm } from "@/components/layout/search-form";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navLinks, shopCategories, siteConfig } from "@/lib/site-config";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-background">
      <div className="page-container flex items-center gap-4 py-5 md:py-6 lg:gap-10">
        <div className="flex items-center gap-4">
          <MobileNav />
          <Link
            href="/"
            className="font-display -mt-1 text-[25px] leading-none lg:text-[32px]"
          >
            {siteConfig.name}
          </Link>
        </div>

        <nav className="hidden items-center gap-6 lg:flex">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 outline-none">
              Shop <ChevronDown className="size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-48">
              {shopCategories.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href}>{link.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <SearchForm className="hidden flex-1 md:block" />

        <div className="ml-auto flex items-center gap-3.5 md:ml-0">
          <Link href="/shop" aria-label="Search" className="md:hidden">
            <Search className="size-6" />
          </Link>
          <Link href="/cart" aria-label="Cart">
            <ShoppingCart className="size-6" />
          </Link>
          <Link href="/account" aria-label="Account">
            <CircleUserRound className="size-6" />
          </Link>
        </div>
      </div>
    </header>
  );
}
