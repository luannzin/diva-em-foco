import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";

const Post = {
  index: async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const posts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return posts.sort((a: any, b: any) => {
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      });
    } catch (error) {
      console.error("Error getting documents: ", error);
      return {
        error,
      };
    }
  },
  create: async (data: {
    body: {
      title: string;
      content: string;
      keywords: string;
      category: string;
      imageURL: string;
    };
  }) => {
    const { title, content, keywords, category, imageURL } = data.body;

    try {
      const docRef = await addDoc(collection(db, "posts"), {
        title,
        slug: `${title
          .replace(/[^\w\s]/gi, "")
          .toLowerCase()
          .replaceAll(" ", "-")}`,
        content: `${content}`,
        imageURL,
        keywords,
        category,
        author: "luannzin",
        created_at: new Date().toISOString(),
      });

      return {
        ...docRef,
      };
    } catch (error) {
      console.error("Error adding document: ", error);
      return {
        error: error,
      };
    }
  },
  slug: async (slug: string) => {
    try {
      const docRef = await getDocs(collection(db, "posts"));
      const posts = docRef.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as { slug: string }),
      }));

      return {
        ...posts.find((post) => post.slug === slug),
      };
    } catch (error) {
      console.error("Error getting documents: ", error);
      return {
        error: error,
      };
    }
  },
  byName: async (username: string) => {
    try {
      const docRef = await getDocs(collection(db, "posts"));
      const posts = docRef.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as { author: string }),
      }));

      return {
        ...posts.filter((post) => post.author === username),
      };
    } catch (error) {
      console.error("Error getting documents: ", error);
      return {
        error: error,
      };
    }
  },
  category: async (category: string) => {
    try {
      const docRef = await getDocs(collection(db, "posts"));
      const posts = docRef.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as { category: string }),
      }));

      return {
        ...posts
          .filter((post) => post.category === category)
          .sort((a: any, b: any) => {
            return (
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
            );
          }),
      };
    } catch (error) {
      console.error("Error getting documents: ", error);
      return {
        error: error,
      };
    }
  },
};

export default Post;
