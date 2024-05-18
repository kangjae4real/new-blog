import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import Header from "@/components/header";

const pageLayoutVariants = cva("h-full", {
  variants: {
    variant: {
      default: "w-full max-w-[1000px] mx-auto",
      fullWidth: "w-full",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface PageLayoutProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof pageLayoutVariants> {
  hideHeader?: boolean;
}

const PageLayout = ({ className, children, variant, hideHeader = false, ...props }: PageLayoutProps) => {
  return (
    <div className={cn(pageLayoutVariants({ variant }), className)} {...props}>
      {!hideHeader && <Header />}
      <div className="h-full w-full px-4 py-4 lg:px-0">{children}</div>
    </div>
  );
};

export default PageLayout;
