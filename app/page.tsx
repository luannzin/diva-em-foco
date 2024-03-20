import Link from "next/link";
// import { useEffect } from "react";

const renderPosts = async () => {
  const response = await fetch("http://localhost:3000/api/posts");
  const data = await response.json();

  return data;
};

export default async function Home() {
  const data = await renderPosts();
  if (!data) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
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
                <div key={post.id} className="mb-8">
                  <h2 className="text-xl font-bold text-zinc-800">
                    {post.title}
                  </h2>
                  <p className="text-sm text-zinc-500">
                    {post.content.length > 64
                      ? `${post.content.slice(0, 64)}...`
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
