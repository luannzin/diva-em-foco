import axios from "axios";

console.log(process.env.NEXT_PUBLIC_URL);

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL || "https://blog.luannzin.com/",
});

export default api;
