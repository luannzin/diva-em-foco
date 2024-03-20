import { NextResponse } from "next/server";
import Post from "../../../models/post";

export async function GET(request: Request) {
  const url = new URL(request.url);

  const username = url.pathname.replace("/api/posts/author/", "");

  const response = await Post.byName(username);

  return NextResponse.json({ ...response }, { status: 200 });
}
