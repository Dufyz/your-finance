import BalanceCard from "@/components/home/BalanceCard";
import RootLayout from "@/layouts/RootLayout";

export default function Home() {
  return (
    <RootLayout>
      <div className="w-full flex flex-col h-screen p-[32px] gap-[24px]">
        <div className="w-full h-[100%] flex items-start justify-between gap-[48px]">
          <div className="w-full h-[100%] flex items-start justify-between"></div>
          <div className="w-full max-w-[456px] h-[100%] flex items-start justify-between">
            <BalanceCard />
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
