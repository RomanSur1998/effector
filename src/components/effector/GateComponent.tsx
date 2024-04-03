import { createGate, useGate, useList } from "effector-react";
import { $list } from "./models";
import { TodoCard } from "../TodoCard";

type Props = {};

export const NewGate = createGate();

export const GateComponent = (props: Props) => {
  const newList = useList($list, ({ title, id }) => (
    <TodoCard title={title} id={id} />
    // <li className="card ">{title}</li>
  ));
  useGate(NewGate, props);
  return (
    <div>
      <ul>{newList}</ul>
    </div>
  );
};
