import { Skeleton } from "@/components/ui/skeleton";
import { i18n } from "@/translate/i18";
// import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { useState } from "react";

export default function SectionHome() {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  return (
    <section
      className="flex h-[calc(60vh-96px)] w-full items-center justify-center p-8"
      id="Home"
    >
      <div className="mx-auto flex h-[400px] w-full max-w-7xl flex-nowrap items-center justify-center gap-8 md:justify-between">
        <div className="flex flex-col items-center justify-center gap-8 md:items-start">
          <h1 className="max-w-xs text-center text-[32px] font-medium text-green-700 md:max-w-[400px] md:text-start md:text-[44px] lg:max-w-[525px] lg:text-[48px] xl:text-[64px]">
            {i18n.t("home.title")}
          </h1>
          <Link href="/#About">
            <button className="flex  h-12 w-40 items-center justify-around rounded-md bg-green-700 p-4 text-base font-semibold text-white hover:bg-green-700">
              <p>{i18n.t("home.button")}</p>
              <p>➞</p>
            </button>
          </Link>
        </div>
        <div
          className={`flex h-full w-full max-w-sm items-center justify-center lg:max-w-xl`}
        >
          {/* {!isSplineLoaded && (
            <Spline
              scene="https://prod.spline.design/ElYXVrG-jAaLyxfj/scene.splinecode"
              onLoad={() => {
                setTimeout(() => {
                  setIsSplineLoaded(true);
                }, 500);
              }}
            />
          )} */}
          {isSplineLoaded && <Skeleton className="h-[222px] w-[333px]" />}
        </div>
      </div>
    </section>
  );
}
