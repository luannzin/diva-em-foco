"use client";

import { type HeaderLink, headerLinks } from "@/app/config/nav";
import api from "@/app/services/api";
import { useEffect, useState } from "react";

const CreatePost = () => {
  const [authorization, setAuthorization] = useState<string | null>(null);

  const [inputLogin, setInputLogin] = useState<string>("");

  const [data, setData] = useState({
    title: "",
    content: "",
    keywords: "",
    category: "",
    imageURL: "",
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
      await api.post("/api/posts/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: "Bearer " + authorization,
        },
        body: {
          title: data.title,
          content: data.content,
          keywords: data.keywords,
          category: data.category,
          imageURL: data.imageURL,
        },
      });
    } catch (error) {
      //
    } finally {
      alert("Finalizado");
      // location.reload();
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
        <input
          className="w-full border border-black rounded-lg py-2 px-4"
          type="text"
          placeholder="URL da imagem de capa"
          onChange={(e) => {
            setData({ ...data, imageURL: e.target.value });
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
        <label className="w-full">
          <select
            onChange={(e) => {
              setData({ ...data, category: e.target.value });
            }}
            className="w-full border border-black rounded-lg py-2 px-4"
          >
            {headerLinks.map((link: HeaderLink) => (
              <option key={link.tag} value={link.tag}>
                {link.name}
              </option>
            ))}
          </select>
        </label>
        <button className="w-full" type="submit">
          Criar
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
