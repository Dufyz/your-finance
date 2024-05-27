import Link from "next/link";

import LeftNavbarLayout from "@/layout/left-navbar-layout";
import { Logout } from "./components/logout";
import MyAccount from "./components/my-account/my-account";
import { Suspense } from "react";
import MyAccountSkeleton from "./components/my-account/skeleton";
import Plan from "./components/plan";
import PaymentMethod from "./components/payment-method/payment-method";

export default async function SettingsPage({
  searchParams
}: {
  searchParams: {
    tab: "my-account" | "plan" | "payment-method";
  };
}) {
  //TODO Implementar features comentadas
  const tabUrlParam = searchParams?.tab || "my-account";

  return (
    <LeftNavbarLayout>
      <div className="flex w-full flex-col">
        <main className="flex flex-1 flex-col gap-4 md:gap-8 ">
          <div className="mx-auto grid w-full max-w-6xl gap-2">
            <h1 className="text-4xl font-semibold text-green-700">Settings</h1>
          </div>
          <div className="mx-auto flex w-full max-w-6xl flex-col flex-wrap items-start justify-start gap-6 md:grid md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
            <div className="flex w-full flex-col items-start justify-center gap-8">
              <nav className="text-muted-foreground grid gap-4 text-sm">
                <Link
                  href="?tab=my-account"
                  className={`${
                    tabUrlParam === "my-account" && "text-primary font-semibold"
                  }`}
                >
                  My Account
                </Link>
                <Link
                  href="?tab=plan"
                  className={`${
                    tabUrlParam === "plan" && "text-primary font-semibold"
                  }`}
                >
                  Plan
                </Link>
                <Link
                  href="?tab=payment-method"
                  className={`${
                    tabUrlParam === "payment-method" &&
                    "text-primary font-semibold"
                  }`}
                >
                  Payment method
                </Link>
              </nav>
              <Logout />
            </div>
            <div className="flex w-full flex-wrap">
              {tabUrlParam === "my-account" && (
                <Suspense fallback={<MyAccountSkeleton />}>
                  <MyAccount />
                </Suspense>
              )}
              {tabUrlParam === "plan" && (
                <Suspense fallback={<div>Loading...</div>}>
                  <Plan />
                </Suspense>
              )}
              {tabUrlParam === "payment-method" && (
                <Suspense fallback={<div>Loading...</div>}>
                  <PaymentMethod />
                </Suspense>
              )}
            </div>
          </div>
        </main>
      </div>
    </LeftNavbarLayout>
  );
}
