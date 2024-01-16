import { IconCheck, IconX } from "@tabler/icons-react";
import Image from "next/image";

interface IPriceCard {
  title: string;
  price: string;
  description: string;
  buttonText: string;
  border?: boolean;
  icon: string;
  period: string;
  acess: { [key: number]: boolean };
}

const features = [
  {
    id: 1,
    description: "Basic access to essential features.",
  },
  {
    id: 2,
    description: "Support for multiple platforms for ultimate flexibility.",
  },
  {
    id: 3,
    description: "Advanced investment management.",
  },
  {
    id: 4,
    description: "Detailed and customizable reports.",
  },
  {
    id: 5,
    description: "Exclusive market insights and future projections.",
  },
  {
    id: 6,
    description: "Personal financial consulting with AI.",
  },
];

const PriceCard = ({
  title,
  price,
  description,
  buttonText,
  border = false,
  icon,
  period,
  acess,
}: IPriceCard) => {
  return (
    <div
      className={`bg-bg-primary rounded-[24px] shadow-lg w-full border-[2px] h-[100%] ${
        border ? " border-title-primary" : ""
      }`}
    >
      <div className="p-[32px] flex flex-col gap-[32px] items-start justify-center">
        <div className="flex flex-col items-start justify-center gap-[8px]">
          <div className="flex items-center justify-center gap-[16px]">
            <Image
              width={32}
              height={32}
              src={`/icons/${icon}.svg`}
              alt="check icon"
              color="#fff"
            />
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
          <span className="mt-2 text-sm text-gray-500">/{period}</span>
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
          {features.map((feature, index) => (
            <div className="w-full flex gap-[16px]" key={index}>
              {acess[index + 1] ? (
                <IconCheck size={32} color="#099268" />
              ) : (
                <IconX size={32} color="red" />
              )}
              <span className={`w-full text-[14px] text-gray-600`}>
                {feature.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
