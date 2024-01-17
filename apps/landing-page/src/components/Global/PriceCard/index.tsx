import { IconCheck, IconX } from "@tabler/icons-react";
import Image from "next/image";
import { i18n } from "@/translate/i18";

interface IPriceCard {
  title: string;
  price: string;
  description: string;
  border?: boolean;
  icon: string;
  acess: { [key: number]: boolean };
}

const features = [
  {
    id: 1,
    description: i18n.t("plans.features.1.description"),
  },
  {
    id: 2,
    description: i18n.t("plans.features.2.description"),
  },
  {
    id: 3,
    description: i18n.t("plans.features.3.description"),
  },
  {
    id: 4,
    description: i18n.t("plans.features.4.description"),
  },
  {
    id: 5,
    description: i18n.t("plans.features.5.description"),
  },
  {
    id: 6,
    description: i18n.t("plans.features.6.description"),
  },
];

const PriceCard = ({
  title,
  price,
  description,
  border = false,
  icon,
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
          <span className="mt-2 text-sm text-gray-500">
            /{i18n.t("plans.period.month")}
          </span>
        </div>
        <div className="w-full flex flex-col items-center">
          <button
            type="button"
            className="w-full inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-title-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-title-primary"
          >
            {i18n.t("plans.button")}
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
              <span
                className={`w-full text-[14px] text-gray-600 ${
                  acess[index + 1] ? "" : "line-through"
                }`}
              >
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
