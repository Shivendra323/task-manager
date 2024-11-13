import React from 'react';

function TaskList({ tasks, onEditTask, onDeleteTask, onCompleteTask }) {
  return (
    <div>
      {/* If there are no tasks, display a message */}
      {tasks.length === 0 ? (
        <p>No tasks to show</p>
      ) : (
        // Iterate over the tasks array and display each task
        tasks.map(task => (
          <div key={task.id}>
            {/* Task Title */}
            <h3>{task.title}</h3>

            {/* Task Description */}
            <p>{task.description}</p>

            {/* Task Due Date */}
            <p>Due Date: {task.dueDate}</p>

            {/* Task Priority */}
            <p>Priority: {task.priority}</p>

            {/* Edit Button - Trigger the onEditTask function with the current task */}
            <button onClick={() => onEditTask(task)}>Edit</button>

            {/* Delete Button - Trigger the onDeleteTask function with the current task's ID */}
            <button onClick={() => onDeleteTask(task.id)}>Delete</button>

            {/* Complete Button - Show this button only if the task is not yet completed */}
            {!task.completed && (
              <button onClick={() => onCompleteTask(task.id)}>Mark as Completed</button>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;
