import { IconCheck, IconX } from "@tabler/icons-react";
import { i18n } from "@/translate/i18";
import { FEATURES } from "@/data/features";
import RenderTablerIcon, { TablerIcon } from "./render-tabler-icon";

interface IPriceCard {
  title: string;
  price: string;
  description: string;
  border?: boolean;
  icon: string;
  acess: { [key: number]: boolean };
}

export default function PriceCard({
  title,
  price,
  description,
  border = false,
  icon,
  acess
}: IPriceCard) {
  return (
    <div
      className={`h-full w-full rounded-md border-2 bg-gray-50 shadow-lg ${
        border ? " border-green-700" : ""
      }`}
    >
      <div className="flex flex-col items-start justify-center gap-8 p-8">
        <div className="flex flex-col items-start justify-center gap-2">
          <div className="flex items-center justify-center gap-4">
            <RenderTablerIcon
              icon={icon as TablerIcon}
              size={32}
              color="#fff"
            />
            <span className="text-2xl font-semibold capitalize text-green-700">
              {title}
            </span>
          </div>
          <div className="flex justify-center">
            <span className="text-muted-foreground">{description}</span>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-5xl font-bold text-green-700">${price}</span>
          <span className="mt-2 text-sm text-gray-500">
            /{i18n.t("plans.period.month")}
          </span>
        </div>
        <div className="flex w-full flex-col items-center">
          <button
            type="button"
            className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-green-700 px-5 py-3 font-medium text-white shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
          >
            {i18n.t("plans.button")}
          </button>
        </div>
        <div className="flex w-full flex-col items-start justify-start gap-2">
          {FEATURES.map((feature, index) => (
            <div className="flex w-full gap-4" key={index}>
              {acess[index + 1] ? (
                <IconCheck size={32} color="#099268" />
              ) : (
                <IconX size={32} color="red" />
              )}
              <span
                className={`text-muted-foreground w-full text-sm ${
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
}
