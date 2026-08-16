import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyFogrod from "../components/WhyFogrod";
import Applications from "../components/Applications";
import ProductRange from "../components/ProductRange";
import TechnicalSupport from "../components/TechnicalSupport";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyFogrod />
      <Applications />
      <ProductRange />
      <TechnicalSupport />
      <Footer />
    </>
  );
}