import { Slot, SplashScreen, Stack } from "expo-router";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { SessionProvider } from "../context/AuthContext";
import { useFonts } from "expo-font";
import { GluestackUIProvider } from "../components/ui/gluestack-ui-provider";

import { useColorScheme } from "react-native";
import "../global.css";
import { useEffect } from "react";

export default function Root() {
  const colorScheme = useColorScheme();

  return (
    <GluestackUIProvider mode="light">
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <SessionProvider>
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
        </SessionProvider>
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
