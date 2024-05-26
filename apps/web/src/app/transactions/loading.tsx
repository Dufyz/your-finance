import LeftNavbarLayout from "@/layout/left-navbar-layout";
import {
  Tabs as TabsComponent,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";
import { Skeleton } from "@/components/ui/skeleton";

function TransactionTableSkeleton({
  description,
  showCalendar
}: {
  description: string;
  showCalendar?: boolean;
}) {
  return (
    <Card>
      <CardHeader className="flex w-full flex-row flex-wrap items-start justify-between gap-4 px-7">
        <div className="flex flex-col gap-[6px]">
          <CardTitle>History</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        {showCalendar && (
          <div>
            <Skeleton className="h-12 w-80" />
          </div>
        )}
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Description</TableHead>
              <TableHead className="hidden sm:table-cell">Category</TableHead>
              <TableHead className="hidden sm:table-cell">Type</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="hidden md:table-cell">Value</TableHead>
              <TableHead className="text-right">Edit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 5 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell colSpan={6}>
                  <Skeleton className="h-14" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
export default function LoadingTransactions() {
  return (
    <LeftNavbarLayout>
      <div className="flex w-full flex-col">
        <main className="grid w-full flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-3">
            <TabsComponent defaultValue="week">
              <div className="flex items-center">
                <TabsList>
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                  <TabsTrigger value="year">Year</TabsTrigger>
                  <TabsTrigger value="custom">Custom</TabsTrigger>
                </TabsList>
                <div className="ml-auto flex flex-col items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-12 w-12 gap-1 rounded-full bg-green-700 text-sm hover:bg-green-800"
                    disabled
                  >
                    <IconPlus size={32} color="#fff" />
                  </Button>
                </div>
              </div>
              <TabsContent value="week">
                <TransactionTableSkeleton
                  description={
                    "Here you can see all the transactions you made this week."
                  }
                />
              </TabsContent>
              <TabsContent value="month">
                <TransactionTableSkeleton
                  description={
                    "Here you can see all the transactions you made this month."
                  }
                />
              </TabsContent>
              <TabsContent value="year">
                <TransactionTableSkeleton
                  description={
                    "Here you can see all the transactions you made this year."
                  }
                />
              </TabsContent>
              <TabsContent value="custom">
                <TransactionTableSkeleton
                  description={
                    "Here you can see all the transactions you made between the selected dates."
                  }
                  showCalendar
                />
              </TabsContent>
            </TabsComponent>
          </div>
        </main>
      </div>
    </LeftNavbarLayout>
  );
}
