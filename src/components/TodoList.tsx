import React from "react";
import { $post, setPost, submit } from "./effector/models";
import { useUnit } from "effector-react";

export const TodoList = () => {
  // const [todos, setTodos] = useState<string[]>([]);
  // const [newTodo, setNewTodo] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPost(event.target.value);
  }
  const [post] = useUnit([$post]);
  console.log(post);

  function addTodo(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submit(post);
  }

  return (
    <div className="container">
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Запишите  что хотите отравить"
          value={post.body}
          onChange={handleInputChange}
        />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
};
