import LeftNavbarLayout from "@/layout/left-navbar-layout";
import getUser from "@/fetchers/user/getUser";
import { currencys } from "@/data/currencys";
import { getLastTransactions } from "@/fetchers/transactions/getLastTransactions";
import getWallets from "@/fetchers/wallets/getWallets";
import { getTotals } from "@/fetchers/dashboard/getTotals";
import DashboardIndex from ".";

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

  const currencyCC =
    currencys.find((currency) => currency.cc === user.currency)?.cc ||
    currencys.find((currency) => currency.cc === "USD")?.cc;

  return (
    <LeftNavbarLayout>
      <div className="flex h-full w-full flex-1 flex-col">
        <DashboardIndex initialData={{
          totals,
          lastTransactions
        }} wallets={wallets} currencyCC={currencyCC} user={user}/>
      </div>
    </LeftNavbarLayout>
  );
}
