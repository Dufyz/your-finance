import i18n from "i18next";

import { messages } from "./languages";

i18n
  .use({
    type: "3rdParty"
  })
  .init({
    debug: false,
    defaultNS: ["translations"],
    fallbackLng: "pt",
    ns: ["translations"],
    resources: messages
  });

export { i18n };
