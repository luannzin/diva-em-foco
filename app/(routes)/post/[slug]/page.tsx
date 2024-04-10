import { MDXRemote } from "next-mdx-remote/rsc";
import "@/app/mdx.css";
import { Metadata } from "next";
import api from "@/app/services/api";

const renderPost = async ({ slug }: { slug: string }) => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_URL + `/api/posts/${slug}`,
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
  const data = await renderPost(params);

  return {
    title: `${data.title} - Diva em Foco - Dicas sobre Cabelos, Skincare e Mais :)`,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
      description: data.description,
      title: `${data.title} - Diva em Foco - Dicas sobre Cabelos, Skincare e Mais :)`,
      type: "article",
    },
  };
}

const Post = async ({ params }: { params: { slug: string } }) => {
  const data = await renderPost(params);

  return (
    <div className="flex justify-center gap-16 mt-4 ">
      <div className=" w-full flex flex-col">
        <img
          src={data.imageURL}
          alt={data.title}
          className="w-full rounded-lg aspect-video object-cover h-[400px]"
        />
        <div className="mt-16 text-black">
          <h1 className="w-full text-5xl tracking-tight text-pretty text-left font-bold">
            {data.title}
          </h1>
          <article className="mt-16 flex flex-col gap-2 text-xl tracking-tight">
            <MDXRemote source={data.content} />
          </article>
        </div>
      </div>
    </div>
  );
};

export default Post;
