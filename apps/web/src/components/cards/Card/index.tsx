import Image from "next/image";

const Card = () => {
  const x = 0;

  return (
    <div className="w-full flex-col items-start justify-between gap-[48px] bg-white p-[24px] shadow-lg rounded-xl">
      <div className="w-full h-[100%] flex flex-col items-start justify-between gap-8">
        <div className="w-full flex flex-row items-center justify-between gap-[16px] border-b-2 pb-3">
          <div>
            <span className="text-[24px] font-bold text-[#333]">Itau</span>
          </div>
          <div className="flex flex-row gap-2 items-center justify-center">
            <span className="text-gray-500">Master Card</span>
            <div>
              <Image
                src="/logos/cards/mastercard.png"
                alt="Master Card"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-4">
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex flex-col gap-2">
              <h2 className="text-lg text-gray-500">Card number</h2>
              <span className="text-2xl font-bold"> 3388 4556 8860 8***</span>
            </div>
            <div className="w-full flex flex-col gap-2">
              <h2 className="text-lg text-gray-500">Month invoice</h2>
              <span className="text-2xl font-bold">$2500</span>
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <button className="text-[#099268] text-lg">Remove</button>
            <button className="px-8 py-2 rounded-md bg-[#099268] hover:bg-[#189872] text-white text-lg">
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
