import Post from "@/app/api/models/post";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);

  const slug = url.pathname.replace("/api/posts/category/", "");

  const response = await Post.category(slug);

  return NextResponse.json({ ...response }, { status: 200 });
}
