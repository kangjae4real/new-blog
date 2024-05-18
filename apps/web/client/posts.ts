import { axios } from "@/client/axios";
import { Post } from "@/types/type.posts";

type GetPosts = (limit?: number) => Promise<Post[]>;

export const getPosts: GetPosts = async (limit = 10) => {
  const { data } = await axios.get<Post[]>("/posts");

  if (!limit) {
    return data;
  }
  return data.filter((_, id) => id < limit);
};
