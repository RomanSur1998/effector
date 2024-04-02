import { useState } from "react";

type TodoCardProps = {
  todo: string;
  delete(name: string): void;
};

export const TodoCard = ({ todo, delete: deleteTodo }: TodoCardProps) => {
  const [isDone, setIsDone] = useState(false);
  console.log(isDone, "id done");
  return (
    <li className="card ">
      <p className={isDone ? "done" : ""}>TodoCard {todo}</p>
      <button
        className="del_button "
        onClick={() => setIsDone((prev) => !prev)}
      >
        Donne
      </button>
      <button className="del_button" onClick={() => deleteTodo(todo)}>
        Delete
      </button>
    </li>
  );
};
