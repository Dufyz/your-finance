import LeftNavbarItem from "./left-navbar-item";

import {  IconCategory, IconCreditCard, IconFileInvoice, IconHeadset, IconManualGearbox, IconSettings, IconTargetArrow, IconTransfer, IconWallet } from "@tabler/icons-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const LeftNavbar = () => {
    return (
        <div className="w-full max-w-[232px] h-screen bg-[#f6f7fb] border-r sticky top-0 p-4 gap-4 flex flex-col items-start justify-start shadow-lg">
          <div className="w-full flex flex-col items-center justify-center">
          <div>
              <Image src="/logo.png" alt="logo" width={72} height={72} />
            </div>
            <div className="ml-[-8px]">
              <h1 className="text-2xl text-green-700 font-semibold">YourFinance</h1>
            </div>
            
          </div>
              <Separator  />
          <div className="w-full flex flex-1 flex-col items-start justify-start gap-4">
          <LeftNavbarItem icon={<IconCategory size={24} color="#166534" />} label="Dashboard" route="/dashboard"/>
          <LeftNavbarItem icon={<IconTransfer size={24} color="#166534" />} label="Transactions" route="/transactions"/>
          <LeftNavbarItem icon={<IconWallet size={24} color="#166534" />} label="Wallets" route="/wallets"/>
          <LeftNavbarItem icon={<IconCreditCard size={24} color="#166534" />} label="Cards" route="/cards"/>
          <LeftNavbarItem icon={<IconFileInvoice size={24} color="#166534" />} label="Invoices" route="/invoices" disabled/>
          <LeftNavbarItem icon={<IconTargetArrow size={24} color="#166534" />} label="Goals" route="/goals" disabled/>
          <LeftNavbarItem icon={<IconManualGearbox size={24} color="#166534" />} label="Categories" route="/categories" disabled/>
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-2">
          <LeftNavbarItem icon={<IconHeadset size={24} color="#166534" />} label="Support" route="/support"/>
          <LeftNavbarItem icon={<IconSettings size={24} color="#166534" />} label="Settings" route="/settings"/>
          </div>

        </div>
    );
    }

export default LeftNavbar;