import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create();

api.interceptors.request.use(async (config: any) => {
  const baseURL = process.env.EXPO_PUBLIC_API_URL;
  config.baseURL = baseURL;

  const token = await AsyncStorage.getItem("smartlab:authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
