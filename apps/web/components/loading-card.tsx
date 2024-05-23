import * as React from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface LoadingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  multiple?: number;
}

const LoadingCard = React.forwardRef<HTMLDivElement, LoadingCardProps>(({ className, multiple, ...props }, ref) => {
  const array = new Array(multiple).fill(0);

  return (
    <div ref={ref} className={cn("grid h-full w-full grid-cols-1 gap-4 lg:grid-cols-2", className)} {...props}>
      {multiple ? (
        array.map((_, index) => <Skeleton key={index} className="h-[140px] w-full rounded" />)
      ) : (
        <Skeleton className="h-[140px] w-full rounded" />
      )}
    </div>
  );
});
LoadingCard.displayName = "CardLoading";

export { LoadingCard };
