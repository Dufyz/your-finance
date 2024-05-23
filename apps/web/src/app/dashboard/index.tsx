"use client";

import { Transaction } from "@/types/Transaction";
import { User } from "@/types/User";
import { Wallet } from "@/types/Wallet";
import DateRangePicker from "./components/date-range-picker";
import TotalBalance from "./components/total-balance";
import TotalIncomes from "./components/total-incomes";
import TotalSaves from "./components/total-saves";
import TotalExpenses from "./components/total-expenses";
import TotalInvoices from "./components/total-invoices";
import RecentTransactions from "./components/recent-transactions";
import { DashBoardCard } from "./components/InfoCard";
import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import { getTotals } from "@/fetchers/dashboard/getTotals";


type DashboardIndexProps = {
    initialData: {
        totals: {
            totalBalance: DashBoardCard;
            totalSaves: DashBoardCard;
            totalIncomes: DashBoardCard;
            totalExpenses: DashBoardCard;
            totalInvoices: DashBoardCard;
        };
        lastTransactions: Transaction[];
    };
    currencyCC?: string;
    user: User;
    wallets: Wallet[];
}
export default function DashboardIndex({
    initialData,
    currencyCC,
    user,
    wallets
}: DashboardIndexProps) {
    const [totals, setTotals] = useState(initialData.totals);
    const [lastTransactions, setLastTransactions] = useState(initialData.lastTransactions);

    const [date, setDate] = useState<DateRange | undefined>({
        from: undefined,
        to: undefined
    });

    const {
        totalBalance,
        totalSaves,
        totalIncomes,
        totalExpenses,
        totalInvoices
    } = totals;

    const handleDateChange = async () => {
        if (!date?.from && !date?.to) {
            setTotals(initialData.totals);
            setLastTransactions(initialData.lastTransactions);
            return;
        }

        if (!date?.from || !date?.to) return;

        const totals = await getTotals({
            user_id: user.id,
            date_from: date.from.toISOString(),
            date_to: date.to.toISOString()
        });

        const lastTransactions = []

        setTotals(totals);
        setLastTransactions(lastTransactions);
    }
    useEffect(() => {
        handleDateChange();
    }, [JSON.stringify(date)]);

    return (
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            <div>
                <DateRangePicker date={date} setDate={setDate} />
            </div>
            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                <TotalBalance total={totalBalance} currencyCC={currencyCC} />
                <TotalSaves total={totalSaves} currencyCC={currencyCC} />
                <TotalIncomes total={totalIncomes} currencyCC={currencyCC} />
                <TotalExpenses total={totalExpenses} currencyCC={currencyCC} />
                <TotalInvoices total={totalInvoices} currencyCC={currencyCC} />
            </div>
            <div className="flex h-full w-full gap-4">
                <RecentTransactions
                    transactions={lastTransactions}
                    user={user}
                    wallets={wallets}
                />
                {/* <Goals /> */}
            </div>
        </main>
    )
}