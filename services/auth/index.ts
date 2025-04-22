import api from "../api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoginProps, LoginResponse, RegisterProps } from "./auth-types";
import axios from "axios";
import { getErrorMessage } from "../../utils/erroHandler";

export const register = async ({ email, senha }: RegisterProps) => {
  try {
    await api.post("/auth/cadastrar", { email, senha });
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};

export const login = async ({ email, senha }: LoginProps) => {
  try {
    const response = await api.post<LoginResponse>("/auth/login", {
      email,
      senha,
    });
    const token = response.data.token;
    await AsyncStorage.setItem("smartlab:authToken", token);
    return token;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};

export const logout = async () => {
  await AsyncStorage.removeItem("token");
};

export const validarToken = async ({ token }: { token: string }) => {
  try {
    const res = await api.get(`/auth/autenticar/${token}`);
    return res.data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};
