import { NextResponse } from "next/server";
import Post from "../models/post";

export async function GET() {
  const data = await Post.index();

  return NextResponse.json(data, { status: 200 });
}
