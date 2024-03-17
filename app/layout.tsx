import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollUp from "@/components/scrollup";

export const metadata: Metadata = {
  title: "KrishiAgro",
  description: "Empowering Agriculture with Sustainable Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
        <ScrollUp />
      </body>
    </html>
  );
}
