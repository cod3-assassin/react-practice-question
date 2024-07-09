import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProjectList from "./components/ProjectList/ProjectList";
import ProjectView from "./components/ProjectList/ProjectView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectId" element={<ProjectView />} />
      </Routes>
    </Router>
  );
}

export default App;
