import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
});
import "./globals.css";

export const metadata: Metadata = {
  title: "CP Prima Redesign",
  description: "Created with v0",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
