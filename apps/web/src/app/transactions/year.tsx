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
import { currencys } from "@/data/currencys";
import { transactionCategories } from "@/data/transaction-categories";
import { getYearTransactions } from "@/fetchers/transactions/getYearTransactions";
import { Transaction } from "@/types/Transaction";
import { User } from "@/types/User";
import { Wallet } from "@/types/Wallet";
import capitalizeFirstLetter from "@/utils/capitlize-first-letter";
import FormatMoney from "@/utils/format-money";
import ToolsTransaction from "./components/tools-transaction";
import getDateOnFormatDDMMYY from "@/utils/getDateOnFormatDDMMYY";

export default async function Year({
  wallets,
  user
}: {
  wallets: Wallet[];
  user: User;
}) {
  const transactions = await getYearTransactions({ user_id: user.id });

  const currencyCC =
    currencys.find((currency) => currency.cc === user.currency)?.cc ||
    currencys.find((currency) => currency.cc === "USD")?.cc;

  return (
    <TabsContent value="year">
      <Card>
        <CardHeader className="px-7">
          <CardTitle>History</CardTitle>
          <CardDescription>
            Here you can see all the transactions you made this year.
          </CardDescription>
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
