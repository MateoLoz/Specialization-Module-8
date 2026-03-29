import axios from "axios";
import { ENV } from "../config/env.js";

console.log("BASE_URL:", ENV.BASE_URL);

export const api = axios.create({
  baseURL: ENV.BASE_URL,
  timeout: ENV.TIMEOUT,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
});

api.interceptors.request.use(req => {
  console.log("👉 URL:", req.baseURL + req.url);
  console.log("👉 DATA:", req.data);
  return req;
});