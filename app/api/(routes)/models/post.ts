import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";

const Post = {
  index: async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const posts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return {
        ...posts,
      };
    } catch (error) {
      console.error("Error getting documents: ", error);
      return {
        error: error,
      };
    }
  },
  create: async (data: {
    title: string;
    content: string;
    keywords: string;
  }) => {
    const { title, content, keywords } = data;

    try {
      const docRef = await addDoc(collection(db, "posts"), {
        title,
        content,
        keywords,
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
  id: async (id: string) => {
    try {
      const docRef = await getDocs(collection(db, "posts"));
      const posts = docRef.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return {
        ...posts.find((post) => post.id === id),
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
};

export default Post;
