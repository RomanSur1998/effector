import { createStore, createEvent, sample, createEffect } from "effector";
import { api } from "../../api";

export const chanegeEmail = createEvent<string>();

export const changePassword = createEvent<string>();
export const submitForm = createEvent<string>();
export const $email = createStore("1");
export const $password = createStore("2");
export const $list = createStore([]);
export const $error = createStore("");

const getPost = createEffect(async () => {
  try {
    const response = await api.getData();
    return response.data;
  } catch (error) {
    throw new Error("Запрос не прошел");
  }
});
export const submit = createEvent();

sample({ clock: chanegeEmail, target: $email });
sample({ clock: changePassword, target: $password });
sample({ clock: submit, target: getPost });
sample({ clock: getPost.doneData, target: $list });

getPost.done.watch(({ result }) => {
  console.log(result);
});
