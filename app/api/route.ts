import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { message: "Welcome do Diva em Foco API!" },
    { status: 200 }
  );
}
