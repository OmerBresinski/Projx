import { api } from "@/api/utils/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = { title: string; description: string };

export const useCreateNote = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ({ title, description }: Props) =>
      api.post("/notes", {
        title,
        description,
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(["notes"]),
    }
  );
};
