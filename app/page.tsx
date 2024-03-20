"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  const renderPosts = async () => {
    const response = await fetch("/api/posts");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    renderPosts();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (!data) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <header className="py-8">
        <strong className="text-xl">Blog</strong>
      </header>
      <main>
        {data && data.length > 0 ? (
          data.map(
            (post: {
              id: string;
              slug: string;
              title: string;
              content: string;
            }) => (
              <Link key={post.id} href={`/post/${post.slug}`}>
                <div key={post.id} className="mb-4">
                  <h2 className="text-xl">{post.title}</h2>
                  <p>
                    {post.content.length > 24
                      ? `${post.content.slice(0, 24)}...`
                      : post.content}
                  </p>
                </div>
              </Link>
            )
          )
        ) : (
          <p>Nenhum post encontrado</p>
        )}
      </main>
    </div>
  );
}
