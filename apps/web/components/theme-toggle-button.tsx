"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import useClient from "@/lib/hooks/use-client";
import { Skeleton } from "@/components/ui/skeleton";

interface ThemeToggleButtonProps {}

const ThemeToggleButton = (props: ThemeToggleButtonProps) => {
  const { theme, setTheme } = useTheme();
  const [ready] = useClient();

  if (!ready) {
    return <Skeleton className="h-[36px] w-[36px] rounded border" />;
  }

  return (
    <Button variant="outline" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

export default ThemeToggleButton;
