import { router } from "expo-router";
import { Text, ToastAndroid, View } from "react-native";

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
import { useEffect, useState } from "react";
import { FacebookIcon, GoogleIcon } from "../components/ui/icon";
import { CustomText } from "../components/ui/text";
import { HStack } from "../components/ui/hstack";
import { register } from "../services/auth";
import { createToast } from "@gluestack-ui/toast";
import Toast from "react-native-toast-message";

export default function Register() {
  const { signIn } = useSession();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleSubmit = async () => {
    try {
      if (senha !== confirmarSenha) {
        return Toast.show({
          type: "error",
          text1: "Senhas não coincidem",
        });
      }

      await register(email, senha);
    } catch (error: any) {
      return Toast.show({
        type: "error",
        text1: error.message,
      });
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
          //isInvalid={isInvalid}
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
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </Input>
          <FormControlLabel>
            <FormControlLabelText>Senha</FormControlLabelText>
          </FormControlLabel>
          <Input className="my-1">
            <InputField
              type="password"
              placeholder="Digite a senha..."
              value={senha}
              onChangeText={(text) => setSenha(text)}
            />
          </Input>
          <FormControlLabel>
            <FormControlLabelText>Confirmar Senha</FormControlLabelText>
          </FormControlLabel>
          <Input className="my-1">
            <InputField
              type="password"
              placeholder="Digite a senha novamente..."
              value={confirmarSenha}
              onChangeText={(text) => setConfirmarSenha(text)}
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
        <Button variant="link" fullWidth onPress={() => router.back()}>
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
      <Toast />
    </VStack>
  );
}
