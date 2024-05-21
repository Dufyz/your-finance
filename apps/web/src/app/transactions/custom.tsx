"use client";

import { Badge } from "@/components/ui/badge";

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
import { TabsContent } from "@/components/ui/tabs";
import DateRangePicker from "./components/date-range-picker";
import { Wallet } from "@/types/Wallet";
import { User } from "@/types/User";
import { currencys } from "@/data/currencys";
import { Transaction } from "@/types/Transaction";
import { transactionCategories } from "@/data/transaction-categories";
import FormatMoney from "@/utils/format-money";
import ToolsTransaction from "./components/tools-transaction";
import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import { subDays } from "date-fns";
import { getCustomTransactions } from "@/fetchers/transactions/getCustomTransactions";
import capitalizeFirstLetter from "@/utils/capitlize-first-letter";
import getDateOnFormatDDMMYY from "@/utils/getDateOnFormatDDMMYY";

export default function Custom({
  wallets,
  user
}: {
  wallets: Wallet[];
  user: User;
}) {
  // TODO revalidate the transactions when some transaction is created or updated

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const [date, setDate] = useState<DateRange | undefined>({
    from: subDays(new Date(), 1),
    to: new Date()
  });

  const currencyCC =
    currencys.find((currency) => currency.cc === user.currency)?.cc ||
    currencys.find((currency) => currency.cc === "USD")?.cc;

  const handleDateChange = async () => {
    if (!date?.to || !date?.from) return;

    const transactions = await getCustomTransactions({
      user_id: user.id,
      date_from: new Date(date?.from).toISOString(),
      date_to: new Date(date.to).toISOString()
    });

    setTransactions(transactions);
  };

  useEffect(() => {
    handleDateChange();
  }, [JSON.stringify(date)]);

  return (
    <TabsContent value="custom">
      <Card>
        <CardHeader className="flex w-full flex-row flex-wrap items-start justify-between gap-4 px-7">
          <div className="flex flex-col gap-[6px]">
            <CardTitle>History</CardTitle>
            <CardDescription>
              Here you can see all the transactions you made between the
              selected dates.
            </CardDescription>
          </div>
          <div>
            <DateRangePicker date={date} setDate={setDate} />
          </div>
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
              {transactions.map((transaction: Transaction, index: number) => {
                const wallet = wallets.find(
                  (wallet) => wallet.id === transaction.wallet_id
                ) || { nickname: "Unknown" };

                const category = transactionCategories.find(
                  (category) => category.id === transaction.category_id
                ) || { name: "Unknown" };

                return (
                  <TableRow key={index}>
                    <TableCell>
                      <div className="font-medium">
                        {transaction.description}
                      </div>
                      <div className="text-muted-foreground hidden text-sm md:inline">
                        {wallet.nickname}
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {category.name}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <Badge className="text-xs" variant="secondary">
                        {capitalizeFirstLetter(transaction.type)}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {getDateOnFormatDDMMYY(
                        new Date(transaction.transaction_date)
                      )}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <FormatMoney
                        value={transaction.value}
                        currency={currencyCC}
                      />
                    </TableCell>
                    <TableCell className="flex h-[72px] items-center justify-end">
                      <ToolsTransaction
                        transaction={transaction}
                        wallets={wallets}
                        user={user}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
