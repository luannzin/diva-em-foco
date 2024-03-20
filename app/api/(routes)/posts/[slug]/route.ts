import { NextResponse } from "next/server";
import Post from "../../models/post";

export async function GET(request: Request) {
  const url = new URL(request.url);

  const slug = url.pathname.replace("/api/posts/", "");

  const response = await Post.slug(slug);

  return NextResponse.json({ ...response }, { status: 200 });
}
