import { i18n } from "@/translate/i18";

export const PRICES_CARDS = {
  free: {
    title: i18n.t("plans.cards.starter.title"),
    description: i18n.t("plans.cards.starter.description"),
    price: i18n.t("plans.cards.starter.price"),
    acess: {
      1: true,
      2: true
    },
    icon: "pig-money"
  },
  pro: {
    title: i18n.t("plans.cards.professional.title"),
    description: i18n.t("plans.cards.professional.description"),
    price: i18n.t("plans.cards.professional.price"),
    acess: {
      1: true,
      2: true,
      3: true,
      4: true,
      5: true,
      6: true
    },
    icon: "lifetime"
  }
};
