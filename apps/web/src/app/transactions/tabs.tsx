import {
  Tabs as TabsComponent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import CreateTransaction from "./components/create-transaction";
import Week from "./week";
import Month from "./month";
import Year from "./year";
import Custom from "./custom";
import { Wallet } from "@/types/Wallet";
import { User } from "@/types/User";

export default function Tabs({wallets, user}: {
  user: User,
  wallets: Wallet[]
}) {
  return (
    <TabsComponent defaultValue="week">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="week">Week</TabsTrigger>
          <TabsTrigger value="month">Month</TabsTrigger>
          <TabsTrigger value="year">Year</TabsTrigger>
          <TabsTrigger value="custom">Custom</TabsTrigger>
        </TabsList>
        <div className="ml-auto flex flex-col items-center gap-2">
          <CreateTransaction wallets={wallets} user={user}/>
        </div>
      </div>
      <Week wallets={wallets} user={user}/>
      {/* <Month /> */}
      {/* <Year /> */}
      {/* <Custom /> */}
    </TabsComponent>
  );
}
