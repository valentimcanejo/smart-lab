import { Text } from "react-native";
import { Redirect, SplashScreen, Stack, Tabs } from "expo-router";

import { useSession } from "../../context/AuthContext";
import { FontAwesome } from "@expo/vector-icons";
import { AvatarIcon, GoogleIcon, Icon } from "../../components/ui/icon";
import { useFonts } from "expo-font";
import { useEffect } from "react";

export default function AppLayout() {
  const { logado } = useSession();

  // You can keep the splash screen open, or render a loading screen like we do here.

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  // if (!session) {
  //   // On web, static rendering will stop here as the user is not authenticated
  //   // in the headless Node process that the pages are rendered in.
  //   return <Redirect href="/login" />;
  // }

  // This layout can be deferred because it's not the root layout.
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={20} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Procurar",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={20} name="search" color={color} />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="help"
        options={{
          title: "Ajuda",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={20} name="amazon" color={color} />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => <Icon as={AvatarIcon} color={color} />,
        }}
      />
    </Tabs>
  );
}
