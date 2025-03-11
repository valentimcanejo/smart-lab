import { ElementType } from "react";
import { Card } from "../card";
import { Icon } from "../icon";
import { CustomText } from "../text";
import { Href, router } from "expo-router";

interface SectionCardProps {
  name: string;
  icon: ElementType;
  fullWidth?: boolean;
  route: Href;
}

export default function SectionCard({
  name,
  icon,
  fullWidth,
  route,
}: SectionCardProps) {
  return (
    <Card
      size="lg"
      variant="elevated"
      className={`m-3 flex-1 items-center`}
      onTouchEnd={() => router.push(route)}
    >
      <Icon as={icon} size="xl" className="text-primary-500" />
      <CustomText size="xl" className="mb-1">
        {name}
      </CustomText>
    </Card>
  );
}
