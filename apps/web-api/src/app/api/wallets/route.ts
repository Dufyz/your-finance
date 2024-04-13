import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    return NextResponse.json([], {
        status: 200,
    })
}

export async function POST(request: NextRequest) {
    const { } = request.json();

    return NextResponse.json({}, {
        status: 201,
    })
}