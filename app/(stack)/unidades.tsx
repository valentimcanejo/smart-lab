import { FlatList, Text, View } from "react-native";
import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
} from "../../components/ui/input";
import { useState } from "react";
import { SearchIcon } from "../../components/ui/icon";
import { VStack } from "../../components/ui/vstack";
import useUnidades from "../../hooks/useUnidades";
import { Card } from "../../components/ui/card";
import { CustomText } from "../../components/ui/text";

export default function Unidades() {
  const { listaUnidades } = useUnidades();

  const [buscaUnidade, setBuscaUnidade] = useState("");
  console.log(listaUnidades);

  return (
    <VStack className="p-6" space="lg">
      <Input className="my-1 ">
        <InputField
          type="text"
          placeholder="Procurar..."
          value={buscaUnidade}
          onChangeText={setBuscaUnidade}
        />
        <InputSlot className="pr-4">
          <InputIcon as={SearchIcon} />
        </InputSlot>
      </Input>
      <FlatList
        data={listaUnidades}
        renderItem={({ item }) => (
          <Card key={item.id} className="gap-4 my-1">
            <CustomText className="text-lg">{item.nome}</CustomText>
            <CustomText className="text-sm">{item.telefone}</CustomText>
          </Card>
        )}
        keyExtractor={(item) => item.id}
      />
    </VStack>
  );
}
