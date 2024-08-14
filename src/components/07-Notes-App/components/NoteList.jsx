// NotesList.jsx
import React, { useContext } from "react";
import NoteItem from "../components/NoteItem.jsx";
import { NotesContext } from "../context/NotesContext.jsx";

const NotesList = () => {
  const { notes, deleteNote, archiveNote } = useContext(NotesContext);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">All Notes</h2>
      {notes.length > 0 ? (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            onArchive={() => archiveNote(note.id)}
            onDelete={() => deleteNote(note.id)}
          />
        ))
      ) : (
        <p className="text-gray-500">No notes available.</p>
      )}
    </div>
  );
};

export default NotesList;
