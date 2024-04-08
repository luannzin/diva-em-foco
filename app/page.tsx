import api from "./services/api";
import Main from "./components/Main";
import PostThumb from "./components/PostThumb";
// import { useEffect } from "react";

const renderPosts = async () => {
  const { data } = await api.get("/api/posts");

  return data;
};

export default async function Home() {
  const data = await renderPosts();
  if (!data) {
    return <p>Carregando...</p>;
  }

  if (!data[0] || !data[1] || !data[2]) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <main>
        <Main data={data} />
      </main>
      <div className="my-16 flex flex-col gap-8">
        <span className="text-3xl">
          <strong>Destaques</strong>
        </span>
        <div className="flex w-full gap-16 flex-wrap">
          {data.slice(3).map((post, index) => {
            return <PostThumb key={index} data={post} />;
          })}
        </div>
      </div>
    </div>
  );
}
