import { Skeleton } from "@/components/ui/skeleton";
import { i18n } from "@/translate/i18";

import Link from "next/link";
import { useState } from "react";

export default function SectionHome() {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  return (
    <section
      className="flex min-h-[calc(60vh-96px)] w-full items-center justify-center p-8 md:pb-0"
      id="Home"
    >
      <div className="mx-auto flex w-full  max-w-7xl flex-nowrap items-center justify-center gap-8 lg:justify-between">
        <div className="flex flex-col items-center justify-center gap-8 md:items-start">
          <h1 className="max-w-xs text-center text-[32px] font-medium text-green-700 md:text-start lg:text-[48px] xl:text-[64px]">
            {i18n.t("home.title")}
          </h1>
          <Link href="/#About">
            <button className="flex h-12 items-center justify-around gap-4 rounded-md bg-green-700 px-4 py-2 text-base font-semibold text-white hover:bg-green-700">
              Start
              <p>➞</p>
            </button>
          </Link>
        </div>
        <div>
          <div className="mx-auto hidden max-w-2xl flex-col items-center justify-center lg:flex lg:text-center">
            <p className="mt-2  text-xl font-bold tracking-tight text-green-700 sm:text-4xl ">
              {i18n.t("about.title")}
            </p>
            <p className="text-muted-foreground mt-6 text-lg leading-8">
              {i18n.t("about.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
