import { z } from "zod";

import DeleteExpenseCategoryGoal from "@/services/goals/delete-expense-category-goal.service";
import UpdateExpenseCategoryGoal from "@/services/goals/update-expense-category-goal.service";
import { NextRequest, NextResponse } from "next/server";

const deleteExpenseCategoryGoalSchema = z.object({
    id: z.string().transform((value) => parseInt(value))
});
export async function DELETE(request: NextRequest, context: any) {
    const params = context.params;

    const validation = deleteExpenseCategoryGoalSchema.safeParse(params);

    if (!validation.success) {
        return NextResponse.json({ error: validation.error }, {
            status: 400
        });
    }

    const { id } = validation.data;

    try {
        await DeleteExpenseCategoryGoal({
            id
        });

        return NextResponse.json(id, {
            status: 200
        });
    } catch (error) {
        return NextResponse.json({ error: error?.message }, {
            status: 500
        });
    }
}

const updateExpenseCategoryGoalSchema = z.object({
    id: z.string().transform((value) => parseInt(value)),
    category_id: z.string().transform((value) => parseInt(value)),
    target_value: z.number()
});
export async function PUT(request: NextRequest, context: any) {
    const params = context.params;
    const body = await request.json();

    const validation = updateExpenseCategoryGoalSchema.safeParse({ ...params, ...body });

    if (!validation.success) {
        return NextResponse.json({ error: validation.error }, {
            status: 400
        });
    }

    const { id, category_id, target_value } = validation.data;

    try {
        const updatedExpenseCategoryGoal = await UpdateExpenseCategoryGoal({
            id,
            category_id,
            target_value
        })

        return NextResponse.json(updatedExpenseCategoryGoal, {
            status: 200
        });
    } catch (error) {
        return NextResponse.json({ error: error?.message }, {
            status: 500
        });
    }
}
