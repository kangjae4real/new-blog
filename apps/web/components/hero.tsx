import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { H1, H2, Large } from "@/components/typography";
import { cn } from "@/lib/utils";

const heroVariants = cva("py-4");

interface HeroProps extends Omit<HTMLAttributes<HTMLDivElement>, "children">, VariantProps<typeof heroVariants> {}

const Hero = ({ className, ...props }: HeroProps) => {
  return (
    <div className={cn(heroVariants(), className)} {...props}>
      <H1 className="mb-2">안녕하세요!</H1>
      <H1>프론트엔드 개발자 최강재입니다. 👋</H1>
    </div>
  );
};

export default Hero;
