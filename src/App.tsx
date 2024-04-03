import { TodoList } from "./components/TodoList";
import { sample } from "effector";

import { useGate, useUnit } from "effector-react";
import { GateComponent, NewGate } from "./components/effector/GateComponent";
import { $list, getPostsEvent } from "./components/effector/models";

type Props = {};

sample({
  clock: NewGate.open,
  traget: getPostsEvent(),
});

export function App({}: Props) {
  useGate(NewGate);
  // const [list] = useUnit([$list]);

  return (
    <div>
      <TodoList />
      <GateComponent />
    </div>
  );
}
