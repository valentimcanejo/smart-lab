import { VStack } from "../../components/ui/vstack";
import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
} from "../../components/ui/input";
import { useState } from "react";
import { SearchIcon } from "../../components/ui/icon";
import { CustomText } from "../../components/ui/text";
import { Card } from "../../components/ui/card";

export default function Exames() {
  const [buscaExame, setBuscaExame] = useState("");
  const listaExames = [
    { id: 1, name: "Exame A", description: "6 horas de jejum" },
    { id: 2, name: "Exame B", description: "12 horas de jejum" },
    { id: 3, name: "Exame C", description: "10 horas de jejum" },
  ];

  return (
    <VStack className="p-6" space="lg">
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
      <VStack space="md">
        {listaExames?.map((exame) => (
          <Card key={exame.id} className="gap-4 my-1">
            <CustomText className="text-lg">{exame.name}</CustomText>
            <CustomText className="text-sm">{exame.description}</CustomText>
          </Card>
        ))}
      </VStack>
    </VStack>
  );
}
