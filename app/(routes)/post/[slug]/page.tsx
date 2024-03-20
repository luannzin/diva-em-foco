import { MDXRemote } from "next-mdx-remote/rsc";

const renderPost = async ({ slug }: { slug: string }) => {
  console.log(slug);
  const response = await fetch(`http://localhost:3000/api/posts/${slug}`);
  const data = await response.json();

  console.log(data);

  return data;
};

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
