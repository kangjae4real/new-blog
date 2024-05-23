import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes, useMemo } from "react";
import { cn } from "@/lib/utils";
import { P } from "@/components/typography";
import dayjs from "dayjs";

const footerVariants = cva("w-full h-[60px] flex items-center");

interface FooterProps extends Omit<HTMLAttributes<HTMLDivElement>, "children">, VariantProps<typeof footerVariants> {}

const Footer = ({ className, ...props }: FooterProps) => {
  const year = useMemo(() => {
    const date = dayjs();
    return date.year();
  }, []);

  return (
    <div className={cn(footerVariants(), className)} {...props}>
      <P>© {year} by Kangjae Choi. All rights reserved.</P>
    </div>
  );
};

export default Footer;
