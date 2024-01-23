import IncomesCard from "@/components/home/IncomesCard";
import useUser from "@/hooks/userHook";
import RootLayout from "@/layouts/RootLayout";

export default function Home() {
  const { user } = useUser();

  const now = new Date();
  const formattedDate = `${now.toLocaleString("default", {
    month: "short",
  })} ${now.getDate()}, ${now.getFullYear()}`;

  return (
    <RootLayout>
      <div className="w-full flex flex-col h-screen bg-[#eff1f3] px-[32px] gap-[24px]">
        <div className="w-full flex flex-col items-center justify-center border-b-[2px] border-solid py-[24px]  flex-wrap">
          <div className="flex flex-col items-center justify-center gap-[4px]">
            <div>
              <h1 className="text-[24px] font-bold text-gray-800">
                Welcome Back, {user.name.slice(0, 3)} 👋
              </h1>
            </div>
            <div className="text-[16px] flex gap-[8px]">
              <span className="text-gray-500">{formattedDate}</span>
            </div>
          </div>
        </div>
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
