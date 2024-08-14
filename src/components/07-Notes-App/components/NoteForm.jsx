// NoteForm.jsx
import React, { useState, useContext } from "react";
import { NotesContext } from "../context/NotesContext.jsx";
import { FaPlus } from "react-icons/fa";

const NoteForm = () => {
  const [note, setNote] = useState("");
  const { addNote } = useContext(NotesContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.trim()) {
      addNote(note);
      setNote("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg"
    >
      <textarea
        className="border border-gray-300 p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Type your note here..."
        required
      />
      <button
        type="submit"
        className="bg-green-500 text-white p-2 rounded flex items-center justify-center hover:bg-green-600 transition"
      >
        <FaPlus className="mr-2" /> Add Note
      </button>
    </form>
  );
};

export default NoteForm;
