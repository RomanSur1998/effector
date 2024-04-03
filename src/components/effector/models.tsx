import { createStore, createEvent, sample, createEffect } from "effector";
import { api } from "../../api";
import { IPost } from "../../types";
// import { and, not, or } from "patronum";

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

const getPostFx = createEffect(async () => {
  try {
    const response = await api.getData();
    return response.data;
  } catch (error) {
    throw new Error("Запрос не прошел");
  }
});

const sendPostFx = createEffect(async ($post: IPost) => {
  try {
    const response = await api.sendPost();
    return response;
  } catch (error) {
    throw new Error("Запрос не прошел");
  }
});
export const submit = createEvent();
export const getPostsEvent = createEvent();

sample({ clock: chanegeEmail, target: $email });
sample({ clock: changePassword, target: $password });
sample({ clock: getPostsEvent, target: getPostFx });
sample({ clock: getPostFx.doneData, target: $list });
sample({ clock: submit, target: sendPostFx });

sample({
  clock: setPost,
  fn: (newPostData) => ({
    ...$post.getState(),
    body: newPostData,
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

// const $verified = and($email, $password);
// const $oneof = or($email, $password);
// const $notof = not($email);

// ? PATRONUM
