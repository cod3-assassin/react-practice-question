import React, { useContext } from "react";
import NoteItem from "../components/NoteItem.jsx";
import { NotesContext } from "../context/NotesContext.jsx";

const Archive = () => {
  const { archivedNotes, unarchiveNote, deleteNote } = useContext(NotesContext);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Archived Notes</h2>
      {archivedNotes.length > 0 ? (
        archivedNotes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            onUnarchive={() => unarchiveNote(note.id)}
            onDelete={() => deleteNote(note.id)} // Ensure this triggers the correct action
          />
        ))
      ) : (
        <p className="text-gray-500">No archived notes.</p>
      )}
    </div>
  );
};

export default Archive;
