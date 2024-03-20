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
{
  /* <meta name="title" content="Enhance Crop Yields with Natural Fertilizers | Krishiagro">
<meta name="description" content="Discover top-quality fertilizers and soil enhancers at Krishiagro. Boost your crop yields and promote soil health with our premium products. Shop now.">
<meta name="keywords" content="Organic fertilizersChemical-free fertilizersSoil enhancersCrop nutritionPlant nutrientsAgricultural supplementsNatural fertilizersGarden fertilizersFarm fertilizersEco-friendly fertilizersSustainable farming solutionsSoil health productsCrop yield boostersPlant growth stimulantsSoil amendments">
<meta name="robots" content="index, follow">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="language" content="English">
<meta name="revisit-after" content="30 days"></meta>

<title>Enhance Crop Yields with Natural Fertilizers | Krishiagro</title>
<meta name="title" content="Enhance Crop Yields with Natural Fertilizers | Krishiagro" />
<meta name="description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://krishiagro.in/" />
<meta property="og:title" content="Enhance Crop Yields with Natural Fertilizers | Krishiagro" />
<meta property="og:description" content="Discover top-quality fertilizers and soil enhancers at Krishiagro. Boost your crop yields and promote soil health with our premium products. Shop now." />
<meta property="og:image" content="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710929691/Krishi%20Compressed/ismlz5heffdlotfvselk.webp" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://krishiagro.in/" />
<meta property="twitter:title" content="Enhance Crop Yields with Natural Fertilizers | Krishiagro" />
<meta property="twitter:description" content="Discover top-quality fertilizers and soil enhancers at Krishiagro. Boost your crop yields and promote soil health with our premium products. Shop now." />
<meta property="twitter:image" content="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710929691/Krishi%20Compressed/ismlz5heffdlotfvselk.webp" /> */
}
