import axios from "axios";

const api = axios.create({
  baseURL: process.env.URL || "https://localhost:3000/",
});

export default api;
