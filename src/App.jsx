// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SimpleCounter from "./components/01-SimpleCounter";
import ToDoList from "./components/02-ToDoList";
import ProjectList from "./components/ProjectList/ProjectList";

// Import other project components as needed...

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<ProjectList />} />
          <Route path="simple-counter" element={<SimpleCounter />} />
          <Route path="to-do-list" element={<ToDoList />} />
          {/* Add routes for other projects here... */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
