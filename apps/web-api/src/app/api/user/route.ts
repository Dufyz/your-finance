import { PatchUser } from "@/services/user/patch-user.service";
import { ShowUser } from "@/services/user/show-user.service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    //TODO - get user id from request
    const id = 1;

    try {
        const user = await ShowUser({
            id
        })

        return NextResponse.json(user, {
            status: 200
        })

    } catch (error) {
        return NextResponse.json({ error: error });
    }

}

export async function PATCH(request: NextRequest) {
    const { id, name, email, password, currency } = await request.json();

    try {
        const user = await PatchUser({
            id,
            name,
            email,
            password,
            currency,
        })

        return NextResponse.json(user, {
            status: 200
        })

    } catch (error) {
        return NextResponse.json({ error: error });
    }
}