import Image from "next/image";

interface IBalanceCardActionButtons {
  icon: string;
  label: string;
  handler: () => void;
}

const BalanceCardActionButton = ({
  icon,
  label,
  handler,
}: IBalanceCardActionButtons) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-[16px] cursor-pointer"
      onClick={() => handler()}
    >
      <div className="flex items-center justify-center w-[56px] h-[56px] bg-[#099268] hover:bg-[#189872] p-[16px] rounded-[8px]">
        <Image
          width={48}
          height={48}
          src={`/icons/${icon}.svg`}
          alt="balance-card-action-button"
        />
      </div>
      <div>
        <span className="text-[16px] font-semibold text-gray-600">{label}</span>
      </div>
    </div>
  );
};

export default BalanceCardActionButton;
