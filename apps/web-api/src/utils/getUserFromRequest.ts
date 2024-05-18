import { User } from "@supabase/supabase-js";
import { NextRequest } from "next/server";

type UserFromRequest = {
    user_id: number;
    email: string;
};

export default function getUserFromRequest(request: NextRequest): UserFromRequest {
    const user: User = JSON.parse(request.headers.get('X-User-Data') || JSON.stringify({}));

    if (!user) {
        throw new Error('User not found in request');
    }

    return {
        user_id: user.user_metadata.id,
        email: String(user.email)
    };
}