import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";

const footerVariants = cva("");

interface FooterProps extends HTMLAttributes<HTMLBaseElement>, VariantProps<typeof footerVariants> {}

const Footer = (props: FooterProps) => {
  return (
    <div>
      <span>footer</span>
    </div>
  );
};

export default Footer;
