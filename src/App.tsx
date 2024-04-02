import { TodoList } from "./components/TodoList";
import { sample } from "effector";

import { useGate, useUnit } from "effector-react";
import { GateComponent, NewGate } from "./components/effector/GateComponent";
import { $list, submit } from "./components/effector/models";

type Props = {};

sample({
  clock: NewGate.open,
  traget: submit(),
});

export function App({}: Props) {
  useGate(NewGate);
  const [list] = useUnit([$list]);
  console.log(list, "List");

  return (
    <div>
      <TodoList />

      <GateComponent />
    </div>
  );
}
