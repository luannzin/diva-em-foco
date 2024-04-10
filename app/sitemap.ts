import { MetadataRoute } from "next";
import { headerLinks } from "./config/nav";

const getEveryInfo = async () => {
  const categoriesLinks: {
    url: string;
    lastModified: Date;
    changeFrequency: "yearly";
    priority: 1;
  }[] = headerLinks.map((link) => {
    return {
      url: `https://blog.luannzin.com/${link.href}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    };
  });

  const renderPosts = async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_URL + "/api/posts", {
      next: {
        revalidate: 0,
      },
    });

    const data = await response.json();

    return data;
  };

  const posts = await renderPosts();

  const postsLinks = posts.map((post: any) => {
    return {
      url: `https://blog.luannzin.com/post/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    };
  });

  return {
    postsLinks,
    categoriesLinks,
  };
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { postsLinks, categoriesLinks } = await getEveryInfo();

  return [
    {
      url: "https://blog.luannzin.com/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...categoriesLinks,
    ...postsLinks,
  ];
}
