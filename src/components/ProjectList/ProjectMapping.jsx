import React from "react";

const SimpleCounter = React.lazy(() => import("../01-SimpleCounter"));
const ToDoList = React.lazy(() => import("../02-ToDoList"));
// Add more lazy imports for other projects...

const projectMapping = {
  "01-SimpleCounter": SimpleCounter,
  "02-ToDoList": ToDoList,
  // Add more mappings for other projects...
};

export default projectMapping;
