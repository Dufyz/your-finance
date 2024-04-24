import LeftNavbarLayout from "@/layout/left-navbar-layout";
import Tabs from "./tabs";
import getWallets from "@/fetchs/wallets/getWallets";
import getUser from "@/fetchs/user/getUser";

export default async function TransactionsPage() {
  const wallets = await getWallets();
  const user = await getUser();

  return (
    <LeftNavbarLayout>
      <div className="flex w-full flex-col">
        <main className="grid w-full flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-3">
            <Tabs wallets={wallets} user={user} />
          </div>
        </main>
      </div>
    </LeftNavbarLayout>
  );
}
