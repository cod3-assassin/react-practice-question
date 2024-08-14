// NotesReducer.jsx

const NotesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };

    case "ARCHIVE_NOTE":
      const noteToArchive = state.notes.find(
        (note) => note.id === action.payload
      );
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
        archivedNotes: [...state.archivedNotes, noteToArchive],
      };

    case "UNARCHIVE_NOTE":
      const noteToUnarchive = state.archivedNotes.find(
        (note) => note.id === action.payload
      );
      return {
        ...state,
        archivedNotes: state.archivedNotes.filter(
          (note) => note.id !== action.payload
        ),
        notes: [...state.notes, noteToUnarchive],
      };

    case "DELETE_NOTE":
      const noteToTrashFromNotes = state.notes.find(
        (note) => note.id === action.payload
      );
      const noteToTrashFromArchived = state.archivedNotes.find(
        (note) => note.id === action.payload
      );

      return {
        ...state,
        notes: noteToTrashFromNotes
          ? state.notes.filter((note) => note.id !== action.payload)
          : state.notes,
        archivedNotes: noteToTrashFromArchived
          ? state.archivedNotes.filter((note) => note.id !== action.payload)
          : state.archivedNotes,
        trashedNotes: [
          ...state.trashedNotes,
          noteToTrashFromNotes || noteToTrashFromArchived,
        ],
      };

    case "RESTORE_NOTE":
      const noteToRestore = state.trashedNotes.find(
        (note) => note.id === action.payload
      );
      return {
        ...state,
        trashedNotes: state.trashedNotes.filter(
          (note) => note.id !== action.payload
        ),
        notes: [...state.notes, noteToRestore],
      };

    case "DELETE_NOTE_PERMANENTLY":
      return {
        ...state,
        trashedNotes: state.trashedNotes.filter(
          (note) => note.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default NotesReducer;
