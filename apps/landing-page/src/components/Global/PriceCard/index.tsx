import Image from "next/image";

interface IPriceCard {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  border?: boolean;
}

const PriceCard = ({
  title,
  price,
  description,
  features,
  buttonText,
  border = false,
}: IPriceCard) => {
  //
  return (
    <div
      className={`bg-bg-primary rounded-lg shadow-lg w-full max-w-[320px] border-[2px] ${
        border ? " border-title-primary" : ""
      }`}
    >
      <div className="p-[32px] flex flex-col gap-[32px] items-start justify-center">
        <div className="flex flex-col items-start justify-center gap-[8px]">
          <div className="flex justify-center">
            <span className="text-[24px] font-semibold text-title-primary capitalize">
              {title}
            </span>
          </div>
          <div className="flex justify-center">
            <span className="text-[16px] text-gray-600">{description}</span>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-5xl text-title-primary font-bold">
            ${price}
          </span>
          <span className="mt-2 text-sm text-gray-500">/month</span>
        </div>
        <div className="w-full flex flex-col items-center">
          <button
            type="button"
            className="w-full inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-title-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-title-primary"
          >
            {buttonText}
          </button>
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-[8px]">
          {features.map((feature) => (
            <div className="w-full flex gap-[16px]">
              <Image
                width={32}
                height={32}
                src={"/icons/check.svg"}
                alt="check icon"
                color="#fff"
              />
              <span className="w-full text-[14px] text-gray-600">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
