import api from "@/app/services/api";
import Main from "@/app/components/Main";
import { Metadata } from "next";
import { headerLinks } from "@/app/config/nav";
import PostThumb from "@/app/components/PostThumb";

const renderPosts = async ({ slug }: { slug: string }) => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_URL + `/api/posts/category/${slug}`,
    {
      next: {
        revalidate: 0,
      },
    }
  );

  const data = await response.json();

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

  const metadata = headerLinks.find((link) => link.tag === params.slug)!;

  if (!data) {
    return <p>Carregando...</p>;
  }

  if (!data[0] || !data[1] || !data[2]) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <div className="my-16 flex flex-col gap-8 max-xl:px-8">
        <span className="text-3xl max-sm:text-center">
          <strong>{metadata.name}</strong>
        </span>
        <div className="flex w-full justify-between gap-16 flex-wrap">
          {data.map((post: any, index: number) => {
            return <PostThumb key={index} data={post} />;
          })}
        </div>
      </div>

      {/* <main>
        <Main data={data} />
      </main> */}
    </div>
  );
}
