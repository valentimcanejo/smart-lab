import { Text, View } from "react-native";
import { VStack } from "../../components/ui/vstack";
import { HStack } from "../../components/ui/hstack";
import AvatarPhoto from "../../components/AvatarPhoto";
import { CustomText } from "../../components/ui/text";
import { Input, InputField } from "../../components/ui/input";
import { useState } from "react";

export default function Profile() {
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  return (
    <VStack className="flex-1 p-6" space="lg">
      <VStack className="items-center justify-center " space="lg">
        <AvatarPhoto />
        <CustomText className="text-2xl font-bold">Rômulo</CustomText>
      </VStack>
      <VStack className="mt-4" space="lg">
        <CustomText className="text-xl font-bold">Email:</CustomText>
        <Input>
          <InputField
            type="text"
            placeholder="Digite o email..."
            value={email}
            onChangeText={setEmail}
          />
        </Input>
        <CustomText className="text-xl font-bold">Telefone:</CustomText>
        <Input>
          <InputField
            type="text"
            placeholder="Digite o telefone..."
            value={telefone}
            onChangeText={setTelefone}
          />
        </Input>
      </VStack>
    </VStack>
  );
}
