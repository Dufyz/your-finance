"use client";

import Link from "next/link"

import LeftNavbarLayout from "@/layout/left-navbar-layout";
import { Logout } from "./components/logout";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import General from "./tabs/general";
import Plan from "./tabs/plan";

 const ProfilePage = () => {
  const router = useRouter();
  const searchParams  = useSearchParams();

  const tabUrlParam = searchParams.get("tab");

  const updateUrlParam = ({param, value}: {
    param: string;
    value: string;
  }) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(param, value);
    router.push("settings?tab=general");
  };

  useEffect(() => {
    if (
      tabUrlParam !== "general" &&
      tabUrlParam !== "security" &&
      tabUrlParam !== "plan" &&
      tabUrlParam !== "payment-method"
    ) {
      updateUrlParam({
        param: "tab",
        value: "general"
      })
    }
  }, [tabUrlParam])
  
    return (
      <LeftNavbarLayout>
         <div className="flex min-h-screen w-full flex-col">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 md:gap-8 ">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-4xl text-green-700 font-semibold">Settings</h1>
        </div>
        <div className="bg-red-500 mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <div className="flex flex-col gap-8 items-start justify-center">
        <nav className="grid gap-4 text-sm text-muted-foreground">
            <Link href="?tab=general" className={`${tabUrlParam === "general" && "font-semibold text-primary"}`}>
              General
            </Link>
            <Link href="?tab=security" className={`${tabUrlParam === "security" && "font-semibold text-primary"}`}>Security</Link>
            <Link href="?tab=plan" className={`${tabUrlParam === "plan" && "font-semibold text-primary"}`}>Plan</Link>
            <Link href="?tab=payment-method" className={`${tabUrlParam === "payment-method" && "font-semibold text-primary"}`}>Payment method</Link>
          </nav>
            <Logout />
        </div>
        <div className="flex w-full min-w-80">
        {
            tabUrlParam === "general" && <General />
          }
          {
            tabUrlParam === "security" && <div>Security</div>
          }
          {
            tabUrlParam === "plan" && <Plan />
          }
          {
            tabUrlParam === "payment-method" && <div>Payment Method</div>
          }
        </div>
        </div>
      </main>
    </div>
      </LeftNavbarLayout>
    );
}


export default ProfilePage;