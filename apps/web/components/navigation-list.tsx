"use client";

import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import useClient from "@/lib/hooks/use-client";
import { Skeleton } from "@/components/ui/skeleton";
import { Pages } from "@/lib/page";

const navigationListVariants = cva("");

export interface NavigationItem {
  href: Pages;
  label: string;
}

const NAVIGATION_LIST: NavigationItem[] = [
  { href: "/resume", label: "Resume" },
  { href: "/posts", label: "Posts" },
];

export interface NavigationListProps
  extends Omit<HTMLAttributes<HTMLBaseElement>, "children">,
    VariantProps<typeof navigationListVariants> {}

const NavigationList = ({ className }: NavigationListProps) => {
  const triggerStyle = navigationMenuTriggerStyle();
  const [ready] = useClient();

  if (!ready) {
    return <Skeleton className="h-[36px] w-[158px] rounded border" />;
  }

  return (
    <NavigationMenu className={cn(navigationListVariants(), className)}>
      <NavigationMenuList>
        {NAVIGATION_LIST.map(({ href, label }, index) => (
          <NavigationMenuItem key={index}>
            <Link href={href}>
              <NavigationMenuLink className={triggerStyle}>{label}</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationList;
