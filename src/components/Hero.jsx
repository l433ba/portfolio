import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-12 bg-gradient-to-br from-black via-gray-900 to-indigo-900 text-white">
      <div data-aos="fade-up">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">Laeeba Javed</h1>
        <p className="text-xl md:text-2xl mb-6 text-indigo-300">
          AI Researcher • Full Stack Developer • ML Enthusiast
        </p>
        <p className="text-base md:text-lg max-w-xl mx-auto text-gray-300">
          M.Sc. Computer Science (Incoming) @ Universität des Saarlandes
        </p>
        <div className="mt-8 space-x-4">
          <a href="mailto:laeebajaved@gmail.com">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-2 rounded-xl inline-flex items-center">
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </a>
          <a href="https://github.com/l433ba" target="_blank" rel="noopener noreferrer">
            <button className="border border-gray-300 hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded-xl">
              GitHub
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
