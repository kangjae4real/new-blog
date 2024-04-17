import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import ThemeToggleButton from "@/components/theme-toggle-button";
import { Large } from "@/components/typography";
import NavigationList from "@/components/navigation-list";

const headerVariants = cva("flex items-center justify-between w-full border-b px-4 lg:px-0", {
  variants: {
    size: {
      sm: "h-[56px]",
      md: "h-[60px]",
      lg: "h-[64px]",
      xl: "h-[68px]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface HeaderProps extends Omit<HTMLAttributes<HTMLBaseElement>, "children">, VariantProps<typeof headerVariants> {}

const Header = ({ className, size, ...props }: HeaderProps) => {
  return (
    <header className={cn(headerVariants({ size }), className)} {...props}>
      <div>
        <Large>Kangjae.dev</Large>
      </div>

      <div className="flex gap-x-5">
        <NavigationList />
        <ThemeToggleButton />
      </div>
    </header>
  );
};

export default Header;
