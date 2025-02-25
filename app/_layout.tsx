import { Slot } from "expo-router";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { SessionProvider } from "../context/AuthContext";
import { GluestackUIProvider } from "../components/ui/gluestack-ui-provider";

import { useColorScheme } from "react-native";

export default function Root() {
  // Set up the auth context and render our layout inside of it.
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
