import { Slot, SplashScreen } from "expo-router";
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
          <Slot />
        </SessionProvider>
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
