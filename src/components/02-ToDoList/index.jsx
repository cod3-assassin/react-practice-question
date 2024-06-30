// src/components/02-ToDoList.js
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("Low");

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, date, priority }]);
      setTask("");
      setDate("");
      setPriority("Low");
    }
  };

  const removeTask = (taskToRemove) => {
    setTasks(tasks.filter((task) => task.text !== taskToRemove.text));
  };

  return (
    <div className="flex flex-col items-center space-y-4 bg-white p-6 rounded-md shadow-md w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center">To-Do List</h1>
      <div className="flex flex-col space-y-2 w-full">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border rounded p-2 w-full"
          placeholder="New task"
        />
        <input
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border rounded p-2 w-full"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="border rounded p-2 w-full"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button
          onClick={addTask}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Add
        </button>
      </div>
      <ol className="list-decimal pl-5 w-full">
        {tasks.map((t, index) => (
          <li
            key={index}
            className="flex justify-between items-center text-lg py-1"
          >
            <div>
              <span>
                {index + 1}. {t.text}
              </span>
              <div className="text-sm text-gray-500">{t.date}</div>
              <div
                className={`text-sm ${
                  t.priority === "High"
                    ? "text-red-500"
                    : t.priority === "Medium"
                    ? "text-yellow-500"
                    : "text-green-500"
                }`}
              >
                Priority: {t.priority}
              </div>
            </div>
            <button
              onClick={() => removeTask(t)}
              className="text-red-500 hover:text-red-700 transition-colors duration-300"
            >
              <FaTrash />
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
