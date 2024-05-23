import { axios } from "@/client/axios";
import { Post } from "@/types/type.posts";

type GetPosts = (limit?: number) => Promise<Post[]>;
type GetOnePost = (index: number) => Promise<Post>;

const getPosts: GetPosts = async (limit = 10) => {
  const { data } = await axios.get<Post[]>("/posts");

  if (!limit) {
    return data;
  }
  return data.filter((_, id) => id < limit);
};

const getOnePost: GetOnePost = async (index) => {
  const { data: post } = await axios.get<Post>(`/posts/${index}`);
  return post;
};

export { getPosts, getOnePost };
