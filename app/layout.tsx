import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Krishiagro | Enhance Crop Yields with Natural Fertilizers",
  description:
    "Discover top-quality fertilizers and soil enhancers at Krishiagro. Boost your crop yields and promote soil health with our premium products. Shop now.",
  metadataBase: new URL("https://krishiagro.in"),
  openGraph: {
    images:
      "https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710931955/Krishi%20Compressed/etejm6lsgzf45m3mc1tw.png",
  },
  twitter: {
    images:
      "https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710931955/Krishi%20Compressed/etejm6lsgzf45m3mc1tw.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
