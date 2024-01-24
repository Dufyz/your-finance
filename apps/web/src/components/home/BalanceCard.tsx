import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "sonner";

interface IDateItemButton {
  index: number;
  selected?: boolean;
  setSelectedDateIndex: Dispatch<SetStateAction<number>>;
}

const dateButtonsData = [
  {
    id: 1,
    name: "1 month",
  },
  {
    id: 2,
    name: "6 month",
  },
  {
    id: 3,
    name: "custom",
  },
];

const DateItemButton = ({
  index,
  selected,
  setSelectedDateIndex,
}: IDateItemButton) => {
  const text = dateButtonsData[index].name;
  const variableStyles = selected
    ? "bg-[#099268] text-white hover:bg-[#099269ee]"
    : "bg-[#fdffff] text-gray-500 hover:bg-[#dbdbdb]";

  return (
    <button
      className={`w-full px-[12px] font-semibold rounded-[4px] ${variableStyles}`}
      onClick={() => setSelectedDateIndex(index + 1)}
    >
      {text}
    </button>
  );
};

const BalanceCard = () => {
  const [selectedDateIndex, setSelectedDateIndex] = useState(1);

  const handleDownloadReport = () => {
    toast.success("Download report successfully");
  };

  return (
    <div className="w-full h-[100%] flex flex-col gap-[48px] items-start justify-between">
      <div className="w-full flex items-center justify-between gap-[32px]">
        <div className="flex-1 h-[100%] flex rounded-[16px] gap-[8px]">
          {dateButtonsData.map((item, index) => (
            <DateItemButton
              key={index}
              index={index}
              selected={selectedDateIndex === index + 1}
              setSelectedDateIndex={setSelectedDateIndex}
            />
          ))}
        </div>
        <button
          className="flex items-center justify-center py-[8px] px-[12px] rounded-[8px] gap-[16px] bg-[#099268] hover:bg-[#099269ee]"
          onClick={() => handleDownloadReport()}
        >
          <Image
            width={24}
            height={24}
            src="/icons/file-download.svg"
            alt="download"
          />
          <span className="text-[16px] text-[#fff] font-semibold">
            Download
          </span>
        </button>
      </div>
      <div className="w-full h-[100%] bg-[blue]"></div>
    </div>
  );
};

export default BalanceCard;
