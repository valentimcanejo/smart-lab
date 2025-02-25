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
import { Button, ButtonText } from "../components/ui/button";
import { VStack } from "../components/ui/vstack";
import { useState } from "react";
import { AlertCircleIcon } from "../components/ui/icon";

export default function SignIn() {
  const { signIn } = useSession();
  const [isInvalid, setIsInvalid] = useState(false);
  const [inputValue, setInputValue] = useState("12345");
  const handleSubmit = () => {
    if (inputValue.length < 6) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  };
  return (
    <VStack className="w-full max-w-[300px] rounded-md border border-background-200 p-4">
      <FormControl
        isInvalid={isInvalid}
        size="md"
        isDisabled={false}
        isReadOnly={false}
        isRequired={false}
      >
        <FormControlLabel>
          <FormControlLabelText>Password</FormControlLabelText>
        </FormControlLabel>
        <Input className="my-1">
          <InputField
            type="password"
            placeholder="password"
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
          />
        </Input>
        <FormControlHelper>
          <FormControlHelperText>
            Must be atleast 6 characters.
          </FormControlHelperText>
        </FormControlHelper>
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText>
            Atleast 6 characters are required.
          </FormControlErrorText>
        </FormControlError>
      </FormControl>
      <Button className="self-end mt-4 w-fit" size="sm" onPress={handleSubmit}>
        <ButtonText>Submit</ButtonText>
      </Button>
    </VStack>
  );
}
