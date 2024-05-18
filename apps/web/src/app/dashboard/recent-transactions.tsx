import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

import { ArrowUpRight } from "lucide-react";

import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Transaction } from "@/types/Transaction";
import { transactionCategories } from "@/data/transaction-categories";
import capitalizeFirstLetter from "@/utils/capitlize-first-letter";
import FormatMoney from "@/utils/format-money";
import ToolsTransaction from "../transactions/components/tools-transaction";
import { Wallet } from "@/types/Wallet";
import { User } from "@/types/User";
import { currencys } from "@/data/currencys";

export default function RecentTransactions({
  wallets,
  transactions,
  user
}: {
  wallets: Wallet[];
  transactions: Transaction[];
  user: User;
}) {
  const currencyCC =
    currencys.find((currency) => currency.cc === user.currency)?.cc ||
    currencys.find((currency) => currency.cc === "USD")?.cc;

  return (
    <Card className="flex-1">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Transactions</CardTitle>
          <CardDescription>
            Last transactions from your wallets and cards
          </CardDescription>
        </div>
        <Button asChild size="sm" className="ml-auto gap-1">
          <Link href="/transactions">
            View All
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
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
          {transactions.length === 0 && (
            <TableBody>
              <TableRow className="w-full">
                <TableCell colSpan={6}>
                  <p className="text-muted-foreground flex w-full items-center justify-center p-4">
                    No transactions.
                  </p>
                </TableCell>
              </TableRow>
            </TableBody>
          )}
          {transactions.length > 0 && (
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
                      {new Date(
                        transaction.transaction_date
                      ).toLocaleDateString()}
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
          )}
        </Table>
      </CardContent>
    </Card>
  );
}
