import type { Metadata } from "next";
import {
  Inter_Tight as FontBlock,
  Inter as FontSans,
  Roboto_Flex,
} from "next/font/google";

import { MonolothicProvider } from "@/components/providers/monolithic-provider";

import { cn } from "@/lib/utils";
import { metadata as meta } from "@/site.config";
import "@/styles/globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "variable",
});

const fontBlock = FontBlock({
  subsets: ["latin"],
  variable: "--font-block",
  weight: "variable",
});

const fontFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-flex",
  weight: "variable",
});

export const metadata: Metadata = {
  ...meta,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground font-sans antialiased",
          fontSans.variable,
          fontBlock.variable,
          fontFlex.variable
        )}
      >
        <MonolothicProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={[
            "system",
            "light",
            "dark",
            "blue",
            "blue-dark",
            "green",
            "green-dark",
            "blue-green",
            "blue-green-dark",
            "plum",
            "plum-dark",
          ]}
        >
          {children}
        </MonolothicProvider>
      </body>
    </html>
  );
}
