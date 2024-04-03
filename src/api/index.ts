import axios from "axios";

export const api = {
  getData: async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return response;
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  },
  sendPost: async () => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: "foo",
          body: "bar",
          userId: 1,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    } catch (error) {
      throw new Error("Failed to post data");
    }
  },
  deletePost: async (id: number) => {
    try {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      return response;
    } catch (error) {
      throw new Error("Failed to delete data");
    }
  },
};
