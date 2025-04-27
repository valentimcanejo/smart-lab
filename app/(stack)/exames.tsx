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
import useExames from "../../hooks/useExames";
import CustomFlatList from "../../components/CustomFlatList";
import { FlatList } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Exames() {
  const { listaExames } = useExames();

  const [buscaExame, setBuscaExame] = useState("");
  // const listaExames = [
  //   { id: 1, name: "Exame A", description: "6 horas de jejum" },
  //   { id: 2, name: "Exame B", description: "12 horas de jejum" },
  //   { id: 3, name: "Exame C", description: "10 horas de jejum" },
  // ];

  return (
    <SafeAreaView className="flex-1">
      <VStack className="flex-1 p-6" space="lg">
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

        <FlatList
          data={listaExames}
          renderItem={({ item }) => (
            <Card key={item.id} className="gap-4 my-1">
              <CustomText className="text-lg">{item.nome}</CustomText>
              <CustomText className="text-sm">{item.instrucoes}</CustomText>
            </Card>
          )}
          keyExtractor={(item) => item.id}
        />

        {/* <CustomFlatList
          Item={({ id, nome, instrucoes }) => (
            <Card key={id} className="gap-4 my-1">
              <CustomText className="text-lg">{nome}</CustomText>
              <CustomText className="text-sm">{instrucoes}</CustomText>
            </Card>
          )}
          lista={listaExames}
          itemKey="id"
          getItemProps={(item) => ({
            nome: item.nome,
            instrucoes: item.instrucoes,
          })}
        /> */}
      </VStack>
    </SafeAreaView>
  );
}
