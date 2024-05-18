import LeftNavbarLayout from "@/layout/left-navbar-layout";
import CreateWallet from "./components/create-wallet";
import { Suspense } from "react";
import { Wallet } from "@/types/Wallet";
import getWallets from "@/fetchers/wallets/getWallets";
import getUser from "@/fetchers/user/getUser";
import WalletCard from "./components/wallet-card";

export default async function WalletsPage() {
  //TODO Implementar lógica e atualização de is_main das wallets

  const user = await getUser();

  const wallets = await getWallets({
    user_id: user.id
  });

  const orderedWallets = wallets.sort((a: Wallet, b: Wallet) => {
    if (a.is_main && !b.is_main) {
      return -1;
    } else if (!a.is_main && b.is_main) {
      return 1;
    } else {
      return 0;
    }
  });

  return (
    <LeftNavbarLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex w-full flex-col">
          <main className="grid w-full flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            <CreateWallet user={user} />
            {orderedWallets.map((wallet: Wallet, index: number) => (
              <div
                className="grid auto-rows-max items-start gap-4 md:gap-8"
                key={index}
              >
                <WalletCard key={index} wallet={wallet} user={user} />
              </div>
            ))}
          </main>
        </div>
      </Suspense>
    </LeftNavbarLayout>
  );
}
