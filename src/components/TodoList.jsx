import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleChange(e) {
    setNewTask(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (newTask.trim() === "") return;
    const newItem = { id: Date.now(), text: newTask };
    setTasks([...tasks, newItem]);
    setNewTask("");
  }

  function handleDelete(id) {
    const updatedTasks = tasks.filter((t) => t.id !== id);
    setTasks(updatedTasks);
  }

  return (
    <div className="flex flex-col items-center text-gray-800 max-w-[500px] h-100 border-1 pt-10">
      <h1 className="text-3xl font-bold mb-4">To-Do List</h1>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input
          name="task"
          type="text"
          placeholder="Add new task"
          value={newTask}
          onChange={handleChange}
          className="border rounded px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </form>

      <ul className="space-y-2 w-72">
        {tasks.map((t) => (
          <li
            key={t.id}
            className="bg-white border-1 px-4 py-2 text-gray-800 flex justify-between items-center"
          >
            <span>{t.text}</span>
            <button
              onClick={() => handleDelete(t.id)}
              className="text-red-500 hover:text-red-700 font-semibold"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
