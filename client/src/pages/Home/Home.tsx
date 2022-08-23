import { useState } from "react";
import { useNotes } from "@/api/entities";
import { useCreateNote } from "@/api/entities/notes/useCreateNote";
import type { FormEvent } from "react";

export const Home = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { data, isLoading, error } = useNotes();
  const createNote = useCreateNote();

  const handleTitleChange = (e: FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const handleDescriptionChange = (e: FormEvent<HTMLInputElement>) => {
    setDescription(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    clearFields();
    createNote.mutate({
      title,
      description,
    });
  };

  const clearFields = () => {
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <h1>Create Note</h1>
      <form style={{ display: "flex" }}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          onChange={handleTitleChange}
          value={title}
          name="title"
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          onChange={handleDescriptionChange}
          value={description}
          name="description"
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {error && <div>Error</div>}
      {isLoading && <div>Loading...</div>}
    </div>
  );
};
