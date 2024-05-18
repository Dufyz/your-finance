import { CreateUserService } from "@/services/user/create-user.service";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const postUserSchema = z.object({
  email: z.string(),
  name: z.string(),
  auth_id: z.string()
});
export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = postUserSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: "Validation failed" },
      {
        status: 400
      }
    );
  }

  const { email, name, auth_id } = validation.data;

  try {
    const user = await CreateUserService({
      email,
      name,
      auth_id
    });

    return NextResponse.json(user, {
      status: 200
    });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
