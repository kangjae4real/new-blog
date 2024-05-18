import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { HTMLAttributes } from "react";
import { Post } from "@/types/type.posts";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { getPostDetailPage } from "@/lib/page";

interface PostCardProps extends Omit<HTMLAttributes<HTMLDivElement>, "children" | "id" | "content" | "title">, Post {
  contentEllipsis?: boolean;
}

const PostCard = ({ className, id, title, content, createdAt, contentEllipsis = false }: PostCardProps) => {
  const { push } = useRouter();

  return (
    <Card key={id} className={cn(className)} onClick={() => push(getPostDetailPage(id))}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{dayjs(createdAt).format("YYYY-MM-DD")}</CardDescription>
      </CardHeader>
      <CardContent className={cn(contentEllipsis && "w-full overflow-hidden text-ellipsis whitespace-nowrap")}>
        {content}
      </CardContent>
    </Card>
  );
};

export default PostCard;
