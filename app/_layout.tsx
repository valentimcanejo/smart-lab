import { Stack } from "expo-router";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { SessionProvider } from "../context/AuthContext";
import { GluestackUIProvider } from "../components/ui/gluestack-ui-provider";

import { useColorScheme } from "react-native";
import "../global.css";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export default function Root() {
  const colorScheme = useColorScheme();
  const client = new QueryClient();

  return (
    <GluestackUIProvider mode="light">
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <SessionProvider>
          <QueryClientProvider client={client}>
            <Stack
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen
                name="(tabs)"
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="(stack)/exames"
                options={{
                  headerShown: true,
                  title: "Exames",
                  headerBackTitle: "Voltar",
                }}
              />
              <Stack.Screen
                name="(stack)/unidades"
                options={{
                  headerShown: true,
                  title: "Unidades",
                  headerBackTitle: "Voltar",
                }}
              />
            </Stack>
          </QueryClientProvider>
        </SessionProvider>
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
