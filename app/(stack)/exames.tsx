import { VStack } from "../../components/ui/vstack";
import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
} from "../../components/ui/input";
import { useState } from "react";
import { SearchIcon } from "../../components/ui/icon";

export default function Exames() {
  const [buscaExame, setBuscaExame] = useState("");

  return (
    <VStack className="p-6">
      <Input className="my-1 ">
        <InputField
          type="text"
          placeholder="Procurar..."
          value={buscaExame}
          onChangeText={setBuscaExame}
        />
        <InputSlot className="pr-4">
          <InputIcon as={SearchIcon} />
        </InputSlot>
      </Input>
    </VStack>
  );
}
