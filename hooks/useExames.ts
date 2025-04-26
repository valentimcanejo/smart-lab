import { useQuery } from "@tanstack/react-query";
import { Exame } from "../@types/Exame";

export default function useExames() {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(`${process.env.EXPO_PUBLIC_API_URL}/exames`).then((res) =>
        res.json()
      ),
  });

  return { listaExames: data as Exame[] };
}
