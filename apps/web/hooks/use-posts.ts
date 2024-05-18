import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/client/posts";

const usePosts = (limit?: number) => {
  return useQuery({
    queryKey: ["posts", limit],
    queryFn: () => getPosts(limit),
  });
};

export default usePosts;
