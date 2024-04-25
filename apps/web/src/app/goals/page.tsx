import LeftNavbarLayout from "@/layout/left-navbar-layout";
import { Suspense } from "react";

export default async function GoalsPage() {
  return (
    <LeftNavbarLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex w-full flex-col">
          <main className="grid w-full flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            <h1>Goals</h1>
          </main>
        </div>
      </Suspense>
    </LeftNavbarLayout>
  );
}
