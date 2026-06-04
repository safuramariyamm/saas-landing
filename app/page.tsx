import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import Stats from "./components/sections/Stats";
import About from "./components/sections/About";
import Testimonials from "./components/sections/Testimonials";
import Pricing from "./components/sections/Pricing";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <About />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
