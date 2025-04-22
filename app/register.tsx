import { router } from "expo-router";
import { Text, ToastAndroid, View } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSession } from "../context/AuthContext";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from "../components/ui/form-control";
import { Input, InputField } from "../components/ui/input";
import { Button, ButtonIcon, ButtonText } from "../components/ui/button";
import { VStack } from "../components/ui/vstack";
import { FacebookIcon, GoogleIcon } from "../components/ui/icon";
import { CustomText } from "../components/ui/text";
import { HStack } from "../components/ui/hstack";
import { register } from "../services/auth";
import Toast from "react-native-toast-message";
import { getErrorMessage } from "../utils/erroHandler";

const schema = z
  .object({
    email: z.string().email("Email inválido"),
    senha: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
    confirmarSenha: z
      .string()
      .min(6, "A senha deve ter pelo menos 6 caracteres"),
  })
  .refine((data: any) => data.senha === data.confirmarSenha, {
    message: "As senhas não coincidem",
    path: ["confirmarSenha"],
  });

export default function Register() {
  const {
    register: registerInput,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async ({
    email,
    senha,
  }: {
    email: string;
    senha: string;
  }) => {
    try {
      await register({ email, senha });
      Toast.show({
        type: "success",
        text1: "Cadastro realizado com sucesso",
      });
      router.replace("/login");
    } catch (error: any) {
      const errorMessage = getErrorMessage(error);

      Toast.show({
        type: "error",
        text1: errorMessage,
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
        <FormControl className="w-full" isInvalid={!!errors.email}>
          <FormControlLabel>
            <FormControlLabelText>Email</FormControlLabelText>
          </FormControlLabel>
          <Input className="my-1">
            <InputField
              placeholder="Digite o email..."
              onChangeText={(text) => setValue("email", text)}
              {...registerInput("email")}
            />
          </Input>
          {errors.email && (
            <Text className="text-red-500">{errors.email.message}</Text>
          )}
        </FormControl>

        <FormControl className="w-full" isInvalid={!!errors.senha}>
          <FormControlLabel>
            <FormControlLabelText>Senha</FormControlLabelText>
          </FormControlLabel>
          <Input className="my-1">
            <InputField
              secureTextEntry
              placeholder="Digite a senha..."
              onChangeText={(text) => setValue("senha", text)}
              {...registerInput("senha")}
            />
          </Input>
          {errors.senha && (
            <Text className="text-red-500">{errors.senha.message}</Text>
          )}
        </FormControl>

        <FormControl className="w-full" isInvalid={!!errors.confirmarSenha}>
          <FormControlLabel>
            <FormControlLabelText>Confirmar Senha</FormControlLabelText>
          </FormControlLabel>
          <Input className="my-1">
            <InputField
              secureTextEntry
              placeholder="Digite a senha novamente..."
              onChangeText={(text) => setValue("confirmarSenha", text)}
              {...registerInput("confirmarSenha")}
            />
          </Input>
          {errors.confirmarSenha && (
            <Text className="text-red-500">
              {errors.confirmarSenha.message}
            </Text>
          )}
        </FormControl>

        <Button
          className="mt-4"
          shadow
          fullWidth
          onPress={handleSubmit(onSubmit)}
        >
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
