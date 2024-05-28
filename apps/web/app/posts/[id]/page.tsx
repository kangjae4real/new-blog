"use client";

import PageLayout from "@/components/layouts/page-layout";
import { usePostDetail } from "@/hooks/use-posts";
import { H1, P, Small } from "@/components/typography";
import { LoadingCard } from "@/components/loading-card";
import { useMemo } from "react";
import dayjs from "dayjs";

interface PostDetailPageProps {
  params: {
    id: string;
  };
}

export default function PostDetailPage({ params: { id } }: PostDetailPageProps) {
  const { data: post, isLoading, error } = usePostDetail(parseInt(id));

  const content = useMemo(() => {
    if (error) {
      return (
        <>
          <p>API 요청 중 에러가 발생했습니다.</p>
          <p>{error.message}</p>
        </>
      );
    }
    if (isLoading || !post) {
      return <LoadingCard cardClassname="h-[350px]" />;
    }

    const { title, content, writer, createdAt, updatedAt } = post;

    return (
      <div className="flex w-full flex-col justify-start gap-4">
        <div>
          <H1>{title}</H1>
        </div>
        <div className="">
          <Small>{dayjs(updatedAt ?? createdAt).format("YYYY-MM-DD")}</Small>
        </div>
        <div>
          <P>{content}</P>
        </div>
      </div>
    );
  }, [isLoading, post, error]);

  return (
    <PageLayout>
      <div className="flex items-center justify-center">{content}</div>
    </PageLayout>
  );
}
