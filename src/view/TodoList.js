import React, { useState } from 'react';
import './TodoList.css';
function TodoList () {
  const [todos, setTodos] = useState([
    { id: 1, name: '任务1' },
    { id: 2, name: '任务2' },
    { id: 3, name: '任务3' },
  ]);
  const [draggedTodo, setDraggedTodo] = useState(null);
  const [draggingOverTodo, setDraggingOverTodo] = useState(null);
  const handleDragStart = (event, todo) => {
    setDraggedTodo(todo);
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/html", event.target.parentNode);
    event.dataTransfer.setDragImage(event.target.parentNode, 20, 20);
  };
  const handleDragOver = (event, todo) => {
    event.preventDefault();
    setDraggingOverTodo(todo);
  };
  const handleDrop = (event, todo) => {
    event.preventDefault();
    const draggedTodoIndex = todos.indexOf(draggedTodo);
    const droppedTodoIndex = todos.indexOf(todo);
    const newTodos = [...todos];
    newTodos.splice(draggedTodoIndex, 1);
    newTodos.splice(droppedTodoIndex, 0, draggedTodo);
    setTodos(newTodos);
    setDraggingOverTodo(null);
  };
  const getTodoStyle = (todo) => {
    if (todo === draggedTodo) {
      return { opacity: 0.5 };
    }
    if (todo === draggingOverTodo) {
      return { backgroundColor: '#eee' };
    }
    return {};
  };
  return (
    <div className="TodoList">
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            draggable
            onDragStart={(event) => handleDragStart(event, todo)}
            onDragOver={(event) => handleDragOver(event, todo)}
            onDrop={(event) => handleDrop(event, todo)}
            style={getTodoStyle(todo)}
          >
            {todo.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;