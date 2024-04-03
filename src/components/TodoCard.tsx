// import { useState } from "react";/

type TodoCardProps = {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
};

export const TodoCard = ({ title }: TodoCardProps) => {
  return (
    <li className="card ">
      <p>TodoCard {title}</p>
      {/* <button
        className="del_button "
        onClick={() => setIsDone((prev) => !prev)}
      >
        Donne
      </button> */}
      {/* <button className="del_button" onClick={() => deleteTodo(todo)}>
        Delete
      </button> */}
    </li>
  );
};
