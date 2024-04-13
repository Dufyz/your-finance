import LeftNavbarLayout from "@/layout/left-navbar-layout";
import Wallet from "./components/wallet";
import CreateWallet from "./components/create-wallet";
import { Suspense } from "react";
import { Wallet as WalletType } from "@/types/Wallet";
import getWallets from "@/fetchs/wallets/getWallets";

export default async function WalletsPage() {
  const wallets = await getWallets();

  return (
    <LeftNavbarLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex w-full flex-col">
          <main className="grid w-full flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            <CreateWallet />
            {wallets.map((wallet: WalletType, index: number) => (
              <div className="grid auto-rows-max items-start gap-4 md:gap-8 ">
                <Wallet key={index} wallet={wallet} />
              </div>
            ))}
          </main>
        </div>
      </Suspense>
    </LeftNavbarLayout>
  );
}
