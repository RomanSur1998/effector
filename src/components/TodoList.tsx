import React, { useState } from "react";
import { TodoCard } from "./TodoCard";

export const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTodo(event.target.value);
  }

  function addTodo(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!newTodo.trim()) {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo("");
    }
  }

  function deleteTodo(name: string) {
    setTodos(todos.filter((todo) => todo !== name));
  }

  return (
    <div className="container">
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Запишите  что хотите сделать"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button type="submit">Добавить</button>
      </form>
      <ul className="list_Container">
        {todos.map((todo, index) => (
          <TodoCard todo={todo} key={index} delete={deleteTodo} />
        ))}
      </ul>
    </div>
  );
};
