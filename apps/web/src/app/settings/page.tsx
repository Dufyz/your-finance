"use client";

import Link from "next/link"

import LeftNavbarLayout from "@/layout/left-navbar-layout";
import { Logout } from "./components/logout";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import Plan from "./tabs/plan";
import PaymentMethod from "./tabs/payment-method";
import MyAccount from "./tabs/my-account";

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
    router.push("settings?tab=my-account");
  };

  useEffect(() => {
    if (
      tabUrlParam !== "my-account" &&
      tabUrlParam !== "plan" &&
      tabUrlParam !== "payment-method"
    ) {
      updateUrlParam({
        param: "tab",
        value: "my-account"
      })
    }
  }, [tabUrlParam])
  
    return (
      <LeftNavbarLayout>
         <div className="flex w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 md:gap-8 ">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-4xl text-green-700 font-semibold">Settings</h1>
        </div>
        <div className="flex flex-wrap flex-col mx-auto md:grid w-full max-w-6xl items-start justify-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <div className="w-full flex flex-col gap-8 items-start justify-center">
        <nav className="grid gap-4 text-sm text-muted-foreground">
            <Link href="?tab=my-account" className={`${tabUrlParam === "my-account" && "font-semibold text-primary"}`}>
              My Account
            </Link>
            <Link href="?tab=plan" className={`${tabUrlParam === "plan" && "font-semibold text-primary"}`}>Plan</Link>
            <Link href="?tab=payment-method" className={`${tabUrlParam === "payment-method" && "font-semibold text-primary"}`}>Payment method</Link>
          </nav>
            <Logout />
        </div>
        <div className="flex w-full flex-wrap">
        {
            tabUrlParam === "my-account" && <MyAccount/>
          }
          {
            tabUrlParam === "plan" && <Plan />
          }
          {
            tabUrlParam === "payment-method" && <PaymentMethod />
          }
        </div>
        </div>
      </main>
    </div>
      </LeftNavbarLayout>
    );
}


export default ProfilePage;