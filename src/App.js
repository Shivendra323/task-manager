import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
// import TaskForm from "./components/TaskForm";
import "./styles.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({ priority: "", status: "" });

  // const addTask = (task) => setTasks([...tasks, task]);

  const editTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="App">
      <Dashboard
        tasks={tasks}
        onEditTask={editTask}
        onDeleteTask={deleteTask}
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  );
}

export default App;
