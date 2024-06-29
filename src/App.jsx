// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SimpleCounter from "./components/01-SimpleCounter";
import ToDoList from "./components/02-ToDoList";
// Import other project components as needed...

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simple-counter" element={<SimpleCounter />} />
        <Route path="/to-do-list" element={<ToDoList />} />
        {/* Add routes for other projects here... */}
      </Routes>
    </Router>
  );
}

export default App;
