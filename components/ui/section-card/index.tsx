import { ElementType } from "react";
import { Card } from "../card";
import { Icon } from "../icon";
import { CustomText } from "../text";

interface SectionCardProps {
  name: string;
  icon: ElementType;
  fullWidth?: boolean;
}

export default function SectionCard({
  name,
  icon,
  fullWidth,
}: SectionCardProps) {
  return (
    <Card size="lg" variant="elevated" className={`m-3 flex-1 items-center`}>
      <Icon as={icon} size="xl" className="text-primary-500" />
      <CustomText size="xl" className="mb-1">
        {name}
      </CustomText>
    </Card>
  );
}
