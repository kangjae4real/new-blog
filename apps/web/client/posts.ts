import { axios } from "@/client/axios";

export const getPosts = async () => {
  return await axios.get("/posts");
};
