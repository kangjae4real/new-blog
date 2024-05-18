import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { H1 } from "@/components/typography";
import { cn } from "@/lib/utils";

const heroVariants = cva("", {
  variants: {
    size: {
      sm: "py-2",
      md: "py-4",
      lg: "py-6",
      xl: "py-8",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface HeroProps extends Omit<HTMLAttributes<HTMLDivElement>, "children">, VariantProps<typeof heroVariants> {}

const Hero = ({ size, className, ...props }: HeroProps) => {
  return (
    <div className={cn(heroVariants({ size }), className)} {...props}>
      <H1 className="mb-2">안녕하세요!</H1>
      <H1>프론트엔드 개발자 최강재입니다. 👋</H1>
    </div>
  );
};

export default Hero;
