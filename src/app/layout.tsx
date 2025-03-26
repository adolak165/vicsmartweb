'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith('/dashboard');

  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        {!isDashboard && <Header />}
        {children}
        {!isDashboard && <Footer />}
      </body>
    </html>
  );
}
