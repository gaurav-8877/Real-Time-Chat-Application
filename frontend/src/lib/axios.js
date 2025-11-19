import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://real-time-chat-application-4-hcpi.onrender.com/" : "/api",
  withCredentials: true,
});
