export function Publications() {
  const papers = [
    {
      title: "IEEE Intelligent Systems (2024)",
      subtitle: "Are Foundation Models the Next-Gen Social Media Moderators?",
      doi: "https://doi.org/10.1109/MIS.2024.3477109",
      tags: ["Impact Factor: 6.744", "h-index: 87"],
    },
    {
      title: "Cognitive Computation (2024)",
      subtitle: "Vision-Enabled LLMs for Emotion Recognition",
      doi: "https://doi.org/10.1007/s12559-024-10281-5",
      tags: ["Impact Factor: 5.600", "h-index: 73"],
    },
    {
      title: "arXiv (2025)",
      subtitle: "Direct Speech to Speech Translation: A Review",
      doi: "https://doi.org/10.48550/arXiv.2503.04799",
      tags: ["Preprint Repository", "h-index: N/A"],
    },
  ];

  return (
    <section
      className="py-24 px-6 bg-gradient-to-b from-transparent via-gray-900 to-black text-white"
      id="publications"
      data-aos="fade-up"
    >
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-bold mb-2 border-b-4 inline-block border-indigo-500">
          Publications
        </h2>
        <p className="text-gray-400 mt-2 text-sm">
          Peer-reviewed journals and research contributions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {papers.map((paper, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl border border-indigo-500/20 backdrop-blur-md bg-white/5 text-left shadow-md hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-[1.015]"
            data-aos="zoom-in"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="text-lg font-semibold text-indigo-300 mb-2">
                  {paper.title}
                </h3>
                <p className="text-sm text-gray-300 italic mb-4">
                  {paper.subtitle}
                </p>
              </div>
              <a
                href={paper.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 text-sm hover:underline mb-4 block"
              >
                {paper.doi}
              </a>
              <div className="flex flex-wrap gap-2 text-xs text-indigo-200">
                {paper.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-indigo-600/20 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
