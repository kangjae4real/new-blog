import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { INDEX_PAGE } from "@/lib/page";

const typographyVariants = cva("", {
  variants: {
    type: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 text-3xl font-semibold tracking-tight",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      p: "leading-7",
      blockquote: "border-l-2 pl-6 italic",
      inlineCode: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
    },
  },
});

export interface TypographyProps<ElementType>
  extends HTMLAttributes<ElementType>,
    VariantProps<typeof typographyVariants> {}

export const H1 = ({ className, children, ...props }: TypographyProps<HTMLHeadingElement>) => {
  return (
    <h1 className={cn(typographyVariants({ type: "h1" }), className)} {...props}>
      {children}
    </h1>
  );
};

export const H2 = ({ className, children, ...props }: TypographyProps<HTMLHeadingElement>) => {
  return (
    <h2 className={cn(typographyVariants({ type: "h2" }), className)} {...props}>
      {children}
    </h2>
  );
};

export const H3 = ({ className, children, ...props }: TypographyProps<HTMLHeadingElement>) => {
  return (
    <h3 className={cn(typographyVariants({ type: "h3" }), className)} {...props}>
      {children}
    </h3>
  );
};

export const H4 = ({ className, children, ...props }: TypographyProps<HTMLHeadingElement>) => {
  return (
    <h3 className={cn(typographyVariants({ type: "h4" }), className)} {...props}>
      {children}
    </h3>
  );
};

export const P = ({ className, children, ...props }: TypographyProps<HTMLParagraphElement>) => {
  return (
    <p className={cn(typographyVariants({ type: "p" }), className)} {...props}>
      {children}
    </p>
  );
};

export const Blockquote = ({ className, children, ...props }: TypographyProps<HTMLQuoteElement>) => {
  return (
    <blockquote className={cn(typographyVariants({ type: "blockquote" }), className)} {...props}>
      {children}
    </blockquote>
  );
};

export const InlineCode = ({ className, children, ...props }: TypographyProps<HTMLBaseElement>) => {
  return (
    <code className={cn(typographyVariants({ type: "inlineCode" }), className)} {...props}>
      {children}
    </code>
  );
};

export const Lead = ({ className, children, ...props }: TypographyProps<HTMLParagraphElement>) => {
  return (
    <p className={cn(typographyVariants({ type: "lead" }), className)} {...props}>
      {children}
    </p>
  );
};

export const Large = ({ className, children, ...props }: TypographyProps<HTMLDivElement>) => {
  return (
    <div className={cn(typographyVariants({ type: "large" }), className)} {...props}>
      {children}
    </div>
  );
};

export const Small = ({ className, children, ...props }: TypographyProps<HTMLBaseElement>) => {
  return (
    <small className={cn(typographyVariants({ type: "small" }), className)} {...props}>
      {children}
    </small>
  );
};

export const Muted = ({ className, children, ...props }: TypographyProps<HTMLParagraphElement>) => {
  return (
    <p className={cn(typographyVariants({ type: "muted" }), className)} {...props}>
      {children}
    </p>
  );
};

export const Logo = ({ className, ...props }: Omit<TypographyProps<HTMLAnchorElement>, "children" | "type">) => {
  return (
    <Link href={INDEX_PAGE} className={className} {...props}>
      <Large>Kangjae.dev</Large>
    </Link>
  );
};
