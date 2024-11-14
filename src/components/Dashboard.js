import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function Dashboard() {
  // Load tasks from localStorage on initialization
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [editingTask, setEditingTask] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState({
    priority: "All",
    completed: "All",
  });

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, { ...task, completed: false }]);

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    setEditingTask(null);
  };

  const deleteTask = (taskId) => setTasks(tasks.filter((task) => task.id !== taskId));

  const editTask = (task) => setEditingTask(task);

  const cancelEdit = () => setEditingTask(null);

  const completeTask = (taskId) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, completed: true } : task)));
  };

  const currentDate = new Date();

  const priorityOrder = { High: 1, Medium: 2, Low: 3 };

  const sortTasksByPriority = (taskList) =>
    taskList.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  const filteredTasks = tasks
    .filter((task) => task.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                     task.description.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((task) => filter.priority === "All" || task.priority === filter.priority)
    .filter((task) => filter.completed === "All" || (filter.completed === "Completed" ? task.completed : !task.completed));

  const upcomingTasks = sortTasksByPriority(
    filteredTasks.filter((task) => !task.completed && new Date(task.dueDate) >= currentDate)
  );

  const overdueTasks = sortTasksByPriority(
    filteredTasks.filter((task) => !task.completed && new Date(task.dueDate) < currentDate)
  );

  const completedTasks = sortTasksByPriority(filteredTasks.filter((task) => task.completed));

  return (
    <div>
      <h1>Task Manager</h1>
      <div>
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select onChange={(e) => setFilter({ ...filter, priority: e.target.value })}>
          <option value="All">All Priorities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <select onChange={(e) => setFilter({ ...filter, completed: e.target.value })}>
          <option value="All">All Tasks</option>
          <option value="Completed">Completed</option>
          <option value="Incomplete">Incomplete</option>
        </select>
      </div>

      <TaskForm
        onAddTask={addTask}
        editingTask={editingTask}
        onUpdateTask={updateTask}
        onCancelEdit={cancelEdit}
      />

      <div className="task-list">
        <div className="task-column">
          <h2>Upcoming Tasks</h2>
          <TaskList tasks={upcomingTasks} onEditTask={editTask} onDeleteTask={deleteTask} onCompleteTask={completeTask} />
        </div>

        <div className="task-column">
          <h2>Overdue Tasks</h2>
          <TaskList tasks={overdueTasks} onEditTask={editTask} onDeleteTask={deleteTask} onCompleteTask={completeTask} />
        </div>

        <div className="task-column">
          <h2>Completed Tasks</h2>
          <TaskList tasks={completedTasks} onEditTask={editTask} onDeleteTask={deleteTask} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
