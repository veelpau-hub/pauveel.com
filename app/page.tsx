import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import IndexStrip from "@/components/IndexStrip";
import Work from "@/components/Work";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import CaseStudy from "@/components/CaseStudy";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <TopBar />
      <Hero />
      <IndexStrip />
      <Work />
      <Marquee />
      <About />
      <Marquee />
      <CaseStudy />
      <Contact />
    </>
  );
}
