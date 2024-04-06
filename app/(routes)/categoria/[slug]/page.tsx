import api from "@/app/services/api";
import Main from "@/app/components/Main";
import { Metadata } from "next";
import { headerLinks } from "@/app/config/nav";

const renderPosts = async ({ slug }: { slug: string }) => {
  const { data } = await api.get(`/api/posts/category/${slug}`);

  return data;
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = headerLinks.find((link) => link.tag === params.slug);

  if (data) {
    return {
      title: `${data.name} - Diva em Foco - Dicas sobre Cabelos, Skincare e Mais :)`,
      description: data.description,
      keywords: data.keywords,
      openGraph: {
        description: data.description,
        title: `${data.name} - Diva em Foco - Dicas sobre Cabelos, Skincare e Mais :)`,
      },
    };
  } else {
    return {
      title: `Diva em Foco - Dicas sobre Cabelos, Skincare e Mais :)`,
      description:
        "Quer ver dicas, novidades e guias completos sobre beleza, perfumes, skincare, maquiagem, cuidados com cabelo e mais? Acesse o blog da Diva em Foco! ❤",
      // keywords: data.keywords,
      openGraph: {
        description:
          "Quer ver dicas, novidades e guias completos sobre beleza, perfumes, skincare, maquiagem, cuidados com cabelo e mais? Acesse o blog da Diva em Foco! ❤",
        title: `Diva em Foco - Dicas sobre Cabelos, Skincare e Mais :)`,
      },
    };
  }
}

export default async function Category({
  params,
}: {
  params: { slug: string };
}) {
  const data = await renderPosts(params);

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
    </div>
  );
}
