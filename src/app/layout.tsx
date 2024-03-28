import type { Metadata } from "next";
import { Rubik as FontSans } from "next/font/google";
import { Providers } from "@/components/common/providers";

import "@/styles/globals.css";
import { cn } from "@nextui-org/react";

const font = FontSans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next template",
  description: "Custom next.js template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="main">
      <body className={cn("p-5", font.className)}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
