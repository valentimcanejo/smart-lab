import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  baseURL: process.env.BACKEND_URL,
});

api.interceptors.request.use(async (config: any) => {
  const token = await AsyncStorage.getItem("smartlab:authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
