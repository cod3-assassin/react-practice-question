// Trash.jsx
import React, { useContext } from "react";
import NoteItem from "../components/NoteItem.jsx";
import { NotesContext } from "../context/NotesContext.jsx";

const Trash = () => {
  const { trashedNotes, restoreNote, deleteNotePermanently } =
    useContext(NotesContext);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Trashed Notes</h2>
      {trashedNotes && trashedNotes.length > 0 ? (
        trashedNotes.map((note) =>
          note ? (
            <NoteItem
              key={note.id}
              note={note}
              onRestore={() => restoreNote(note.id)}
              onPermanentlyDelete={() => deleteNotePermanently(note.id)}
            />
          ) : null
        )
      ) : (
        <p className="text-gray-500">No trashed notes.</p>
      )}
    </div>
  );
};

export default Trash;
