import Link from "next/link";
import Category from "../Category";

const PostThumb = ({ data }: { data: any }) => {
  return (
    <Link href={`/post/${data.slug}`} className="max-w-[47%]">
      <div className="rounded-lg flex gap-4">
        <img
          src={data.imageURL}
          alt="Tutorial de maquiagem"
          className="rounded-lg w-full max-w-[300px] h-[200px] object-cover"
        />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl">
              <strong>{data.title}</strong>
            </h2>
            <span>
              {data.content && data.content.length > 32
                ? `${data.content.slice(0, 32)}...`
                : data.content}
            </span>
          </div>
          <div className="flex justify-between items-end">
            <Category href={"/categoria/maquiagem"}>Maquiagem</Category>
            <span className="text-sm text-rose-400">21 de fev</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostThumb;
