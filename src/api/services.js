import { locationAxiosInstance, weatherAxiosInstance } from "./axiosinstance";

export const getLocation = async (params) => {
  try {
    const res = await locationAxiosInstance.get("/search", { params });
    return res?.data;
  } catch (error) {
    console.error("Error fetching dataset:", error);
    throw error;
  }
};

export const getWeather = async (params) => {
  try {
    const res = await weatherAxiosInstance.get("/forecast", { params });
    return res?.data;
  } catch (error) {
    console.error("Error fetching dataset:", error);
    throw error;
  }
};
