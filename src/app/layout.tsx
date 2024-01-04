import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Logo from "@/components/Logo";
import Sidemenu from "@/components/Sidemenu";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Stock | Stock Management System",
  description: "Stock Management System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen justify-between">
          <Sidemenu />
          <div className="flex-1 h-full p-6">{children}</div>
          <Toaster />
        </main>
      </body>
    </html>
  );
}
