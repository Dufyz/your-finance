import PriceCard from "@/components/Global/price-card";
import { PRICES_CARDS } from "@/data/prices-cards";
import { i18n } from "@/translate/i18";

export default function SectionPlans() {
  return (
    <section
      className="mx-auto flex min-h-[calc(100vh-96px)] w-full max-w-7xl flex-col items-start justify-center gap-12 p-8"
      id="Plans"
      data-aos="fade-up"
    >
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-green-700 sm:text-4xl">
        {i18n.t("plans.title")}
      </h1>
      <div className="grid w-full grid-cols-1 items-center justify-center gap-12 sm:grid-cols-2">
        <PriceCard {...PRICES_CARDS.free} />
        <PriceCard {...PRICES_CARDS.pro} border />
      </div>
    </section>
  );
}
