import React, { useState } from "react";

export default function Todo() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = () => {
    if (task.trim() !== "") {
      const newTask = {
        id: Date.now(), // Generate a unique ID for the task
        text: task
      };
      setTodoList([...todoList, newTask]);
      setTask("");
    }
  };

  const handleDelete = (taskId) => {
    setTodoList(todoList.filter((task) => task.id !== taskId));
  };

  return (
    <>
      <h1>Todo List</h1>
      <input
        value={task}
        onChange={handleChange}
        placeholder="What is the task today?"
      />

      <button onClick={handleSubmit}>Add Task</button>
      <div>
        {todoList.map((todo) => (
          <div key={todo.id}>
            <p>{todo.text}</p>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}
