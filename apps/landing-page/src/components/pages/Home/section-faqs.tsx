import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { i18n } from "@/translate/i18";

export const FAQS = [
  {
    question: i18n.t("faqs.list.1.question"),
    answer: i18n.t("faqs.list.1.answer")
  },
  {
    question: i18n.t("faqs.list.2.question"),
    answer: i18n.t("faqs.list.2.answer")
  },
  {
    question: i18n.t("faqs.list.3.question"),
    answer: i18n.t("faqs.list.3.answer")
  },
  {
    question: i18n.t("faqs.list.4.question"),
    answer: i18n.t("faqs.list.4.answer")
  },
  {
    question: i18n.t("faqs.list.5.question"),
    answer: i18n.t("faqs.list.5.answer")
  }
];

export default function SectionFAQS() {
  return (
    <section
      className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 p-8"
      id="FAQs"
      data-aos="fade-up"
    >
      <div className="w-full space-y-3 text-start">
        <h1 className="text-3xl font-semibold text-green-700">
          {i18n.t("faqs.title")}
        </h1>
        <p className="text-muted-foreground text-lg">
          {i18n.t("faqs.description")}
        </p>
      </div>
      <div className="mx-auto w-full">
        <Accordion type="single" collapsible>
          {FAQS.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
