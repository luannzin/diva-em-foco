import { MDXRemote } from "next-mdx-remote/rsc";
import "@/app/mdx.css";
import { Metadata } from "next";

const renderPost = async ({ slug }: { slug: string }) => {
  console.log(slug);
  const response = await fetch(`http://localhost:3000/api/posts/${slug}`);
  const data = await response.json();

  console.log(data);

  return data;
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = await renderPost(params);

  return {
    title: `${data.title} - Blog Diva em foco - Dicas sobre Cabelos, Skincare e Mais :)`,
    description: `${data.content.slice(0, 120)}...`,
    keywords: `diva em foco, diva, foco, ${data.keywords}`,
    openGraph: {
      description: `${data.content.slice(0, 120)}...`,
      title: `${data.title} - Blog Diva em foco - Dicas sobre Cabelos, Skincare e Mais :)`,
      type: "article",
    },
  };
}

const Post = async ({ params }: { params: { slug: string } }) => {
  const data = await renderPost(params);

  return (
    <div className="flex flex-col gap-16">
      <h1 className="text-4xl font-bold leading-10">{data.title}</h1>
      <main className="flex flex-col gap-2 text-base">
        <MDXRemote source={data.content} />
      </main>
    </div>
  );
};

export default Post;
