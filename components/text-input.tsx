import { ComponentProps } from "react";
import { TextInput } from "react-native";

interface CustomTextInputProps extends ComponentProps<typeof TextInput> {
  size?: "xl" | "lg" | "md" | "sm";
}

export default function CustomTextInput({ ...rest }: CustomTextInputProps) {
  return <TextInput {...rest} className={` `} />;
}
