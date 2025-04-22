import { Text, View } from "react-native";
import { VStack } from "../../components/ui/vstack";
import { HStack } from "../../components/ui/hstack";
import AvatarPhoto from "../../components/AvatarPhoto";
import { CustomText } from "../../components/ui/text";
import { Input, InputField } from "../../components/ui/input";
import { useState } from "react";
import { EditIcon, Icon } from "../../components/ui/icon";
import { Button, ButtonText } from "../../components/ui/button";
import { useSession } from "../../context/AuthContext";
import { router } from "expo-router";

export default function Profile() {
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const { signOut } = useSession();

  return (
    <VStack className="justify-between flex-1 p-6" space="lg">
      <VStack>
        <VStack className="items-center justify-center " space="lg">
          <AvatarPhoto />
          <HStack space="md">
            <CustomText className="text-2xl font-bold">Rômulo</CustomText>
            <Icon as={EditIcon} size="lg" className="text-primary-500" />
          </HStack>
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
      <VStack>
        <Button onPress={() => router.replace("/login")}>
          <ButtonText>Sair</ButtonText>
        </Button>
      </VStack>
    </VStack>
  );
}
