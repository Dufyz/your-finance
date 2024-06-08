import LeftNavbarItem from "./left-navbar-item";

import {
  IconCategory,
  IconChecklist,
  IconCreditCard,
  IconFileInvoice,
  IconHeadset,
  IconManualGearbox,
  IconNote,
  IconSettings,
  IconTargetArrow,
  IconTransfer,
  IconWallet
} from "@tabler/icons-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const LeftNavbar = () => {
  return (
    <div className="max-w sticky top-0 flex h-screen w-full max-w-[232px] flex-col items-start justify-start gap-4 border-r bg-[#f6f7fb] p-4 shadow-lg">
      <div className="flex w-full flex-col items-center justify-center">
        <div>
          <Image src="/logo.png" alt="logo" width={72} height={72} />
        </div>
        <div className="ml-[-8px]">
          <h1 className="text-2xl font-semibold text-green-700">YourFinance</h1>
        </div>
      </div>
      <Separator />
      <div className="flex w-full flex-1 flex-col items-start justify-start gap-4">
        <LeftNavbarItem
          icon={<IconCategory size={24} color="#166534" />}
          label="Dashboard"
          route="/dashboard"
        />
        <LeftNavbarItem
          icon={<IconTransfer size={24} color="#166534" />}
          label="Transactions"
          route="/transactions"
        />
        <LeftNavbarItem
          icon={<IconWallet size={24} color="#166534" />}
          label="Wallets"
          route="/wallets"
        />
        <LeftNavbarItem
          icon={<IconCreditCard size={24} color="#166534" />}
          label="Cards"
          route="/cards"
          disabled
        />
        <LeftNavbarItem
          icon={<IconFileInvoice size={24} color="#166534" />}
          label="Invoices"
          route="/invoices"
          disabled
        />
        <LeftNavbarItem
          icon={<IconTargetArrow size={24} color="#166534" />}
          label="Goals"
          route="/goals"
        />
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-2">
        <LeftNavbarItem
          icon={<IconHeadset size={24} color="#166534" />}
          label="Support"
          route="/support"
        />
        <LeftNavbarItem
          icon={<IconSettings size={24} color="#166534" />}
          label="Settings"
          route="/settings?tab=my-account"
        />
      </div>
    </div>
  );
};

export default LeftNavbar;
