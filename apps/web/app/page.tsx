"use client";

import PageLayout from "@/components/layouts/page-layout";
import Hero from "@/components/hero";
import List from "@/components/list";
import usePosts from "@/hooks/use-posts";
import PostCard from "@/components/post-card";
import { useMemo } from "react";

export default function IndexPage() {
  const { isLoading, data: posts, error } = usePosts(10);

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
        className="mt-6 cursor-pointer"
        listClassname="grid grid-cols-1 gap-4 lg:grid-cols-2"
        list={posts}
        loading={isLoading || !posts}
        render={(post) => <PostCard contentEllipsis {...post} />}
      />
    );
  }, [isLoading, posts, error]);

  return (
    <PageLayout>
      <Hero size="sm" />
      {content}
    </PageLayout>
  );
}
