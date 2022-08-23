import axios from "axios";

export const api = axios.create({
  // baseURL: import.meta.env.SERVER_URL,
  baseURL: "http://localhost:3031/api",
});
