import { Text, View } from "react-native";

import { useSession } from "../../context/AuthContext";
import { Card } from "../../components/ui/card";
import { Heading } from "../../components/ui/heading";
import { CustomText } from "../../components/ui/text";
import SectionCard from "../../components/ui/section-card";
import { ExamIcon, GoogleIcon, LocationIcon } from "../../components/ui/icon";
import { HStack } from "../../components/ui/hstack";
import { VStack } from "../../components/ui/vstack";
import { Grid, GridItem } from "../../components/ui/grid";
import { Href } from "expo-router";

export default function Index() {
  const { signOut } = useSession();

  const sectionsList: { name: string; icon: any; route: Href }[] = [
    {
      name: "Exames",
      icon: ExamIcon,
      route: "/(stack)/exames",
    },
    {
      name: "Unidades",
      icon: LocationIcon,
      route: "/(stack)/unidades",
    },
  ];

  return (
    <View className="flex-1 w-full p-4">
      <VStack>
        <HStack space="md" className="flex-2">
          {sectionsList?.map((section, index) => (
            <SectionCard
              key={index}
              name={section.name}
              icon={section.icon}
              route={section.route}
            />
          ))}
        </HStack>
      </VStack>
    </View>
  );
}
