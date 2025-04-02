import api from "../api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoginResponse } from "./auth-types";
import axios from "axios";

interface RegisterProps {
  email: string;
  senha: string;
}

export const register = async ({ email, senha }: RegisterProps) => {
  try {
    await api.post("/auth/cadastrar", { email, senha });
  } catch (error) {
    throw new Error("Erro ao registrar usuário", { cause: error });
  }
};

export const login = async (email: string, password: string) => {
  try {
    const response = await api.post<LoginResponse>("/auth/login", {
      email,
      password,
    });
    const token = response.data.access_token;
    await AsyncStorage.setItem("smartlab:authToken", token);
    return token;
  } catch (error) {
    throw new Error("Erro ao fazer login", { cause: error });
  }
};

export const logout = async () => {
  await AsyncStorage.removeItem("token");
};
