import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
  hideFooter?: boolean;
}

const PageLayout = ({
  className,
  children,
  variant,
  hideHeader = false,
  hideFooter = false,
  ...props
}: PageLayoutProps) => {
  return (
    <div className={cn(pageLayoutVariants({ variant }), className)} {...props}>
      {!hideHeader && <Header />}
      <div className="h-full min-h-[650px] w-full px-4 py-4 lg:px-0">{children}</div>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default PageLayout;
