import { router } from "expo-router";
import { Text, View } from "react-native";

import { useSession } from "../context/AuthContext";
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
} from "../components/ui/form-control";
import { Input, InputField } from "../components/ui/input";
import { Button, ButtonIcon, ButtonText } from "../components/ui/button";
import { VStack } from "../components/ui/vstack";
import { useState } from "react";
import { FacebookIcon, GoogleIcon } from "../components/ui/icon";
import { CustomText } from "../components/ui/text";
import { HStack } from "../components/ui/hstack";

export default function Register() {
  const { signIn } = useSession();
  const [isInvalid, setIsInvalid] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = () => {
    if (inputValue.length < 6) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  };
  return (
    <VStack className="items-center flex-1 w-full p-4 justify-evenly">
      <VStack className="items-center" space="lg">
        <CustomText className="text-4xl font-bold text-primary-500">
          Cadastrar Conta
        </CustomText>
        <CustomText className="font-bold ">
          Cadastrar-se com email e senha
        </CustomText>
      </VStack>
      <VStack className="items-center w-full" space="xl">
        <FormControl
          isInvalid={isInvalid}
          isDisabled={false}
          isReadOnly={false}
          isRequired={false}
          className="w-full"
        >
          <FormControlLabel>
            <FormControlLabelText>Email</FormControlLabelText>
          </FormControlLabel>
          <Input className="my-1 ">
            <InputField
              type="text"
              placeholder="Digite o email..."
              value={inputValue}
              onChangeText={(text) => setInputValue(text)}
            />
          </Input>
          <FormControlLabel>
            <FormControlLabelText>Senha</FormControlLabelText>
          </FormControlLabel>
          <Input className="my-1">
            <InputField
              type="password"
              placeholder="Digite a senha..."
              value={inputValue}
              onChangeText={(text) => setInputValue(text)}
            />
          </Input>
          <FormControlLabel>
            <FormControlLabelText>Confirmar Sennha</FormControlLabelText>
          </FormControlLabel>
          <Input className="my-1">
            <InputField
              type="password"
              placeholder="Digite a senha novamente..."
              value={inputValue}
              onChangeText={(text) => setInputValue(text)}
            />
          </Input>
          {/* <FormControlHelper>
            <FormControlHelperText>
              Must be atleast 6 characters.
            </FormControlHelperText>
          </FormControlHelper>
          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>
              Atleast 6 characters are required.
            </FormControlErrorText>
          </FormControlError> */}
        </FormControl>
        <Button className="mt-4 " shadow fullWidth onPress={handleSubmit}>
          <ButtonText>Cadastrar-se</ButtonText>
        </Button>
        <Button variant="link" fullWidth>
          <CustomText>Já possui uma conta</CustomText>
        </Button>
      </VStack>
      <VStack className="items-center w-full" space="xl">
        <CustomText className="text-primary-500">Ou continue com</CustomText>
        <HStack space="md">
          <Button variant="outline">
            <ButtonIcon as={GoogleIcon} />
          </Button>
          <Button variant="outline">
            <ButtonIcon as={FacebookIcon} />
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
}
