"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function AnnouncementBar() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="bg-black text-white">
      <div className="page-container relative flex items-center justify-center py-2.5">
        <p className="text-center text-xs sm:text-sm">
          Sign up and get 20% off to your first order.{" "}
          <Link href="/signup" className="font-medium underline">
            Sign Up Now
          </Link>
        </p>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close announcement"
          className="absolute right-4 hidden sm:block xl:right-0"
        >
          <X className="size-5" />
        </button>
      </div>
    </div>
  );
}
