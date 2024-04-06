import {
    Tabs as TabsComponent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import CreateTransaction from "./components/create-transaction"
import Week from "./week"
import Month from "./month";
import Year from "./year";
import Custom from "./custom";

export default function Tabs() {

    return (
        <TabsComponent defaultValue="week" >
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="month">Month</TabsTrigger>
            <TabsTrigger value="year">Year</TabsTrigger>
            <TabsTrigger value="custom">Custom</TabsTrigger>
          </TabsList>
          <div className="ml-auto flex flex-col items-center gap-2">
           <CreateTransaction />
          </div>
        </div>
       <Week />
        <Month />
        <Year />
        <Custom />
      </TabsComponent>
    )
}