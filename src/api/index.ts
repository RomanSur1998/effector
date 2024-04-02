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
};
