import axios from "axios";
import { getAuth } from "firebase/auth";

const weatherAxiosInstance = axios.create({
  baseURL: "https://",
});
weatherAxiosInstance.interceptors.request.use(
  (config) => {
    const token = getAuth().currentUser.accessToken;
    if (!token) {
      throw new Error("AUTH_TOKEN_MISSING");
    }

    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default weatherAxiosInstance;
