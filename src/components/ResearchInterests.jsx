export function ResearchInterests() {
  const topics = [
    "Large Language Models (LLMs)",
    "Emotion AI",
    "Neural Decoding",
    "Bioinformatics",
    "Satellite AI",
    "Speech Processing",
    "Ethical AI",
    "AI in Healthcare",
    "Genomic Intelligence",
    "Responsible Generative AI",
  ];

  return (
    <section
      id="research"
      className="py-24 px-6 bg-gradient-to-b from-transparent via-gray-900 to-black text-white"
      data-aos="fade-up"
    >
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold inline-block border-b-4 border-indigo-500">
          Research Interests
        </h2>
        <p className="text-sm text-gray-400 mt-4">
          Topics I'm passionate about exploring and contributing to.
        </p>
      </div>

      <div className="relative flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
        {topics.map((topic, i) => (
          <div
            key={i}
            className="px-5 py-3 bg-indigo-600/10 text-indigo-300 text-sm rounded-full border border-indigo-400/30 shadow-md backdrop-blur-sm hover:bg-indigo-500/20 hover:scale-105 hover:shadow-indigo-500/30 transition-all duration-300 animate-floating-tag"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            {topic}
          </div>
        ))}
      </div>
    </section>
  );
}
