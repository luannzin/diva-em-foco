import { headerLinks } from "@/app/config/nav";
import Link from "next/link";

const Main = (postData: any) => {
  const { data } = postData;

  return (
    <div className="w-screen m-margin-left-align-center flex flex-col items-center h-[1200px] overflow-hidden">
      <Link
        className={`h-full w-full rounded-lg `}
        href={`/post/${data[0].slug}`}
      >
        <div
          style={{
            backgroundImage: `url(${data[0].imageURL})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="flex flex-col justify-end w-full h-full rounded-lg gap-4"
        >
          <div className="flex flex-col gap-4 justify-end h-full w-full backdrop-blur-sm bg-gradient-to-t from-black/90 to-bg-gray-200/50 p-8">
            <Link
              href={
                headerLinks.find((link) => link.tag === data[0].category)!
                  .href ?? "/"
              }
              className="p-2 bg-rose-400 text-rose-50 rounded-sm w-max text-sm uppercase select-none"
            >
              {data[0].category || "Sem categoria"}
            </Link>
            <div className="flex flex-col gap-2 text-rose-50">
              <strong className="text-3xl ">{data[0].title}</strong>
              <span>
                {data[0].content && data[0].content.length > 64
                  ? `${data[0].content.slice(0, 64)}...`
                  : data[0].content}
              </span>
            </div>
          </div>
        </div>
      </Link>

      <div className="flex w-full h-full rounded-sm">
        <Link
          className={`h-full w-full rounded-lg `}
          href={`/post/${data[1].slug}`}
        >
          <div
            style={{
              backgroundImage: `url(${data[1].imageURL})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="flex flex-col justify-end w-full h-full rounded-lg gap-4"
          >
            <div className="flex flex-col gap-4 justify-end h-full w-full backdrop-blur-sm bg-gradient-to-t from-black/90 to-bg-gray-200/50 p-8">
              <Link
                href={
                  headerLinks.find((link) => link.tag === data[1].category)!
                    .href ?? "/"
                }
                className="p-2 bg-rose-400 text-rose-50 rounded-sm w-max text-sm uppercase select-none"
              >
                {data[1].category || "Sem categoria"}
              </Link>
              <div className="flex flex-col gap-2 text-rose-50">
                <strong className="text-3xl ">{data[1].title}</strong>
                <span>
                  {data[1].content && data[1].content.length > 64
                    ? `${data[1].content.slice(0, 64)}...`
                    : data[1].content}
                </span>
              </div>
            </div>
          </div>
        </Link>
        <Link
          className={`h-full w-full rounded-lg `}
          href={`/post/${data[2].slug}`}
        >
          <div
            style={{
              backgroundImage: `url(${data[2].imageURL})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="flex flex-col justify-end w-full h-full rounded-lg gap-4"
          >
            <div className="flex flex-col gap-4 justify-end h-full w-full backdrop-blur-sm bg-gradient-to-t from-black/90 to-bg-gray-200/50 p-8">
              <Link
                href={
                  headerLinks.find((link) => link.tag === data[2].category)!
                    .href ?? "/"
                }
                className="p-2 bg-rose-400 text-rose-50 rounded-sm w-max text-sm uppercase select-none"
              >
                {data[2].category || "Sem categoria"}
              </Link>
              <div className="flex flex-col gap-2 text-rose-50">
                <strong className="text-3xl ">{data[2].title}</strong>
                <span>
                  {data[2].content && data[2].content.length > 64
                    ? `${data[2].content.slice(0, 64)}...`
                    : data[2].content}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Main;
