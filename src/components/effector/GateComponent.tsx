import { createGate, useGate, useList } from "effector-react";
import { $list } from "./models";
import { TodoCard } from "../TodoCard";

type Props = {};

export const NewGate = createGate();

export const GateComponent = (props: Props) => {
  const newList = useList($list, ({ title }) => <TodoCard title={title} />);
  useGate(NewGate, props);
  return (
    <div>
      <ul>{newList}</ul>
    </div>
  );
};
