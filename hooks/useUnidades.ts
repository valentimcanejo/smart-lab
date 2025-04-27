import { useQuery } from "@tanstack/react-query";
import { Unidade } from "../@types/Unidade";

export default function useUnidades() {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(`${process.env.EXPO_PUBLIC_API_URL}/unidades`).then((res) =>
        res.json()
      ),
  });

  return { listaUnidades: data as Unidade[] };
}
