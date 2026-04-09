import { AboutSection } from "@/components/aboutSection/AboutSection";
import { ContactSection } from "@/components/contactSection/ContactSection";
import { HeroSection } from "@/components/heroSection/HeroSection";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ProjectsSection } from "@/components/projectSection/ProjectSection";
import Image from "next/image";

export default function Home() {
  return (
   <main className="flex min-h-screen flex-col bg-[#121212] container mx-auto px-12 py-4">
    <Navbar/> 
    <div className="container">
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
    </div>
   </main>
  );
}
