import { createStore, createEvent, sample, createEffect } from "effector";
import { api } from "../../api";
import { IPost } from "../../types";
import { debounce } from "patronum";
import { either } from "patronum";
import { and, not, or } from "patronum";

export const chanegeEmail = createEvent<string>();
export const changePassword = createEvent<string>();
export const submitForm = createEvent<string>();

export const setPost = createEvent<string>();

export const $email = createStore("1");
export const $password = createStore("2");

export const $list = createStore([]);
export const $post = createStore<IPost>({
  title: "",
  body: "",
  userId: 1,
});

export const $id = createStore<number>(0);
const getPostFx = createEffect(api.getData);
const sendPostFx = createEffect(api.sendPost);

const deletePost = createEffect(api.deletePost);
export const setId = createEvent<number>();
export const submit = createEvent<IPost>();
export const getPostsEvent = createEvent();

sample({
  clock: chanegeEmail,
  target: $email,
});
sample({ clock: changePassword, target: $password });
sample({ clock: getPostsEvent, target: getPostFx });
sample({
  clock: getPostFx.doneData,
  fn: (clock) => {
    return clock.data;
  },
  target: $list,
});
sample({ clock: submit, target: sendPostFx });
sample({ clock: setId, target: $id });
sample({ clock: $id, target: deletePost });

sample({
  source: $post,
  clock: setPost,
  fn: (source, clock) => ({
    ...source,
    body: clock,
  }),
  target: $post,
});

// getPostFx.done.watch(({ result }) => {
//   console.log(result);
// });

// getPostFx.done.watch(({ result }) => {
//   console.log(result);
// });

// ? PATRONUM

const $verified = and($email, $password);
const $oneof = or($email, $password);
const $notof = not($email);

const newDeb = debounce({
  source: $id,
  timeout: 500,
});

sample({ clock: newDeb, target: $id });

// ? PATRONUM
