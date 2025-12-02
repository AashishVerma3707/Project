import { apiPaths } from "./api-routes";
import { locationAxiosInstance } from "./locationAxiosInstance";
import weatherAxiosInstance from "./weatherAxiosInstance";

export const getLocation = async (params) => {
  try {
    const res = await locationAxiosInstance.get(apiPaths.getLocation, {
      params,
    });
    return res?.data;
  } catch (error) {
    console.error("Error fetching dataset:", error);
    throw error;
  }
};

export const getWeather = async (params) => {
  try {
    const res = await weatherAxiosInstance.get(
      apiPaths.getFirebaseWeatherData,
      {
        params,
      }
    );
    return res?.data;
  } catch (error) {
    console.error("Error fetching dataset:", error);  
    throw error;
  }
};
