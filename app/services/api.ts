import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL || "https://blog.luannzin.com/",
});

export default api;
