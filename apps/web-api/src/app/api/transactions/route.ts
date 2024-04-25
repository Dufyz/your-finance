import CreateTransaction from "@/services/transactions/create-transaction.service";
import DeleteTransaction from "@/services/transactions/delete-transaction.service";
import PatchTransaction from "@/services/transactions/patch-transaction.service";
import ShowCustomTransactions from "@/services/transactions/show-custom-transactions.service";
import ShowLastTransactions from "@/services/transactions/show-last-transactions.service";
import ShowMonthTransactions from "@/services/transactions/show-month-transactions.service";
import ShowWeekTransactions from "@/services/transactions/show-week-transactions.service";
import ShowYearTransactions from "@/services/transactions/show-year-transactions.service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const user_id = Number(request.nextUrl.searchParams.get("user_id"));
    const tab = request.nextUrl.searchParams.get("tab");

    const date_from = request.nextUrl.searchParams.get("date_from");
    const date_to = request.nextUrl.searchParams.get("date_to");

    if(tab !== "week" && tab !== "month" && tab !== "year" && tab !== "custom" && tab !== "last") {
        return NextResponse.json({
            message: "Invalid tab"
        }, {
            status: 400
        });
    }

    try {
        let transactions: any = [];

        switch(tab) {
            case "week":
                transactions = await ShowWeekTransactions({
                    user_id
                });
                break;
            case "month":
                transactions = await ShowMonthTransactions({
                    user_id
                });
                break;
            case "year":
                transactions = await ShowYearTransactions({
                    user_id
                });
                break;
            case "custom":
                transactions = await ShowCustomTransactions({
                    user_id,
                    date_from: new Date(date_from || ""),
                    date_to: new Date(date_to || "")
                });
                break;
            case "last":
                transactions = await ShowLastTransactions({
                    user_id
                });
                break;
        }

        return NextResponse.json(transactions, {
            status: 200
        });
        
    } catch (error) {
        return NextResponse.json({
            message: "Error getting transactions"
        }, {
            status: 500
        });
    }
}

export async function POST(request: NextRequest) {
    const { user_id, wallet_id, card_id, category_id, value, description, type, transaction_date } = await request.json();

    try {
        const transaction = await CreateTransaction({
            user_id,
            wallet_id,
            card_id,
            category_id,
            value,
            description,
            type,
            transaction_date
        });

        return NextResponse.json(transaction, {
            status: 200
        });
    } catch (error) {
        return NextResponse.json({
            message: "Error creating transaction"
        }, {
            status: 500
        });
    }
}

export async function PATCH(request: NextRequest) {
    const { id, wallet_id, card_id, category_id, value, description, type, transaction_date } = await request.json();

    try {
        const transaction = await PatchTransaction({
            id,
            wallet_id,
            card_id,
            category_id,
            value,
            description,
            type,
            transaction_date
        });

        return NextResponse.json(transaction, {
            status: 200
        });
    } catch (error) {
        return NextResponse.json({
            message: "Error updating transaction"
        }, {
            status: 500
        });
    }
}

export async function DELETE(request: NextRequest) {
    const { id } = await request.json();

    try {
        await DeleteTransaction({
            id
        })
        
        return NextResponse.json({
            message: "Transaction deleted"
        }, {
            status: 200
        });
    } catch (error) {
        return NextResponse.json({
            message: "Error deleting transaction"
        }, {
            status: 500
        });
    }
}