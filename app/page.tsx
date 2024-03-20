import About from "@/components/About";
import Choose from "@/components/Choose";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Review from "@/components/Review";
import ScrollUp from "@/components/scrollup";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Choose />
      <Contact />
      <Review />
      <ScrollUp />
    </>
  );
}
