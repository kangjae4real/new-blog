import { cva, VariantProps } from "class-variance-authority";
import { TailSpin } from "react-loader-spinner";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const loadingVariants = cva("w-full h-full flex", {
  variants: {
    size: {
      sm: "max-w-[100px]",
      md: "max-w-[120px]",
      lg: "max-w-[140px]",
      xl: "max-w-[160px]",
    },
    align: {
      start: "justify-start items-start",
      center: "justify-center items-center",
    },
  },
  defaultVariants: {
    size: "md",
    align: "start",
  },
});

type LoadingVariants = VariantProps<typeof loadingVariants>;

const LOADING_SIZE: Record<NonNullable<LoadingVariants["size"]>, number> = {
  sm: 100,
  md: 120,
  lg: 140,
  xl: 160,
};

interface LoadingProps extends Omit<HTMLAttributes<HTMLDivElement>, "children">, LoadingVariants {
  children?: React.ReactNode;
}

const Loading = ({ size, align, className, children }: LoadingProps) => {
  return (
    <div className={cn(loadingVariants({ size, align }), className)}>
      {children && <div>{children}</div>}
      <TailSpin width={LOADING_SIZE[size ?? "md"]} height={LOADING_SIZE[size ?? "md"]} color="#020817" />
    </div>
  );
};

export default Loading;
