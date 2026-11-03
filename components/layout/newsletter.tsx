import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Later: pass a Server Action as the form `action` to store subscriptions.
export function Newsletter() {
  return (
    <div className="flex flex-col gap-8 rounded-[20px] bg-black px-6 py-8 md:flex-row md:items-center md:justify-between md:px-16 md:py-9">
      <h2 className="font-display max-w-[551px] text-[32px] leading-[1.1] text-white md:text-[40px]">
        Stay up to date about our latest offers
      </h2>
      <form className="flex w-full flex-col gap-3.5 md:max-w-[349px]">
        <div className="relative">
          <Mail
            className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-black/40"
            aria-hidden
          />
          <Input
            type="email"
            name="email"
            required
            placeholder="Enter your email address"
            aria-label="Email address"
            className="h-12 rounded-full border-0 bg-white pl-12 text-sm text-black placeholder:text-black/40 md:text-base"
          />
        </div>
        <Button
          type="submit"
          variant="outline"
          className="h-12 rounded-full border-0 bg-white text-sm font-medium text-black hover:bg-white/90 md:text-base"
        >
          Subscribe to Newsletter
        </Button>
      </form>
    </div>
  );
}
