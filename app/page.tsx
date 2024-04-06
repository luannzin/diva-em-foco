import api from "./services/api";
import Main from "./components/Main";
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

  return (
    <div>
      <main>
        <Main data={data} />
      </main>
    </div>
  );
}
