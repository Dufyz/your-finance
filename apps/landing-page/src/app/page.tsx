"use client";

import { useEffect } from "react";
import AOS from "aos";

import Footer from "@/components/pages/Home/footer";
import SectionAbout from "@/components/pages/Home/section-about";
import SectionPlans from "@/components/pages/Home/section-plans";
import SectionFAQS from "@/components/pages/Home/section-faqs";
import SectionHome from "@/components/pages/Home/section-home";
import { i18n } from "@/translate/i18";

export default function Home() {
  const language = navigator.language;

  useEffect(() => {
    AOS.init({
      duration: 500
    });
  }, []);

  useEffect(() => {
    if (language) i18n.changeLanguage(language);
  }, [language]);

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
