"use client";

import { useEffect } from "react";
import Aos from "aos";
import Footer from "@/components/pages/Home/footer";
import SectionAbout from "@/components/pages/Home/section-about";
import SectionPlans from "@/components/pages/Home/section-plans";
import SectionFAQS from "@/components/pages/Home/section-faqs";
import SectionHome from "@/components/pages/Home/section-home";
import { i18n } from "@/translate/i18";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 500
    });
  }, []);

  useEffect(() => {
    const language = navigator.language;

    if (language) i18n.changeLanguage(language);
  }, []);

  return (
    <>
      <SectionHome />
      <SectionAbout />
      {/* <SectionPlans /> */}
      <SectionFAQS />
      <Footer />
    </>
  );
}
