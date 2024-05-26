import CreateWalletService from "@/services/wallets/create-wallet.service";
import DeleteWalletService from "@/services/wallets/delete-wallet.service";
import PatchWalletService from "@/services/wallets/patch-wallet.service";
import ShowWalletsService from "@/services/wallets/show-wallest.service";
import getUserFromRequest from "@/utils/getUserFromRequest";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const getWalletsSchema = z.object({
  userId: z.number()
});
export async function GET(request: NextRequest) {
  const reqUser = getUserFromRequest(request);

  const validation = getWalletsSchema.safeParse({
    userId: reqUser.user_id
  });

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error },
      {
        status: 400
      }
    );
  }

  const { userId: user_id } = validation.data;

  try {
    const wallets = await ShowWalletsService({
      user_id
    });

    return NextResponse.json(wallets, {
      status: 200
    });
  } catch (error) {
    return NextResponse.json(
      { error },
      {
        status: 400
      }
    );
  }
}

const postWalletSchema = z.object({
  user_id: z.number(),
  bank_id: z.number(),
  initial_balance: z.number(),
  nickname: z.string(),
  is_main: z.boolean(),
  type: z.string()
});
export async function POST(request: NextRequest) {
  const body = await request.json();

  const reqUser = getUserFromRequest(request);

  const validation = postWalletSchema.safeParse({
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

  const { user_id, bank_id, initial_balance, is_main, nickname, type } =
    validation.data;

  try {
    const wallet = await CreateWalletService({
      user_id,
      bank_id,
      initial_balance,
      nickname,
      is_main,
      type
    });

    return NextResponse.json(wallet, {
      status: 200
    });
  } catch (error) {
    return NextResponse.json(
      { error },
      {
        status: 400
      }
    );
  }
}

const patchWalletSchema = z.object({
  id: z.number(),
  bank_id: z.number(),
  initial_balance: z.number(),
  nickname: z.string(),
  is_main: z.boolean(),
  type: z.string()
});
export async function PATCH(request: NextRequest) {
  const body = await request.json();

  const validation = patchWalletSchema.safeParse({
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

  const { id, bank_id, initial_balance, nickname, is_main, type } =
    validation.data;

  try {
    const wallet = await PatchWalletService({
      id,
      bank_id,
      initial_balance,
      nickname,
      is_main,
      type
    });

    return NextResponse.json(wallet, {
      status: 200
    });
  } catch (error) {
    return NextResponse.json(
      { error },
      {
        status: 400
      }
    );
  }
}

const deleteWalletSchema = z.object({
  id: z.number()
});
export async function DELETE(request: NextRequest) {
  const body = await request.json();

  const validation = deleteWalletSchema.safeParse(body);

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
    await DeleteWalletService({
      id
    });

    return NextResponse.json(
      { message: "Wallet deleted" },
      {
        status: 200
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error },
      {
        status: 400
      }
    );
  }
}
