import RootLayout from "@/layouts/RootLayout";
import Image from "next/image";

export default function Home() {
  return (
    <RootLayout>
      <div className="w-full p-[32px]">
        <div className="w-full max-w-main-content mx-auto flex flex-nowrap justify-center items-center h-[600px] gap-[32px] md:justify-between ">
          <div className="flex flex-col items-center justify-center gap-[32px] md:items-start">
            <h1 className="max-w-[350px] text-[32px] text-title-primary text-center font-medium md:text-[44px] md:max-w-[400px] md:text-start lg:text-[48px] lg:max-w-[500px] xl:text-[64px]">
              Simplyfing Your Financial Future.
            </h1>
            <button className="h-[48px] w-[164px] p-[16px] text-[16px] font-semibold bg-title-primary flex items-center justify-center text-text-secondary rounded-[8px]">
              GET START ➞
            </button>
          </div>
          <div className="hidden items-center justify-center  w-full max-w-[350px] md:flex  lg:max-w-[500px]">
            <Image
              src={"/main.svg"}
              height={300}
              width={500}
              alt="money image"
            />
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
