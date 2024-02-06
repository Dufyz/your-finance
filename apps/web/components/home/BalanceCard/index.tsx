import Image from "next/image";
import { useState } from "react";
import BalanceCardActionButton from "./BalanceCardActionButton";
import BankCard from "./BankCard";

const actionButtons = [
  {
    icon: "money-receive",
    label: "Income",
    handler: () => {
      console.log(1);
    },
  },
  {
    icon: "money-expense",
    label: "Expense",
    handler: () => {
      console.log(1);
    },
  },
  {
    icon: "file-invoice",
    label: "Invoice",
    handler: () => {
      console.log(1);
    },
  },
  {
    icon: "more-stuff",
    label: "More",
    handler: () => {
      console.log(1);
    },
  },
];

const BalanceCard = () => {
  const [showValue, setShowValue] = useState(false);

  return (
    <div className="w-full h-[100%] bg-[#f8f9fa] rounded-[16px] px-[32px] py-[24px] border-solid border-[1px] text-[#141531] shadow-md overflow-auto">
      <div className="w-full h-[100%] flex flex-col items-start justify-between gap-[24px]">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center justify-center gap-[4px] cursor-pointer">
            <h1 className="text-[24px] text-[#141531] font-bold">Wallets</h1>
            <Image
              width={24}
              height={24}
              src="/icons/chevron-down.svg"
              alt="arrow-down"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="w-full flex items-center justify-between border-b-2 border-solid pb-[24px]">
            <div className="flex flex-col items-start gap-[8px] justify-start border-l-[6px] border-solid border-[#099268] pl-[16px]">
              <span className="text-[16px] font-medium text-gray-700">
                Total balance
              </span>
              <div className="flex gap-[8px]">
                <span className="text-[32px] font-semibold text-gray">R$</span>
                <span className="text-[32px] font-semibold text-gray">
                  {showValue ? "6.000,00" : "********"}
                </span>
              </div>
            </div>
            <div className="cursor-pointer">
              <Image
                width={24}
                height={24}
                src="/icons/eye.svg"
                alt="mastercard"
                onClick={() => setShowValue(!showValue)}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-between">
          {actionButtons.map((button, index) => (
            <BalanceCardActionButton
              key={index}
              icon={button.icon}
              label={button.label}
              handler={button.handler}
            />
          ))}
        </div>
        <div className="w-full flex flex-col gap-[16px]">
          <div className="w-full">
            <h1 className="text-[18px] font-semibold">My wallets</h1>
          </div>
          <div className="w-full h-[305px] flex flex-col gap-[16px]">
            <BankCard
              name="Itaú"
              type="Conta corrente"
              value={showValue ? "2.000,00" : "********"}
            />
            <BankCard
              name="Nubank"
              type="Conta corrente"
              value={showValue ? "2.000,00" : "********"}
            />

            <BankCard
              name="Clear"
              type="Conta investimento"
              value={showValue ? "2.000,00" : "********"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
