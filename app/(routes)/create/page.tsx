"use client";

import { useEffect, useState } from "react";

const CreatePost = () => {
  const [authorization, setAuthorization] = useState<string | null>(null);

  const [inputLogin, setInputLogin] = useState<string>("");

  useEffect(() => {
    if (localStorage.getItem("boblog:authorization")) {
      setAuthorization(localStorage.getItem("boblog:authorization"));
    }
  }, [localStorage]);

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

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Post criado com sucesso");
          // location.reload();
        }}
        className="w-[600px] gap-4 flex flex-col items-center justify-center"
      >
        <input
          className="w-full border border-black rounded-lg py-2 px-4"
          type="text"
          placeholder="Nome do post"
        />
        <textarea
          className="w-full border border-black rounded-lg py-2 px-4"
          placeholder="Conteúdo do post"
        />
        <input
          className="w-full border border-black rounded-lg py-2 px-4"
          type="text"
          placeholder="Keywords"
        />
        <button className="w-full" type="submit">
          Criar
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
