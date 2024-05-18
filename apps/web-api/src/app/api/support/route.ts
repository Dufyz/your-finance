import { z } from "zod";
import CreateSupportForm from "@/services/support/create-support-form.service";
import { NextRequest, NextResponse } from "next/server";
import getUserFromRequest from "@/utils/getUserFromRequest";

const postSupportFormSchema = z.object({
    user_id: z.number(),
    category_id: z.number(),
    message: z.string(),
    isAgreed: z.boolean()
});
export async function POST(request: NextRequest) {
    const body = await request.json();

    const reqUser = getUserFromRequest(request);

    const validation = postSupportFormSchema.safeParse({
        user_id: reqUser.user_id,
        ...body
    });

    if (!validation.success) {
        return NextResponse.json({ error: validation.error }, {
            status: 400
        });
    }

    const { user_id, category_id, message, isAgreed = false } = validation.data;

    try {
        await CreateSupportForm({
            user_id,
            category_id,
            message,
            isAgreed
        })

        return NextResponse.json({}, {
            status: 200
        });
    } catch (error) {
        return NextResponse.json({ error: error });
    }
}