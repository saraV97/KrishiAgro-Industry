import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Krishiagro | Enhance Crop Yields with Natural Fertilizers",
  description:
    "Discover top-quality fertilizers and soil enhancers at Krishiagro. Boost your crop yields and promote soil health with our premium products. Shop now.",
  metadataBase: new URL("https://krishiagro.in"),
  applicationName: "Kishiagro",
  keywords: [
    "Organic fertilizers",
    "fertilizers",
    "fertilizers in namakkal",
    "fertilizers near namakkal",
    "agro industry",
    "vermicompost",
    "compost",
    "organic potas",
    "seaweed",
    "Namakkal",
    "Organic",
    "Chemicalfree fertilizers",
    "Soil enhancers",
    "Crop nutrition",
    "Plant nutrients",
    "Agricultural supplements",
    "agriculture",
    "farming",
    "Natural fertilizers",
    "Garden fertilizers",
    "Farm fertilizers",
    "Eco-friendly",
    "Eco-friendly fertilizers",
    "Krishi agro industry",
    "Sustainable farming solutions",
    "Soil health products",
    "Crop yield boosters",
    "Plant growth stimulants",
    "krishiagro",
  ],
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
  },
  authors: [{ name: "Sara" }],
  creator: "Sara",
  alternates: {
    canonical: "https://krishiagro.in",
  },
  openGraph: {
    title: "Krishiagro | Enhance Crop Yields with Natural Fertilizers",
    description:
      "Discover top-quality fertilizers and soil enhancers at Krishiagro. Boost your crop yields and promote soil health with our premium products. Shop now.",
    type: "website",
    images:
      "https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710931955/Krishi%20Compressed/etejm6lsgzf45m3mc1tw.png",
    url: "https://krishiagro.in",
  },
  twitter: {
    title: "Krishiagro | Enhance Crop Yields with Natural Fertilizers",
    description:
      "Discover top-quality fertilizers and soil enhancers at Krishiagro. Boost your crop yields and promote soil health with our premium products. Shop now.",
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
