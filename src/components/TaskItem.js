import React from "react";

function TaskItem({ task, onEditTask, onDeleteTask }) {
  return (
    <div className={`task-item ${task.priority.toLowerCase()}`}>
      {/* Task Title */}
      <h3>{task.title}</h3>

      {/* Task Description */}
      <p>{task.description}</p>

      {/* Task Due Date */}
      <p>Due: {task.dueDate}</p>

      {/* Task Priority */}
      <p>Priority: {task.priority}</p>

      {/* Edit Button - Trigger the onEditTask function with the current task */}
      <button onClick={() => onEditTask(task)}>Edit</button>

      {/* Delete Button - Trigger the onDeleteTask function with the current task's ID */}
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;
