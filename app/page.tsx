import About from "@/components/About";
import Choose from "@/components/Choose";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Review from "@/components/Review";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Choose />
      <Contact />
      <Review />
    </>
  );
}
