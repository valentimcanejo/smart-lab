import { FlatList } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ComponentType } from "react";

interface CustomFlatListProps<T> {
  lista: T[];
  Item: ComponentType<any>;
  itemKey: keyof T;
  getItemProps: (item: T) => object;
}

export default function CustomFlatList<T extends { [key: string]: any }>({
  lista,
  Item,
  itemKey,
  getItemProps,
}: CustomFlatListProps<T>) {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <FlatList
          data={lista}
          renderItem={({ item }) => <Item {...getItemProps(item)} />}
          keyExtractor={(item) => item[itemKey].toString()}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
