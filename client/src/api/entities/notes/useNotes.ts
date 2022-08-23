import { useQuery } from "@tanstack/react-query";
import { api } from "@/api/utils/axios";

export const useNotes = () => {
  return useQuery(["notes"], async () => {
    const response = await api.get("/notes");
    return await response.data;
  });
};

export const useNote = (id: number) => {
  return useQuery(["notes", id], async () => {
    const response = await api.get(`/notes/${id}`);
    return await response.data;
  }).data;
};
