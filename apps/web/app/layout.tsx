import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { cn } from "@/lib/utils";

import "@/styles/globals.css";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Kangjae Choi - Blog",
  description: "Kangjae Choi - Blog",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body className={cn("bg-background min-h-screen font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
