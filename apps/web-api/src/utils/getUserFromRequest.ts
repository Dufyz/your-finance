import { NextRequest } from "next/server";

export default function getUserFromRequest(request: NextRequest) {
    const user = JSON.parse(request.headers.get('X-User-Data') || JSON.stringify({}));

    return user;
}