import CreateTransaction from "@/services/transactions/create-transaction.service";
import DeleteTransaction from "@/services/transactions/delete-transaction.service";
import ShowWeekTransactions from "@/services/transactions/show-week-transactions.service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    //TODO - get user id from request

    const user_id = 1;
    const tab = "week";

    if(tab !== "week" && tab !== "month" && tab !== "year" && tab !== "custom") {
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
    const { user_id, wallet_id, category_id, value, description, type, transaction_date } = await request.json();

    try {
        const transaction = await CreateTransaction({
            user_id,
            wallet_id,
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