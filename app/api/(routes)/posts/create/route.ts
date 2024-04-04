import { NextResponse } from "next/server";
import Post from "../../../models/post";

export async function POST(request: Request) {
  const data = await request.json();

  const response = await Post.create(data);

  return NextResponse.json({ ...response }, { status: 201 });
}
