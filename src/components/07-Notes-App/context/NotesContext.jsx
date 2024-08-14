// NotesContext.jsx

import React, { createContext, useReducer } from "react";
import NotesReducer from "./NotesReducer.jsx";
import useLocalStorage from "../hooks/useLocalStorage.jsx";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [storedNotes, setStoredNotes] = useLocalStorage("notes", []);
  const [state, dispatch] = useReducer(NotesReducer, {
    notes: storedNotes,
    archivedNotes: [],
    trashedNotes: [],
  });

  const addNote = (content) => {
    const note = { id: Date.now(), content };
    dispatch({ type: "ADD_NOTE", payload: note });
    setStoredNotes([...state.notes, note]);
  };

  const archiveNote = (id) => {
    dispatch({ type: "ARCHIVE_NOTE", payload: id });
  };

  const unarchiveNote = (id) => {
    dispatch({ type: "UNARCHIVE_NOTE", payload: id });
  };

  const deleteNote = (id) => {
    dispatch({ type: "DELETE_NOTE", payload: id });
  };

  const restoreNote = (id) => {
    dispatch({ type: "RESTORE_NOTE", payload: id });
  };

  const deleteNotePermanently = (id) => {
    dispatch({ type: "DELETE_NOTE_PERMANENTLY", payload: id });
    const updatedTrashedNotes = state.trashedNotes.filter(
      (note) => note.id !== id
    );
    setStoredNotes([
      ...state.notes,
      ...state.archivedNotes,
      ...updatedTrashedNotes,
    ]);
  };

  return (
    <NotesContext.Provider
      value={{
        notes: state.notes,
        archivedNotes: state.archivedNotes,
        trashedNotes: state.trashedNotes,
        addNote,
        archiveNote,
        unarchiveNote,
        deleteNote,
        restoreNote,
        deleteNotePermanently,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export { NotesProvider, NotesContext };
