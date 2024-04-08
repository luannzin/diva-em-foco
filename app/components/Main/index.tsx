import { headerLinks } from "@/app/config/nav";
import Link from "next/link";
import Category from "../Category";

const Main = (postData: any) => {
  const { data } = postData;

  return (
    <div className="w-screen m-margin-left-align-center flex flex-col items-center max-xl:h-[1800px] h-[1200px] overflow-hidden">
      <Link
        className={`max-h-[600px] h-full w-full rounded-lg `}
        href={`/post/${data[0].slug}`}
      >
        <div
          style={{
            backgroundImage: `url(${data[0].imageURL})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="flex flex-col justify-end w-full h-full rounded-lg gap-4 "
        >
          <div className="flex flex-col gap-4 justify-end h-full w-full backdrop-blur-sm bg-gradient-to-t from-black/90 to-bg-gray-200/50 p-8">
            <Category
              href={
                headerLinks.find((link) => link.tag === data[0].category)!
                  .href ?? "/"
              }
            >
              {data[0].category || "Sem categoria"}
            </Category>
            <div className="flex flex-col gap-2 text-rose-50">
              <h2>
                <strong className="text-3xl">{data[0].title}</strong>
              </h2>
              <p>{data[0].description}</p>
            </div>
          </div>
        </div>
      </Link>

      <div className="flex max-xl:flex-col w-full h-full rounded-sm">
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
              <Category
                href={
                  headerLinks.find((link) => link.tag === data[1].category)!
                    .href ?? "/"
                }
              >
                {data[1].category || "Sem categoria"}
              </Category>
              <div className="flex flex-col gap-2 text-rose-50">
                <h2>
                  <strong className="text-3xl">{data[1].title}</strong>
                </h2>
                <p>{data[1].description}</p>
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
              <Category
                href={
                  headerLinks.find((link) => link.tag === data[2].category)!
                    .href ?? "/"
                }
              >
                {data[2].category || "Sem categoria"}
              </Category>
              <div className="flex flex-col gap-2 text-rose-50">
                <h2>
                  <strong className="text-3xl">{data[2].title}</strong>
                </h2>
                <p>{data[2].description}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Main;
