import React from "react";
import Home from "./pages/Home.jsx";

import { NotesProvider } from "./context/NotesContext.jsx";

function NotesApp() {
  return (
    <NotesProvider>
      <div className="bg-gray-100 min-h-screen">
        <Home />
      </div>
    </NotesProvider>
  );
}

export default NotesApp;
