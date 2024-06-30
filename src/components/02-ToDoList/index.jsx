// src/components/02-ToDoList.js
import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };
  const removeTask = () => {
    setTasks(tasks.filter((task) => task !== task));
  };

  return (
    <div className="flex flex-col items-center space-y-4  bg-white h-full border-white rounded-md">
      <h1 className="text-2xl font-bold">To-Do List</h1>
      <div className="flex space-x-2">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border rounded p-2"
          placeholder="New task"
        />
        <button
          onClick={addTask}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Add
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          onClick={removeTask}
        >
          Remove
        </button>
      </div>
      <ul className="list-disc pl-5">
        {tasks.map((t, index) => (
          <li key={index} className="text-lg">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
