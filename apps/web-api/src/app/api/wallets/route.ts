import { z } from "zod";
import CreateWallet from "@/services/wallets/create-wallet.service";
import { NextRequest, NextResponse } from "next/server";
import getUserFromRequest from "@/utils/getUserFromRequest";
import DeleteWallet from "@/services/wallets/delete-wallet.service";
import PatchWallet from "@/services/wallets/patch-wallet.service";
import ShowWallets from "@/services/wallets/show-wallest.service";

const getWalletsSchema = z.object({
    userId: z.number(),
});
export async function GET(request: NextRequest, context: any) {
    const reqUser = getUserFromRequest(request);

    const validation = getWalletsSchema.safeParse({
        userId: reqUser.user_id
    });

    if (!validation.success) {
        return NextResponse.json({ error: validation.error }, {
            status: 400
        });
    }

    const { userId: user_id } = validation.data;

    try {
        const wallets = await ShowWallets({
            user_id
        })

        return NextResponse.json(wallets, {
            status: 200,
        })
    } catch (error) {
        return NextResponse.json({ message: error?.message }, {
            status: 400,
        })
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
export async function POST(request: NextRequest, context: any) {
    const body = await request.json();

    const reqUser = getUserFromRequest(request);
    
    const validation = postWalletSchema.safeParse({
        user_id: reqUser.user_id,
        ...body
    });

    if (!validation.success) {
        return NextResponse.json({ error: validation.error }, {
            status: 400
        });
    }

    const { user_id, bank_id, initial_balance, is_main, nickname, type, } = validation.data

    try {
        const wallet = await CreateWallet({
            user_id,
            bank_id,
            initial_balance,
            nickname,
            is_main,
            type
        })

        return NextResponse.json(wallet, {
            status: 200,
        })

    } catch (error) {
        return NextResponse.json({ message: error?.message }, {
            status: 400,
        })
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
        return NextResponse.json({ error: validation.error }, {
            status: 400
        });
    }

    const { id, bank_id, initial_balance, nickname, is_main, type } = validation.data;

    try {
        const wallet = await PatchWallet({
            id,
            bank_id,
            initial_balance,
            nickname,
            is_main,
            type
        })

        return NextResponse.json(wallet, {
            status: 200,
        })

    } catch (error) {
        return NextResponse.json({ message: error.message }, {
            status: 400,
        })
    }
}

const deleteWalletSchema = z.object({
    id: z.number()
});
export async function DELETE(request: NextRequest) {
    const body = await request.json();

    const validation = deleteWalletSchema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json({ error: validation.error }, {
            status: 400
        });
    }

    const { id } = validation.data;

    try {
        await DeleteWallet({
            id
        });

        return NextResponse.json({ message: "Wallet deleted" }, {
            status: 200,
        })
    } catch (error) {
        return NextResponse.json({ message: error.message }, {
            status: 400,
        })
    }
}
