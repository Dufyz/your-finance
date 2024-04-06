import LeftNavbarLayout from "@/layout/left-navbar-layout";
import Wallet from "./components/wallet";
import CreateWallet from "./components/create-wallet";

const list = [1,2,3, 4, 1,2,3, 4, 1,2,3, 4, 1,2,3, 4, 1,2,3, 4]
export default function WalletsPage(){

    return (
        <LeftNavbarLayout>
        <div className="flex w-full flex-col">
           <main className="w-full grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            <CreateWallet />
            {list.map((item, index) => (
             <div className="grid auto-rows-max items-start gap-4 md:gap-8 ">
                <Wallet key={index} />
             </div>
                )
            )}
           </main>
       </div>
      </LeftNavbarLayout>
    )
}