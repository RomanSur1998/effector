import { createGate, useGate, useList } from "effector-react";
import { $list } from "./models";

type Props = {};

export const NewGate = createGate();

export const GateComponent = (props: Props) => {
  const newList = useList($list, ({ title }) => <li>{title}</li>);
  useGate(NewGate, props);
  return (
    <div>
      <ul>{newList}</ul>
    </div>
  );
};
