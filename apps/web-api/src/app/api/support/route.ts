import CreateSupportForm from "@/services/support/create-support-form.service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { user_id, category_id, message, isAgreed } = await request.json();

    try {
        await CreateSupportForm({
            user_id,
            category_id,
            message,
            isAgreed
        })
    } catch (error) {
        return NextResponse.json({ error: error });
    }

    return NextResponse.json({}, {
        status: 200
    })
}