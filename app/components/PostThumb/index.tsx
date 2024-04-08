import Link from "next/link";
import Category from "../Category";

const PostThumb = ({ data }: { data: any }) => {
  return (
    <Link
      href={`/post/${data.slug}`}
      className="max-w-[47%] max-xl:max-w-full max-xl:w-full text-black"
    >
      <div className="rounded-lg flex gap-4 w-full max-sm:flex-col max-sm:items-center max-sm:text-center">
        <img
          src={data.imageURL}
          alt="Tutorial de maquiagem"
          className="rounded-lg w-full max-w-[300px] h-[200px] object-cover"
        />
        <div className="flex flex-col justify-between max-sm:gap-8">
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
          <div className="flex gap-16 items-end max-sm:justify-center">
            <Category href={"/categoria/maquiagem"}>Maquiagem</Category>
            <span className="text-sm text-rose-400">21 de fev</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostThumb;
