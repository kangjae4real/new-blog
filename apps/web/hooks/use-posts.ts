import { useQuery } from "@tanstack/react-query";
import { getOnePost, getPosts } from "@/client/posts";

const usePosts = (limit?: number) => {
  return useQuery({
    queryKey: ["posts", limit],
    queryFn: () => getPosts(limit),
  });
};

const usePostDetail = (index: number) => {
  return useQuery({
    queryKey: ["posts", index],
    queryFn: () => getOnePost(index),
  });
};

export { usePosts, usePostDetail };
