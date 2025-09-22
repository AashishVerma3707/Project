import axiosInstance from "./axiosinstance";

export const getLocation = async (params) => {
  try {
    const res = await axiosInstance.get("/search", { params });
    return res?.data;
  } catch (error) {
    console.error("Error fetching dataset:", error);
    throw error;
  }
};

export const getCurrentTemp = async (params) => {
  try {
    const res = await axiosInstance.get("/forecast", { params });
    return res?.data;
  } catch (error) {
    console.error("Error fetching dataset:", error);
    throw error;
  }
};
