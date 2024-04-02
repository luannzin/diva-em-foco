import Link from "next/link";
import { headerLinks } from "./config/nav";
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
        <div className="flex items-center w-full h-[600px] bg-rose-500 rounded-lg">
          <div className="flex flex-col justify-end bg-rose-200 w-full h-full rounded-sm p-8 gap-4">
            <Link
              href={
                headerLinks.find((link) => link.tag === data[0].category) ?? "/"
              }
              className="p-2 bg-rose-400 text-rose-50 rounded-sm w-max text-sm uppercase select-none"
            >
              {data[0].category || "Sem categoria"}
            </Link>
            <div className="flex flex-col gap-2 text-rose-950">
              <strong className="text-3xl ">{data[0].title}</strong>
              <span>
                {data[0].content.length > 64
                  ? `${data[0].content.slice(0, 64)}...`
                  : data[0].content}
              </span>
            </div>
          </div>
          <div className="flex flex-col w-full h-full">
            <div className="flex bg-rose-300 h-full w-full"></div>
            <div className="flex bg-rose-400 h-full w-full"></div>
          </div>
        </div>
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
