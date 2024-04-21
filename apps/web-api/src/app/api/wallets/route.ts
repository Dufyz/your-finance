import CreateWallet from "@/services/wallets/create-wallet.service";
import PatchWallet from "@/services/wallets/patch-wallet.service";
import ShowWallets from "@/services/wallets/show-wallest.service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    try {
        const wallets = await ShowWallets({
            user_id: 1
        })

        return NextResponse.json(wallets, {
            status: 200,
        })
    } catch (error) {
        return NextResponse.json({ message: error.message }, {
            status: 400,
        })
    }
}

export async function POST(request: NextRequest) {
    const { user_id, bank_id, initial_balance, nickname, is_main, type } = await request.json();

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
        return NextResponse.json({ message: error.message }, {
            status: 400,
        })
    }
}

export async function PATCH(request: NextRequest) {
    const { id, bank_id, initial_balance, nickname, is_main, type } = await request.json();

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