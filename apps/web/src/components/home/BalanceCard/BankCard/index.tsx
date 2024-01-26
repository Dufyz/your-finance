import Image from "next/image";

interface IBankCard {
  name: string;
  type: string;
  value: string;
}

const BankCard = ({ name, type, value }: IBankCard) => {
  const x = 0;
  return (
    <div className="w-full flex items-center justify-between py-[16px] px-[12px] hover:bg-[#ececec] rounded-[12px]">
      <div className="flex items-center justify-center gap-[16px]">
        <div className="w-[48px] h-[48px] flex items-center justify-center rounded-[50%] bg-[#ececec]">
          {/* <Image
            width={32}
            height={32}
            src="/logos/bank/itau.jpg"
            alt="bank logo"
          /> */}
          <Image width={24} height={24} src="/icons/bank.svg" alt="bank logo" />
        </div>
        <div className="flex flex-col items-start justify-center gap-[4px]">
          <span className="text-gray-900 text-[18px] font-bold">{name}</span>
          <span className="text-gray-600 text-[16px] font-medium">{type}</span>
        </div>
      </div>
      <div className="text-[18px] flex gap-[8px] font-semibold">
        <span>R$</span>
        <span>{value}</span>
      </div>
    </div>
  );
};

export default BankCard;
