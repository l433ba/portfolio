import { Brain, Rocket, Dna } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="relative px-6 py-28 bg-gradient-to-b from-transparent via-gray-900 to-black text-white overflow-hidden"
    >
      {/* Floating Background Icons */}
      <div className="absolute left-4 top-10 text-indigo-800 opacity-10 text-[100px] animate-spin-slow pointer-events-none">
        <Brain />
      </div>
      <div className="absolute right-10 top-32 text-indigo-800 opacity-10 text-[90px] animate-bounce-slow pointer-events-none">
        <Dna />
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-indigo-700 opacity-10 text-[120px] animate-float pointer-events-none">
        <Rocket />
      </div>

      {/* Main Content Grid with AOS applied */}
      <div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="800"
      >
        {/* Text Section */}
        <div>
          <h2 className="text-4xl font-bold mb-6 border-b-4 inline-block border-indigo-500">
            About Me
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            I'm <span className="text-indigo-400 font-semibold">Laeeba Javed</span>, a Computer Science graduate from Aligarh Muslim University (CGPA 8.6/10), and an incoming M.Sc. student at <span className="text-indigo-400">Universität des Saarlandes</span>.
          </p>
          <p className="text-base md:text-lg text-gray-400 mt-4 leading-relaxed">
            Passionate about <span className="text-indigo-300">Artificial Intelligence</span>, <span className="text-indigo-300">Machine Learning</span>, and <span className="text-indigo-300">Full Stack Development</span>, I merge logic and creativity to design impactful solutions.
          </p>
          <p className="text-base md:text-lg text-gray-400 mt-4 leading-relaxed">
            My mission? To decode problems and build systems that drive innovation and human potential.
          </p>
        </div>

        {/* Animated Bubbles */}
        <div className="relative w-full h-72 rounded-2xl overflow-hidden">
          <div className="absolute top-[15%] left-[15%] animate-classy-float-1">
            <div className="flex flex-col items-center">
              <div className="p-6 rounded-full bg-indigo-600/10 border border-indigo-400 text-indigo-300 text-4xl shadow-xl shadow-indigo-500/30 animate-heartbeat backdrop-blur-sm">
                <Brain />
              </div>
              <p className="mt-2 text-xs text-gray-300">AI & Cognitive Models</p>
            </div>
          </div>

          <div className="absolute top-[35%] left-[45%] animate-classy-float-2">
            <div className="flex flex-col items-center">
              <div className="p-6 rounded-full bg-indigo-600/10 border border-indigo-400 text-indigo-300 text-4xl shadow-xl shadow-indigo-500/30 animate-heartbeat backdrop-blur-sm">
                <Rocket />
              </div>
              <p className="mt-2 text-xs text-gray-300">Tech Exploration</p>
            </div>
          </div>

          <div className="absolute bottom-[10%] right-[15%] animate-classy-float-3">
            <div className="flex flex-col items-center">
              <div className="p-6 rounded-full bg-indigo-600/10 border border-indigo-400 text-indigo-300 text-4xl shadow-xl shadow-indigo-500/30 animate-heartbeat backdrop-blur-sm">
                <Dna />
              </div>
              <p className="mt-2 text-xs text-gray-300">Research</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
