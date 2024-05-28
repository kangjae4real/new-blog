"use client";

import PageLayout from "@/components/layouts/page-layout";
import { usePosts } from "@/hooks/use-posts";
import { useMemo } from "react";
import List from "@/components/list";
import PostCard from "@/components/post-card";

export default function PostsPage() {
  const { isLoading, data: posts, error } = usePosts();

  const content = useMemo(() => {
    if (error) {
      return (
        <>
          <p>API 요청 중 에러가 발생했습니다.</p>
          <p>{error.message}</p>
        </>
      );
    }

    return (
      <List
        className="mt-6"
        listClassname="grid grid-cols-1 gap-4 lg:grid-cols-2"
        itemClassname="cursor-pointer"
        multiple={8}
        list={posts}
        loading={isLoading || !posts}
        render={(post) => <PostCard contentEllipsis {...post} />}
      />
    );
  }, [isLoading, posts, error]);

  return <PageLayout>{content}</PageLayout>;
}
