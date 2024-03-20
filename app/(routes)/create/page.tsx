"use client";

import { useEffect, useState } from "react";

const CreatePost = () => {
  const [authorization, setAuthorization] = useState<string | null>(null);

  const [inputLogin, setInputLogin] = useState<string>("");

  const [data, setData] = useState({
    title: "",
    content: "",
    keywords: "",
  });

  useEffect(() => {
    if (localStorage.getItem("boblog:authorization")) {
      setAuthorization(localStorage.getItem("boblog:authorization"));
    }
  }, []);

  if (!authorization || authorization !== "boblog4312") {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          localStorage.setItem("boblog:authorization", inputLogin);
          location.reload();
        }}
      >
        <input
          value={inputLogin}
          onChange={(e) => setInputLogin(e.target.value)}
          type="text"
          placeholder="Palavra-chave"
        />
        <button type="submit">Entrar</button>
      </form>
    );
  }

  const createPost = async () => {
    try {
      await fetch("/api/posts/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: "Bearer " + authorization,
        },
        body: JSON.stringify({
          title: data.title,
          content: data.content,
          keywords: data.keywords,
        }),
      });
    } catch (error) {
      //
    } finally {
      alert("Finalizado");
      location.reload();
    }
  };

  return (
    <div className="w-full mt-64 flex items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          createPost();
          // location.reload();
        }}
        className="w-[600px] gap-4 flex flex-col items-center justify-center"
      >
        <input
          className="w-full border border-black rounded-lg py-2 px-4"
          type="text"
          placeholder="Nome do post"
          onChange={(e) => {
            setData({ ...data, title: e.target.value });
          }}
        />
        <textarea
          className="w-full border border-black rounded-lg py-2 px-4"
          placeholder="Conteúdo do post"
          onChange={(e) => {
            setData({ ...data, content: e.target.value });
          }}
        />
        <input
          className="w-full border border-black rounded-lg py-2 px-4"
          type="text"
          placeholder="Keywords"
          onChange={(e) => {
            setData({ ...data, keywords: e.target.value });
          }}
        />
        <button className="w-full" type="submit">
          Criar
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
