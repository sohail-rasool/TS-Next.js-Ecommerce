import { Search } from "lucide-react";
import Form from "next/form";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type SearchFormProps = {
  className?: string;
};

// Submits as a GET to /shop?q=..., so results can be rendered on the server.
export function SearchForm({ className }: SearchFormProps) {
  return (
    <Form action="/shop" role="search" className={cn("relative", className)}>
      <Search
        className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-black/40"
        aria-hidden
      />
      <Input
        type="search"
        name="q"
        placeholder="Search for products..."
        aria-label="Search for products"
        className="h-12 rounded-full border-0 bg-panel pr-4 pl-12 text-base shadow-none placeholder:text-black/40 md:text-base"
      />
    </Form>
  );
}
