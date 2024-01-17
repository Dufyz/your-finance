import RootLayout from "@/layouts/RootLayout";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import PriceCard from "@/components/Global/PriceCard";
import SocialIcon from "@/components/Global/SocialIcon";
import FaqsCard from "@/components/Global/DonateModal/FaqsCard";
import Head from "next/head";
import scrollTo from "@/utils/scrollTo";
import { useEffect, useState } from "react";
import AOS from "aos";
import DonateModal from "@/components/Global/DonateModal";
import { i18n } from "@/translate/i18";

const pricesCards = {
  starter: {
    title: i18n.t("plans.cards.starter.title"),
    description: i18n.t("plans.cards.starter.description"),
    price: i18n.t("plans.cards.starter.price"),
    acess: {
      1: true,
      2: true,
    },
    icon: "pig-money",
  },
  investor: {
    title: i18n.t("plans.cards.investor.title"),
    description: i18n.t("plans.cards.investor.description"),
    price: i18n.t("plans.cards.investor.price"),
    acess: {
      1: true,
      2: true,
      3: true,
      4: true,
    },
    icon: "calendar-month",
  },
  professional: {
    title: i18n.t("plans.cards.professional.title"),
    description: i18n.t("plans.cards.professional.description"),
    price: i18n.t("plans.cards.professional.price"),
    acess: {
      1: true,
      2: true,
      3: true,
      4: true,
      5: true,
      6: true,
    },
    icon: "lifetime",
  },
};

const faqsList = [
  {
    question: i18n.t("faqs.list.1.question"),
    answer: i18n.t("faqs.list.1.answer"),
  },
  {
    question: i18n.t("faqs.list.2.question"),
    answer: i18n.t("faqs.list.2.answer"),
  },
  {
    question: i18n.t("faqs.list.3.question"),
    answer: i18n.t("faqs.list.3.answer"),
  },
  {
    question: i18n.t("faqs.list.4.question"),
    answer: i18n.t("faqs.list.4.answer"),
  },
  {
    question: i18n.t("faqs.list.5.question"),
    answer: i18n.t("faqs.list.5.answer"),
  },
];

export default function Home() {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <RootLayout>
        <Head>
          <title>YourFinance</title>
          <meta name="description" content="YourFinance" />
          <link rel="icon" href="/logo.svg" />
          <link
            href="https://unpkg.com/aos@2.3.1/dist/aos.css"
            rel="stylesheet"
          />
        </Head>
        <section
          className="p-[32px] w-full h-[calc(60vh-96px)] flex items-center justify-center"
          id="Home"
        >
          <div className="w-full max-w-main-content mx-auto flex flex-nowrap justify-center items-center gap-[32px] md:justify-between h-[400px]">
            <div className="flex flex-col items-center justify-center gap-[32px] md:items-start">
              <h1 className="max-w-[350px] text-[32px] text-title-primary text-center font-medium md:text-[44px] md:max-w-[400px] md:text-start lg:text-[48px] lg:max-w-[525px] xl:text-[64px]">
                {i18n.t("home.title")}
              </h1>
              <button
                className="h-[48px] w-[164px] p-[16px] text-[16px] font-semibold bg-title-primary flex items-center justify-around text-text-secondary rounded-[8px] hover:bg-title-primary-hover"
                onClick={() => scrollTo("About")}
              >
                {i18n.t("home.button")} ➞
              </button>
            </div>
            <div className="hidden items-center justify-center w-full max-w-[400px] md:flex lg:max-w-[600px] h-[100%]">
              <Spline scene="https://prod.spline.design/ElYXVrG-jAaLyxfj/scene.splinecode" />
            </div>
          </div>
        </section>

        <section
          className="p-[32px]  min-h-[calc(100vh-96px)] flex items-center justify-center"
          id="About"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl lg:text-center">
              <p className="mt-2 text-3xl font-bold tracking-tight text-title-primary sm:text-4xl">
                {i18n.t("about.title")}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {i18n.t("about.description")}
              </p>
            </div>
            <div
              className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
              data-aos="fade-up"
            >
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-text-primary">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-title-primary">
                      <Image
                        width={32}
                        height={32}
                        src={"/icons/budget.svg"}
                        alt="budget icon"
                        color="#fff"
                      />
                    </div>
                    {i18n.t("about.cards.automated-budgeting.title")}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {i18n.t("about.cards.automated-budgeting.description")}
                  </dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-text-primary">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-title-primary">
                      <Image
                        width={32}
                        height={32}
                        src={"/icons/wallet.svg"}
                        alt="wallet icon"
                        color="#fff"
                      />
                    </div>
                    {i18n.t("about.cards.investment-tracking.title")}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {i18n.t("about.cards.investment-tracking.description")}
                  </dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-text-primary">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-title-primary">
                      <Image
                        width={32}
                        height={32}
                        src={"/icons/expense-analysis.svg"}
                        alt="Expense analysis icon"
                        color="#fff"
                      />
                    </div>
                    {i18n.t("about.cards.expense-analysis.title")}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {i18n.t("about.cards.expense-analysis.description")}
                  </dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-text-primary">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-title-primary">
                      <Image
                        width={32}
                        height={32}
                        src={"/icons/custom-financial-goals.svg"}
                        alt="custom financial goals icon"
                        color="#fff"
                      />
                    </div>
                    {i18n.t("about.cards.custom-financial-goals.title")}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {i18n.t("about.cards.custom-financial-goals.description")}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section
          className="p-[32px] min-h-[calc(100vh-96px)] w-full max-w-main-content mx-auto flex flex-col items-start justify-center gap-[48px]"
          id="Plans"
          data-aos="fade-up"
        >
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-title-primary sm:text-4xl">
            {i18n.t("plans.title")}
          </h1>
          <div className="w-full grid items-center justify-center grid-cols-1 gap-[48px] sm:grid-cols-2  lg:grid-cols-3">
            <PriceCard {...pricesCards.starter} />
            <PriceCard {...pricesCards.investor} border />
            <PriceCard {...pricesCards.professional} border />
          </div>
        </section>

        <section
          className="p-[32px] max-w-main-content mx-auto flex flex-col items-center justify-center gap-[32px]"
          id="FAQs"
          data-aos="fade-up"
        >
          <div className="space-y-3 text-start w-full">
            <h1 className="text-3xl text-title-primary font-semibold">
              Frequently Asked Questions
              {i18n.t("faqs.title")}
            </h1>
            <p className="text-gray-600 text-lg">
              {i18n.t("faqs.description")}
            </p>
          </div>
          <div className="w-full mx-auto">
            {faqsList.map((item, idx) => (
              <FaqsCard idx={idx} faqsList={item} key={idx} />
            ))}
          </div>
        </section>

        <footer
          className="p-[32px] w-full max-w-main-content mx-auto  flex flex-col items-start justify-center gap-[32px] sm:items-center"
          id="Contact"
          data-aos="fade-up"
        >
          <div className="w-full flex flex-col items-center justify-center gap-[64px]">
            <div className="flex flex-col gap-[32px] items-center justify-center md:py-[32px]">
              <h1 className="text-title-primary font-bold text-[32px]">
                {i18n.t("contact.title")}
              </h1>
              <p className="text-text-primary text-start text-[20px] sm:text-center">
                {i18n.t("contact.description")}
              </p>
              <div className="flex flex-col flex-wrap items-center justify-between gap-[16px] sm:flex-row">
                <a href="https://dufyz.netlify.app/">
                  <button className="bg-btn-secondary hover:bg-btn-secondary-hover text-text-secondary center text-[20px] flex items-center justify-center w-[130px] rounded-[16px] p-[8px] sm:w-[160px] md:w-[180px]">
                    👀 {i18n.t("contact.button.more")}
                  </button>
                </a>

                <button
                  className="bg-btn-secondary hover:bg-btn-secondary-hover text-text-secondary center text-[20px] flex items-center justify-center w-[130px] rounded-[16px] p-[8px] sm:w-[160px] md:w-[180px]"
                  onClick={() => setIsDonateModalOpen(true)}
                >
                  💰 {i18n.t("contact.button.donate")}
                </button>
                <a href="https://linktr.ee/Dufyz" target="_blank">
                  <button className="bg-btn-secondary hover:bg-btn-secondary-hover text-text-secondary center text-[20px] flex items-center justify-center w-[130px] rounded-[16px] p-[8px] sm:w-[160px] md:w-[180px]">
                    👋 {i18n.t("contact.button.contact")}
                  </button>
                </a>
              </div>
            </div>

            <div className="w-full flex flex-col items-center justify-center gap-[48px] border-t-[2px] border-[text-primary-hover] pt-[32px] flex-wrap sm:flex-row md:justify-between">
              <div>
                <Image
                  src={"/logo.svg"}
                  height={80}
                  width={80}
                  alt="logo icon"
                />
              </div>
              <p className="text-text-primary text-[16px] center">
                {i18n.t("contact.copy-right")}
              </p>
              <div className="flex items-center justify-center gap-[48px] flex-wrap sm:justify-between">
                <SocialIcon link="">
                  <Image
                    src={"/icons/facebook.svg"}
                    alt="facebook icon"
                    width={24}
                    height={24}
                    color="#099268"
                  />
                </SocialIcon>
                <SocialIcon link="">
                  <Image
                    src={"/icons/twitter.svg"}
                    alt="facebook icon"
                    width={24}
                    height={24}
                    color="#099268"
                  />
                </SocialIcon>
                <SocialIcon link="">
                  <Image
                    src={"/icons/linkedin.svg"}
                    alt="facebook icon"
                    width={24}
                    height={24}
                    color="#099268"
                  />
                </SocialIcon>
              </div>
            </div>
          </div>
        </footer>
      </RootLayout>
      <DonateModal
        isOpen={isDonateModalOpen}
        setIsOpen={setIsDonateModalOpen}
      />
    </>
  );
}
