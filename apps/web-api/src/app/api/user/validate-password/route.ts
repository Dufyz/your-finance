import { validatePasswordService } from "@/services/auth/validate-password.service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const id = 1;
    const { email, password } = await request.json();

    try {
        const user = await validatePasswordService({
            id, email, password
        })

        return NextResponse.json(user, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json(null, {
            status: 401
        })
    }

}