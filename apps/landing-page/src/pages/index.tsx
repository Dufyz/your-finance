import RootLayout from "@/layouts/RootLayout";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import PriceCard from "@/components/Global/PriceCard";
import SocialIcon from "@/components/Global/SocialIcon";
import FaqsCard from "@/components/Global/FaqsCard";
import Head from "next/head";
import scrollTo from "@/utils/scrollTo";
import { useEffect, useState } from "react";
import AOS from "aos";
import DonateModal from "@/components/Global/DonateModal";

const pricesCards = {
  free: {
    title: "Free",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus non nunc aliquam vestibulum. Sed vitae",
    price: "0.00",
    features: [
      "Acesso 24 horas",
      "Integração com Múltiplas Plataformas",
      "Relatórios Detalhados",
      "Suporte Prioritário",
      "Backup Automático",
      "Relatórios Detalhados",
    ],
    buttonText: "Buy plan",
    icon: "pig-money",
    period: "month",
  },
  monthly: {
    title: "Monthly",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus non nunc aliquam vestibulum. Sed vitae",
    price: "4.99",
    features: [
      "Acesso 24 horas",
      "Integração com Múltiplas Plataformas",
      "Relatórios Detalhados",
      "Suporte Prioritário",
      "Backup Automático",
      "Relatórios Detalhados",
    ],
    buttonText: "Buy plan",
    icon: "calendar-month",
    period: "month",
  },
  yearly: {
    title: "Yearly",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus non nunc aliquam vestibulum. Sed vitae",
    price: "49.99",
    features: [
      "Acesso 24 horas",
      "Integração com Múltiplas Plataformas",
      "Relatórios Detalhados",
      "Suporte Prioritário",
      "Backup Automático",
      "Relatórios Detalhados",
    ],
    buttonText: "Buy plan",
    icon: "lifetime",
    period: "year",
  },
};

const faqsList = [
  {
    q: "What are some random questions to ask?",
    a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
  },
  {
    q: "Do you include common questions?",
    a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
  },
  {
    q: "Can I use this for 21 questions?",
    a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
  },
  {
    q: "Are these questions for girls or for boys?",
    a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).",
  },
  {
    q: "What do you wish you had more talent doing?",
    a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",
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
              <h1 className="max-w-[350px] text-[32px] text-title-primary text-center font-medium md:text-[44px] md:max-w-[400px] md:text-start lg:text-[48px] lg:max-w-[500px] xl:text-[64px]">
                Simplyfing Your Financial Future.
              </h1>
              <button
                className="h-[48px] w-[164px] p-[16px] text-[16px] font-semibold bg-title-primary flex items-center justify-center text-text-secondary rounded-[8px] hover:bg-title-primary-hover"
                onClick={() => scrollTo("About")}
              >
                GET START ➞
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
                Innovate. Strategize. Achieve. Grow.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Unleash financial brilliance with cutting-edge tools designed
                for savvy money management. Embrace simplicity, empower
                strategy, and witness growth.
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
                    Automated Budgeting
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    Set budgets that work for you. Our automated system
                    categorizes your expenses, helps you track spending, and
                    adjusts your budget in real time for a worry-free financial
                    experience.
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
                    Investment Tracking
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    Stay informed with real-time tracking of your investments.
                    Monitor performance, assess risk, and get personalized
                    recommendations to optimize your portfolio's growth
                    potential.
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
                    Expense Analysis
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    Gain deeper understanding of your financial habits with our
                    advanced expense analysis tools. Discover trends, identify
                    saving opportunities, and make informed decisions to enhance
                    your financial health
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
                    Custom Financial Goals
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    Set and achieve your financial milestones with our
                    goal-setting feature. Whether it's saving for a vacation,
                    education, or retirement, we help you plan and progress
                    towards your dreams.
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
            Plans & Pricing
          </h1>
          <div className="w-full grid items-center justify-center grid-cols-1 gap-[48px] sm:grid-cols-2  lg:grid-cols-3">
            <PriceCard {...pricesCards.free} />
            <PriceCard {...pricesCards.monthly} border />
            <PriceCard {...pricesCards.yearly} border />
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
            </h1>
            <p className="text-gray-600 text-lg">
              Answered all frequently asked questions, Still confused? feel free
              to contact us.
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
                Expertise. Agility. Anywhere.
              </h1>
              <p className="text-text-primary text-start text-[20px] sm:text-center">
                Our diverse and driven team propels your financial journey,
                empowering you to achieve your goals with precision. Agile and
                committed, we pride ourselves on delivering excellence.
              </p>
              <div className="flex flex-col flex-wrap items-center justify-between gap-[16px] sm:flex-row">
                <button className="bg-btn-secondary hover:bg-btn-secondary-hover text-text-secondary center text-[20px] flex items-center justify-center w-[130px] rounded-[16px] p-[8px] sm:w-[160px] md:w-[180px]">
                  👀 More
                </button>

                <button
                  className="bg-btn-secondary hover:bg-btn-secondary-hover text-text-secondary center text-[20px] flex items-center justify-center w-[130px] rounded-[16px] p-[8px] sm:w-[160px] md:w-[180px]"
                  onClick={() => setIsDonateModalOpen(true)}
                >
                  💰 Donate
                </button>
                <button className="bg-btn-secondary hover:bg-btn-secondary-hover text-text-secondary center text-[20px] flex items-center justify-center w-[130px] rounded-[16px] p-[8px] sm:w-[160px] md:w-[180px]">
                  <a href="https://linktr.ee/Dufyz" target="_blank">
                    👋 Contact
                  </a>
                </button>
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
                © 2024 YourFinance. All Rights Reserved.
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
