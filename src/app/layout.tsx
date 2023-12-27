import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Logo from "@/components/Logo";
import Sidemenu from "@/components/Sidemenu";

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
        <main className="flex h-screen min-h-screen justify-between">
          <div className="sidebar">
            <Logo className="text-white" />
            <Sidemenu />
          </div>
          <div className="flex-1 h-full p-6">{children}</div>
        </main>
      </body>
    </html>
  );
}
