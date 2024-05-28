import * as React from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { useMemo } from "react";

export interface LoadingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  withGrid?: boolean;
  multiple?: number;
  cardClassname?: string;
}

const LoadingCard = React.forwardRef<HTMLDivElement, LoadingCardProps>(
  ({ className, withGrid = false, multiple, cardClassname, ...props }, ref) => {
    const array = new Array(multiple).fill(0);

    const content = useMemo(() => {
      return multiple ? (
        array.map((_, index) => <Skeleton key={index} className={cn("h-[140px] w-full rounded", cardClassname)} />)
      ) : (
        <Skeleton className={cn("h-[140px] w-full rounded", cardClassname)} />
      );
    }, [multiple]);

    if (!withGrid) {
      return content;
    }

    return (
      <div ref={ref} className={cn("grid h-full w-full grid-cols-1 gap-4 lg:grid-cols-2", className)} {...props}>
        {content}
      </div>
    );
  },
);
LoadingCard.displayName = "CardLoading";

export { LoadingCard };
