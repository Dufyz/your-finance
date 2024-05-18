import LeftNavbarLayout from "@/layout/left-navbar-layout";
import TotalSaves from "./total-saves";
import TotalExpenses from "./total-expenses";
import TotalInvoices from "./total-invoices";
import Goals from "./goals";
import TotalIncomes from "./total-incomes";
import getUser from "@/fetchers/user/getUser";
import { currencys } from "@/data/currencys";
import TotalBalance from "./total-balance";
import { getLastTransactions } from "@/fetchers/transactions/getLastTransactions";
import getWallets from "@/fetchers/wallets/getWallets";
import { getTotals } from "@/fetchers/dashboard/getTotals";
import RecentTransactions from "./recent-transactions";

export default async function DashboardPage() {
  const user = await getUser();

  const totals = await getTotals({
    user_id: user.id
  });

  const lastTransactions = await getLastTransactions({
    user_id: user.id
  });

  const wallets = await getWallets({
    user_id: user.id
  });

  const {
    totalBalance,
    totalSaves,
    totalIncomes,
    totalExpenses,
    totalInvoices
  } = totals;

  const currencyCC =
    currencys.find((currency) => currency.cc === user.currency)?.cc ||
    currencys.find((currency) => currency.cc === "USD")?.cc;

  return (
    <LeftNavbarLayout>
      <div className="flex h-full w-full flex-1 flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          {/* <div>
            <DateRangePicker />
          </div> */}
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <TotalBalance total={totalBalance} currencyCC={currencyCC} />
            <TotalSaves total={totalSaves} currencyCC={currencyCC} />
            <TotalIncomes total={totalIncomes} currencyCC={currencyCC} />
            <TotalExpenses total={totalExpenses} currencyCC={currencyCC} />
            <TotalInvoices total={totalInvoices} currencyCC={currencyCC} />
          </div>
          <div className="flex h-full w-full gap-4">
            <RecentTransactions
              transactions={lastTransactions}
              user={user}
              wallets={wallets}
            />
            {/* <Goals /> */}
          </div>
        </main>
      </div>
    </LeftNavbarLayout>
  );
}
