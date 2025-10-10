import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Navbar from "@/components/Navbar";
import AuroraBackground from "@/components/AuroraBackground";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Keep animated background only inside Navbar; remove global background */}
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
