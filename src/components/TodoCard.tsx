// import { useState } from "react";/

import { setId } from "./effector/models";

type TodoCardProps = {
  userId?: number;
  id: number;
  title: string;
  body?: string;
};

function delelPost(id: number) {
  setId(id);
}

export const TodoCard = ({ title, id }: TodoCardProps) => {
  return (
    <li className="card ">
      <p>TodoCard {title}</p>
      {/* <button
        className="del_button "
        onClick={() => setIsDone((prev) => !prev)}
      >
        Donne
      </button> */}
      <button
        className="del_button"
        onClick={() => {
          delelPost(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};
