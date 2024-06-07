import RenderTablerIcon, {
  TablerIcon
} from "@/components/Global/render-tabler-icon";
import { i18n } from "@/translate/i18";

const PLANS_CARDS = [
  {
    icon: "IconPigMoney",
    title: i18n.t("about.cards.automated-budgeting.title"),
    description: i18n.t("about.cards.automated-budgeting.description")
  },
  {
    icon: "IconWallet",
    title: i18n.t("about.cards.investment-tracking.title"),
    description: i18n.t("about.cards.investment-tracking.description")
  },
  {
    icon: "IconReportAnalytics",
    title: i18n.t("about.cards.expense-analysis.title"),
    description: i18n.t("about.cards.expense-analysis.description")
  },
  {
    icon: "IconTargetArrow",
    title: i18n.t("about.cards.custom-financial-goals.title"),
    description: i18n.t("about.cards.custom-financial-goals.description")
  }
];

export default function SectionAbout() {
  return (
    <section
      className="flex min-h-[calc(100vh-96px)] items-center justify-center p-8 lg:min-h-[unset]"
      id="About"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl lg:hidden lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-green-700 sm:text-4xl">
            {i18n.t("about.title")}
          </p>
          <p className="text-muted-foreground mt-6 text-lg leading-8">
            {i18n.t("about.description")}
          </p>
        </div>
        <div
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
          data-aos="fade-up"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {PLANS_CARDS.map((card, index) => (
              <div className="relative pl-16" key={index}>
                <div className="font-semibold leading-7 text-green-700">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-700">
                    <RenderTablerIcon
                      icon={card.icon as TablerIcon}
                      size={32}
                      color="#fff"
                    />
                  </div>
                  {card.title}
                </div>
                <div className="text-muted-foreground mt-2 leading-7">
                  {card.description}
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
