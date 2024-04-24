import LeftNavbarLayout from "@/layout/left-navbar-layout";
import TotalSaves from "./total-saves";
import TotalRevenues from "./total-revenues";
import TotalExpenses from "./total-expenses";
import TotalInvoices from "./total-invoices";
import RecentTransactions from "./recent-transactions";
import Goals from "./goals";
import DateRangePicker from "./components/date-range-picker";

export default async function DashboardPage() {
  return (
    <LeftNavbarLayout>
      <div className="flex w-full flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div>
            {/* <DateRangePicker /> */}
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <TotalSaves />
            <TotalRevenues />
            <TotalExpenses />
            <TotalInvoices />
          </div>
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <RecentTransactions />
            <Goals />
          </div>
        </main>
      </div>
    </LeftNavbarLayout>
  );
}
