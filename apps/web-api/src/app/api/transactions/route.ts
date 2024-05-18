import CreateTransactionService from "@/services/transactions/create-transaction.service";
import DeleteTransactionService from "@/services/transactions/delete-transaction.service";
import PatchTransactionService from "@/services/transactions/patch-transaction.service";
import ShowCustomTransactionsService from "@/services/transactions/show-custom-transactions.service";
import ShowLastTransactionsService from "@/services/transactions/show-last-transactions.service";
import ShowMonthTransactionsService from "@/services/transactions/show-month-transactions.service";
import ShowWeekTransactionsService from "@/services/transactions/show-week-transactions.service";
import ShowYearTransactionsService from "@/services/transactions/show-year-transactions.service";
import getUserFromRequest from "@/utils/getUserFromRequest";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const getUserTransactionsSchema = z.object({
  user_id: z.number(),
  tab: z
    .string()
    .refine((value) =>
      ["week", "month", "year", "custom", "last"].includes(value)
    ),
  date_from: z.string().optional(),
  date_to: z.string().optional()
});
export async function GET(request: NextRequest) {
  const body = {
    tab: request.nextUrl.searchParams.get("tab"),
    date_from: request.nextUrl.searchParams.get("date_from") || undefined,
    date_to: request.nextUrl.searchParams.get("date_to") || undefined
  };

  const reqUser = getUserFromRequest(request);

  const validation = getUserTransactionsSchema.safeParse({
    user_id: reqUser.user_id,
    ...body
  });

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error },
      {
        status: 400
      }
    );
  }

  const { user_id, tab, date_from, date_to } = validation.data;

  try {
    let transactions: any = [];

    switch (tab) {
      case "week":
        transactions = await ShowWeekTransactionsService({
          user_id
        });
        break;
      case "month":
        transactions = await ShowMonthTransactionsService({
          user_id
        });
        break;
      case "year":
        transactions = await ShowYearTransactionsService({
          user_id
        });
        break;
      case "custom":
        transactions = await ShowCustomTransactionsService({
          user_id,
          date_from: new Date(date_from || ""),
          date_to: new Date(date_to || "")
        });
        break;
      case "last":
        transactions = await ShowLastTransactionsService({
          user_id
        });
        break;
    }

    return NextResponse.json(transactions, {
      status: 200
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error getting transactions"
      },
      {
        status: 500
      }
    );
  }
}

const postUserTransactionsSchema = z.object({
  user_id: z.number(),
  wallet_id: z.number().optional(),
  card_id: z.number().optional(),
  category_id: z.number(),
  value: z.number(),
  description: z.string(),
  type: z.string().refine((value) => ["income", "expense"].includes(value)),
  transaction_date: z.string()
});
export async function POST(request: NextRequest) {
  const body = await request.json();

  const reqUser = getUserFromRequest(request);

  const validation = postUserTransactionsSchema.safeParse({
    user_id: reqUser.user_id,
    ...body
  });

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error },
      {
        status: 400
      }
    );
  }

  const {
    user_id,
    wallet_id,
    card_id,
    category_id,
    value,
    description,
    type,
    transaction_date
  } = validation.data;

  try {
    const transaction = await CreateTransactionService({
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
    return NextResponse.json(
      {
        message: "Error creating transaction"
      },
      {
        status: 500
      }
    );
  }
}

const patchTransactionSchema = z.object({
  id: z.number(),
  wallet_id: z.number().optional(),
  card_id: z.number().optional(),
  category_id: z.number(),
  value: z.number(),
  description: z.string(),
  type: z.string().refine((value) => ["income", "expense"].includes(value)),
  transaction_date: z.string()
});
export async function PATCH(request: NextRequest) {
  const body = await request.json();

  const validation = patchTransactionSchema.safeParse({
    ...body
  });

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error },
      {
        status: 400
      }
    );
  }

  const {
    id,
    wallet_id,
    card_id,
    category_id,
    value,
    description,
    type,
    transaction_date
  } = validation.data;

  try {
    const transaction = await PatchTransactionService({
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
    return NextResponse.json(
      {
        message: "Error updating transaction"
      },
      {
        status: 500
      }
    );
  }
}

const deleteUserTransactionsSchema = z.object({
  id: z.number()
});
export async function DELETE(request: NextRequest) {
  const body = await request.json();

  const validation = deleteUserTransactionsSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error },
      {
        status: 400
      }
    );
  }

  const { id } = validation.data;

  try {
    await DeleteTransactionService({
      id
    });

    return NextResponse.json(
      {
        message: "Transaction deleted"
      },
      {
        status: 200
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error deleting transaction"
      },
      {
        status: 500
      }
    );
  }
}
