import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL || "https://divaemfoco.vercel.app/",
});

export default api;
