import Image from "next/image";
import ProfileLayout from "../../layouts/ProfileLayout";

const historyBilling = [
  {
    type: "Professional",
    method: "Monthly",
    date: "28/03/2024",
    value: "$49,99",
  },
  {
    type: "Professional",
    method: "Monthly",
    date: "28/02/2024",
    value: "$49,99",
  },
  {
    type: "Free",
    date: "28/01/2024",
    value: "$00,00",
  },
];

interface HistoryBillingCardProps {
  type: string;
  method?: string;
  date: string;
  value: string;
}

const HistoryBillingCard = ({
  type,
  method,
  date,
  value,
}: HistoryBillingCardProps) => {
  return (
    <div className="w-full flex items-center justify-between gap-[32px] py-[16px]">
      <div className="flex items-center justify-center gap-[16px]">
        <div className="flex items-center justify-center w-[64px] h-[64px] bg-[#099268] rounded-full">
          <Image
            src="/icons/pig-off.svg"
            width={32}
            height={32}
            alt="piggy bank"
          />
        </div>
        <div className="flex flex-col gap-[4px] items-start justify-center">
          <div className="flex items-center justify-center gap-[16px] ">
            <span className="text-[20px] text-gray-900 font-semibold">
              {type}
            </span>
            {method && (
              <span className="text-[14px] text-gray-600">({method})</span>
            )}
          </div>
          <span className="text-gray-600">{date}</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-[36px]">
        <div>
          <span className="text-[24px] text-gray-900">{value}</span>
        </div>
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
            <h1 className="text-[24px] font-bold">Future Billing</h1>
          </div>
          <div className="w-full flex flex-col gap-[16px]">
            <HistoryBillingCard
              type={"Professional"}
              method={"Monthly"}
              date={"28/04/2024"}
              value={"$49,99"}
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-[32px]">
          <div className="w-full">
            <h1 className="text-[24px] font-bold">History</h1>
          </div>
          <div className="w-full flex flex-col gap-[16px]">
            {historyBilling.map((billing, index) => (
              <HistoryBillingCard
                type={billing.type}
                method={billing.method}
                date={billing.date}
                value={billing.value}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
}
