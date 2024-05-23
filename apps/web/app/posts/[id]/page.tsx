"use client";

import PageLayout from "@/components/layouts/page-layout";
import { usePostDetail } from "@/hooks/use-posts";

interface PostDetailPageProps {
  params: {
    id: string;
  };
}

export default function PostDetailPage({ params: { id } }: PostDetailPageProps) {
  const { data, isLoading, error } = usePostDetail(parseInt(id));

  console.log("data: ", data);

  return (
    <PageLayout>
      <span>post detail page</span>
    </PageLayout>
  );
}
