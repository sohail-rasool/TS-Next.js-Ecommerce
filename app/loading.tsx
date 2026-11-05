import { siteConfig } from "@/lib/site-config";

export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="page-container flex min-h-[60vh] flex-col items-center justify-center gap-6 py-20"
    >
      <span className="font-display animate-pulse text-3xl md:text-4xl">
        {siteConfig.name}
      </span>
      <div
        aria-hidden
        className="size-10 animate-spin rounded-full border-4 border-black/10 border-t-black"
      />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
