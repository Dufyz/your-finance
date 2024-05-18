import { validatePasswordService } from "@/services/user/validate-password.service";
import getUserFromRequest from "@/utils/getUserFromRequest";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const postValidatePasswordSchema = z.object({
  user_id: z.number(),
  email: z.string(),
  password: z.string()
});
export async function POST(request: NextRequest) {
  const body = await request.json();

  const requestUser = getUserFromRequest(request);

  const validation = postValidatePasswordSchema.safeParse({
    user_id: requestUser.user_id,
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

  const { email, password } = validation.data;

  try {
    const user = await validatePasswordService({
      email,
      password
    });

    return NextResponse.json(user, {
      status: 200
    });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
