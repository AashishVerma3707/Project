import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://geocoding-api.open-meteo.com/v1",
});

export default axiosInstance;
