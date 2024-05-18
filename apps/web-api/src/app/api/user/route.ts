import { z } from "zod";
import { NextRequest, NextResponse } from "next/server";
import { PatchUser } from "@/services/user/patch-user.service";
import { ShowUser } from "@/services/user/show-user.service";
import getUserFromRequest from "@/utils/getUserFromRequest";

export async function OPTIONS(request: NextRequest) {
    return NextResponse.json({ message: 'OPTIONS' });
}

const getUserSchema = z.object({
    user_id: z.number(),
});
export async function GET(request: NextRequest) {
    const reqUser = getUserFromRequest(request);

    const validation = getUserSchema.safeParse({
        user_id: reqUser.user_id
    });

    if (!validation.success) {
        return NextResponse.json({ error: validation.error }, {
            status: 400
        });
    }

    const { user_id } = validation.data;

    try {
        const user = await ShowUser({
            id: user_id
        })

        return NextResponse.json(user, {
            status: 200
        })

    } catch (error) {
        return NextResponse.json({ error: error });
    }
}

const patchUserSchema = z.object({
    user_id: z.number(),
    name: z.string().optional(),
    email: z.string().optional(),
    password: z.string().optional(),
    currency: z.string().optional(),
});
export async function PATCH(request: NextRequest) {
    const body = await request.json();

    const requestUser = getUserFromRequest(request);

    const validation = patchUserSchema.safeParse({
        user_id: requestUser.user_id,
        ...body,
    });

    if (!validation.success) {
        return NextResponse.json({ error: validation.error }, {
            status: 400
        });
    }

    const { user_id, name, email, password, currency } = validation.data;

    try {
        const user = await PatchUser({
            user_id,
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