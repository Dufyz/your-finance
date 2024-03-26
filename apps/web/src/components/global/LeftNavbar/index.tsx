
import Image from "next/image";

import LeftNavbarItem from "./left-navbar-item";

import { IconCards, IconDashboard, IconHeadset, IconSettings, IconWallet } from "@tabler/icons-react";

const LeftNavbar = () => {
    return (
        <div className="w-full max-w-[248px] h-screen bg-[#f6f7fb] border-r sticky top-0 p-4 gap-4 flex flex-col items-start justify-start">
          <div className="w-full flex items-center justify-center gap-2 border-b-2 pb-2">
            <div>
              <Image src="/logo.png" alt="logo" width={72} height={72} />
            </div>
            <div>
              <h1 className="text-2xl text-green-700 font-semibold">YourFinance</h1>
            </div>
            <div></div>
          </div>
          <div className="w-full flex flex-1 flex-col items-start justify-start gap-2">
          <LeftNavbarItem icon={<IconDashboard size={24} />} label="Dashboard" route="/dashboard"/>
          <LeftNavbarItem icon={<IconWallet size={24} />} label="Wallets" route="/wallets"/>
          <LeftNavbarItem icon={<IconCards size={24} />} label="Cards" route="/cards"/>
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-2">
          <LeftNavbarItem icon={<IconHeadset size={24} />} label="Support" route="/support"/>
          <LeftNavbarItem icon={<IconSettings size={24} />} label="Settings" route="/settings"/>
          </div>

        </div>
    );
    }

export default LeftNavbar;