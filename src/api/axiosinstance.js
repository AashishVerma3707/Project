import axios from "axios";

export const locationAxiosInstance = axios.create({
  baseURL: "https://geocoding-api.open-meteo.com/v1",
});

export const weatherAxiosInstance = axios.create({
  baseURL: "https://api.open-meteo.com/v1/",
});