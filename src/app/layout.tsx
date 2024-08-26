import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavLinks } from "@/app/ui/nav-links";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CrowdRender",
  description: "Software for rendering 3d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavLinks />
        {children}
      </body>
    </html>
  );
}
