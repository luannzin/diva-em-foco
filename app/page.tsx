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
