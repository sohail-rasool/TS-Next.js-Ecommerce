import Image from "next/image";
import Link from "next/link";

import { Newsletter } from "@/components/layout/newsletter";
import { Separator } from "@/components/ui/separator";
import {
  footerLinkGroups,
  paymentMethods,
  siteConfig,
  socialLinks,
} from "@/lib/site-config";

export function Footer() {
  return (
    <footer>
      {/* The newsletter card straddles the top edge of the grey footer. */}
      <div className="bg-[linear-gradient(to_bottom,var(--color-background)_50%,var(--color-panel)_50%)]">
        <div className="page-container">
          <Newsletter />
        </div>
      </div>

      <div className="bg-panel pt-12 pb-20 md:pb-20">
        <div className="page-container">
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-[1.5fr_repeat(4,1fr)] lg:gap-8">
            <div className="col-span-2 flex flex-col gap-6 lg:col-span-1">
              <Link href="/" className="font-display text-[28px] leading-none md:text-[33px]">
                {siteConfig.name}
              </Link>
              <p className="max-w-62 text-sm leading-relaxed text-black/60">
                {siteConfig.description}
              </p>
              <ul className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="group flex size-7 items-center justify-center rounded-full border border-black/20 bg-white transition-colors hover:bg-black"
                    >
                      <Image
                        src={social.icon}
                        alt=""
                        width={14}
                        height={14}
                        className="size-3 object-contain group-hover:invert"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {footerLinkGroups.map((group) => (
              <div key={group.title} className="flex flex-col gap-4 md:gap-6">
                <h3 className="text-sm font-medium tracking-[3px] uppercase md:text-base">
                  {group.title}
                </h3>
                <ul className="flex flex-col gap-3 md:gap-4">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-black/60 hover:text-black md:text-base"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Separator className="mt-10 mb-5 bg-black/10" />

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-sm text-black/60">
              Shop.co &copy; 2000-2026, All Rights Reserved
            </p>
            <ul className="flex items-center gap-3">
              {paymentMethods.map((method) => (
                <li
                  key={method.label}
                  className="flex h-[30px] w-[46px] items-center justify-center rounded-[5px] border border-black/10 bg-white"
                >
                  <Image
                    src={method.icon}
                    alt={method.label}
                    width={34}
                    height={14}
                    className="h-3.5 w-auto"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
