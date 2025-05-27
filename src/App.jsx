import React, { useEffect, useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Publications } from "./components/Publications";
import { Internships } from "./components/Internships";
import { Volunteering } from "./components/Volunteering";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ResearchInterests } from "./components/ResearchInterests";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="relative z-0">
      {/* Global Starfield Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="fixed top-0 left-0 w-full h-full -z-10"
        options={{
          fullScreen: false,
          background: { color: "#000000" },
          particles: {
            number: { value: 120 },
            color: { value: "#ffffff" },
            size: { value: 1.2 },
            opacity: { value: 0.3 },
            move: { enable: true, speed: 0.2 },
          },
        }}
      />

      {/* Content layered above the particles */}
      <Hero />
      <About />
      <Skills />
      <Internships />
      <Projects />
      <Publications />
      <ResearchInterests />
      <Volunteering />
      <Contact />
      <Footer />
    </div>
  );
}
