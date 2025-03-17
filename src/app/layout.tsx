import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Road to Next Course",
  description: "Road to Next Course",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main
          className="min-h-screen flex-1
            overflow-y-auto overflow-x-hidden
            py-24 px-8
            bg-secondary/20
            flex flex-col"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
