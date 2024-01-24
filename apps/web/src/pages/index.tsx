import IncomesCard from "@/components/home/IncomesCard";
import RootLayout from "@/layouts/RootLayout";

export default function Home() {
  return (
    <RootLayout>
      <div className="w-full flex flex-col h-screen bg-[#eff1f3] px-[32px] gap-[24px]">
        <div className="w-full flex items-start justify-between h-[100%] py-[32px]">
          <div className="w-full flex flex-col items-start justify-between h-[100%]">
            <IncomesCard />
            <IncomesCard />
            <IncomesCard />
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
