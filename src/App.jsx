import React, { useEffect } from "react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Publications } from "./components/Publications";
import { Internships } from "./components/Internships";
import { Volunteering } from "./components/Volunteering";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
  <div>
    <Hero />
    <About />
    <Skills />
    <Internships />
    <Projects />
    <Publications />
    <Volunteering />
    <Contact />
    <Footer />
  </div>
);


}
