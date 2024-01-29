import Image from "next/image";
import ProfileLayout from "../../layouts/ProfileLayout";

const HistoryBillingCard = () => {
  return (
    <div className="w-full flex items-center justify-between gap-[32px] hover:bg-[#f2f2f3] p-[16px] rounded-[8px] cursor-pointer">
      <div className="flex items-center justify-center gap-[32px]">
        <div className="flex items-center justify-center w-[64px] h-[64px] bg-[#f2f2f3] rounded-full">
          <Image
            src="/icons/pig-off.svg"
            width={32}
            height={32}
            alt="piggy bank"
          />
        </div>
        <div className="flex flex-col gap-[4px] items-start justify-center">
          <div className="flex items-center justify-center gap-[8px] ">
            <span className="text-[22px] text-gray-900 font-semibold">
              Professional
            </span>
            <span className="text-[14px] text-gray-600">(Monthly)</span>
          </div>
          <span className="text-gray-600">28/01/2024</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-[36px]">
        <div>
          <span className="text-[24px] text-gray-900">$49,99</span>
        </div>
        {/* <div>
          <Image
            src="/icons/download.svg"
            width={24}
            height={24}
            alt="arrow right"
          />
        </div> */}
      </div>
    </div>
  );
};

export default function Billing() {
  return (
    <ProfileLayout>
      <div className="w-full flex-1 flex flex-col items-start justify-center gap-[48px]">
        <div className="w-full flex flex-col items-start justify-start gap-[32px]">
          <div className="w-full">
            <h1 className="text-[32px] font-bold">Future Billing</h1>
          </div>
          <div className="w-full flex flex-col gap-[16px]">
            <HistoryBillingCard />
          </div>
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-[32px]">
          <div className="w-full">
            <h1 className="text-[32px] font-bold">History</h1>
          </div>
          <div className="w-full flex flex-col gap-[16px]">
            <HistoryBillingCard />
            <HistoryBillingCard />
            <HistoryBillingCard />
            <HistoryBillingCard />
            <HistoryBillingCard />
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
}
