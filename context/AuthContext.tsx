import {
  useContext,
  createContext,
  type PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { useStorageState } from "../hooks/useStorageState";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { logout, validarToken } from "../services/auth";

const AuthContext = createContext<{
  signOut: () => void;
  setLogado: any;
  session?: string | null;
  logado: string;
}>({
  signOut: () => null,
  session: null,
  setLogado: () => null,
  logado: "",
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [logado, setLogado] = useState("");
  const [verifica, setVerifica] = useState(false);

  const signOut = async () => {
    await logout();
    router.replace("/login");
  };

  const verificaToken = async () => {
    try {
      const storageLogado = await AsyncStorage.getItem("smartlab:authToken");
      console.log("storageLogado", storageLogado);
      if (storageLogado) {
        const tokenValidado = await validarToken({ token: storageLogado });

        if (tokenValidado) {
          setLogado(tokenValidado);
        } else {
          router.replace("/login");
        }
      } else {
        router.replace("/login");
      }
    } catch (error) {
      console.log(error);
      router.replace("/login");
    }
  };

  useEffect(() => {
    verificaToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signOut,
        logado,
        setLogado,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
