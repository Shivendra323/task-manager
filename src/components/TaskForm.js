import React, { useState, useEffect } from "react";

function TaskForm({ onAddTask, editingTask, onUpdateTask, onCancelEdit }) {
  // State variables to store task information
  const [title, setTitle] = useState(""); // Stores the task title
  const [description, setDescription] = useState(""); // Stores the task description
  const [dueDate, setDueDate] = useState(""); // Stores the task due date
  const [priority, setPriority] = useState("Medium"); // Default priority is "Medium"

  // useEffect hook to update form fields if we're editing an existing task
  useEffect(() => {
    if (editingTask) {
      // If editingTask is provided, set form fields to task's current values
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setDueDate(editingTask.dueDate);
      setPriority(editingTask.priority);
    } else {
      // Otherwise, reset form fields to default values
      setTitle("");
      setDescription("");
      setDueDate("");
      setPriority("Medium");
    }
  }, [editingTask]); // Re-run the effect when editingTask changes

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from reloading the page on submit

    // Create an object representing the task data
    const taskData = {
      title,
      description,
      dueDate,
      priority,
      id: editingTask ? editingTask.id : Date.now(), // Use the task's existing ID if editing, otherwise generate a new ID
    };

    // If editing a task, call the update function; otherwise, call the add function
    if (editingTask) {
      onUpdateTask(taskData); // Update the task
    } else {
      onAddTask(taskData); // Add a new task
    }

    // Reset the form after submission
    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("Medium");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Task Title Input */}
      <input 
        type="text" 
        placeholder="Task Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required // Ensure that a title is provided
      />
      
      {/* Task Description Input */}
      <textarea 
        placeholder="Task Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      
      {/* Task Due Date Input */}
      <input 
        type="date" 
        value={dueDate} 
        onChange={(e) => setDueDate(e.target.value)} 
        required // Ensure that a due date is provided
      />
      
      {/* Task Priority Selector */}
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      
      {/* Submit Button */}
      <button type="submit">{editingTask ? "Update Task" : "Add Task"}</button>
      
      {/* Cancel Button (only visible when editing) */}
      {editingTask && <button onClick={onCancelEdit}>Cancel</button>}
    </form>
  );
}

export default TaskForm;
