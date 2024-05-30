"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function InvalidCodeFeedback() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 pb-4">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-xl font-bold">Something went wrong.</h1>
        <p className="text-foreground text-center">
          This code has already been used or has expired. Please request a new
          one.
        </p>
      </div>

      <Link href="/login?tab=forgot-password">
        <Button>Try again</Button>
      </Link>
    </div>
  );
}
