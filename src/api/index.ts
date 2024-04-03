import axios from "axios";
import { IPost } from "../types";

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
  sendPost: async (data: IPost) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        data,
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
