import { NextResponse } from "next/server";
import Post from "../../models/post";

export async function GET(request: Request) {
  const url = new URL(request.url);

  const id = url.pathname.replace("/api/posts/", "");

  const response = await Post.id(id);

  return NextResponse.json({ ...response }, { status: 200 });
}
