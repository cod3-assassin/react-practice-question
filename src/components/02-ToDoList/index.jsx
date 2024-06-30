import React, { useState, useEffect } from "react";
import { FaTrash, FaEdit, FaSave } from "react-icons/fa";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("Low");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim()) {
      const newTasks = [...tasks, { text: task, date, priority }];
      setTasks(newTasks);
      setTask("");
      setDate("");
      setPriority("Low");
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const clearTasks = () => {
    setTasks([]);
  };

  const editTask = (index) => {
    const taskToEdit = tasks[index];
    setTask(taskToEdit.text);
    setDate(taskToEdit.date);
    setPriority(taskToEdit.priority);
    setEditIndex(index);
  };

  const saveTask = () => {
    const updatedTasks = tasks.map((t, i) =>
      i === editIndex ? { text: task, date, priority } : t
    );
    setTasks(updatedTasks);
    setTask("");
    setDate("");
    setPriority("Low");
    setEditIndex(null);
  };

  return (
    <div className="flex flex-col items-center space-y-4 bg-gray-100 p-6 rounded-md shadow-md w-full max-w-md mx-auto">
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
        {editIndex !== null ? (
          <button
            onClick={saveTask}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Save
          </button>
        ) : (
          <button
            onClick={addTask}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Add
          </button>
        )}
        <button
          onClick={clearTasks}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Clear All
        </button>
      </div>
      <ol className="list-decimal pl-5 w-full space-y-2">
        {tasks.map((t, index) => (
          <li
            key={index}
            className="flex justify-between items-center text-lg py-2 bg-white p-2 rounded shadow"
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
            <div className="flex space-x-2">
              <button
                onClick={() => editTask(index)}
                className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => removeTask(index)}
                className="text-red-500 hover:text-red-700 transition-colors duration-300"
              >
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
