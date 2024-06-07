"use client";

import { useEffect } from "react";
import AOS from "aos";
import SectionAbout from "@/components/pages/Home/section-about";
import SectionPlans from "@/components/pages/Home/section-plans";
import SectionFAQS from "@/components/pages/Home/section-faqs";
import SectionHome from "@/components/pages/Home/section-home";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 500
    });
  }, []);

  return (
    <>
      <SectionHome />
      <SectionAbout />
      {/* <SectionPlans /> */}
      <SectionFAQS />
    </>
  );
}
