import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 py-24 bg-gradient-to-b from-black/80 via-gray-900/80 to-black/90 text-white overflow-hidden"
      id="hero"
    >
      {/* Subtle Sparkle Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-indigo-900/10 to-transparent opacity-20 pointer-events-none"></div>

      <div className="z-10" data-aos="fade-up">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-md">
          Laeeba Javed
        </h1>
        <p className="text-xl md:text-2xl mb-6 text-indigo-300">
          AI Researcher • ML Enthusiast • Full Stack Developer
        </p>
        <p className="text-base md:text-lg max-w-xl mx-auto text-gray-300">
          Incoming M.Sc. Computer Science @ Universität des Saarlandes
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 space-x-4">
          <a href="mailto:laeebajaved@gmail.com">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-2 rounded-xl inline-flex items-center transition-shadow shadow-lg hover:shadow-indigo-500/30">
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </a>
          <a
            href="https://github.com/l433ba"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border border-gray-400 hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded-xl transition-all">
              GitHub
            </button>
          </a>
        </div>

        {/* Scroll-down indicator */}
        <div className="mt-24 animate-bounce text-gray-400 text-sm">
          ▼ Scroll Down
        </div>
      </div>
    </section>
  );
}
