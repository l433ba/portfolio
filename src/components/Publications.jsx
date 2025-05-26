// src/components/Publications.jsx
export function Publications() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-indigo-900 text-white" id="publications" data-aos="fade-up">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 border-b-4 inline-block border-indigo-500">Publications</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Publication 1 */}
          <div className="bg-gray-800 border border-indigo-500/30 hover:border-indigo-500 transition p-6 rounded-2xl text-left shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-300">IEEE Intelligent Systems (2024)</h3>
            <p className="text-gray-300 mb-3">
              <em>Are Foundation Models the Next-Gen Social Media Moderators?</em>
            </p>
            <p className="text-sm text-gray-400 mb-2">DOI: <a href="https://doi.org/10.1109/MIS.2024.3477109" className="text-indigo-400 hover:underline">10.1109/MIS.2024.3477109</a></p>
            <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
              <span className="bg-indigo-600/30 px-3 py-1 rounded-full">Impact Factor: 6.744</span>
              <span className="bg-indigo-600/30 px-3 py-1 rounded-full">h-index: 87</span>
            </div>
          </div>

          {/* Publication 2 */}
          <div className="bg-gray-800 border border-indigo-500/30 hover:border-indigo-500 transition p-6 rounded-2xl text-left shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-300">Cognitive Computation (2024)</h3>
            <p className="text-gray-300 mb-3">
              <em>Vision-Enabled LLMs for Emotion Recognition</em>
            </p>
            <p className="text-sm text-gray-400 mb-2">DOI: <a href="https://doi.org/10.1007/s12559-024-10281-5" className="text-indigo-400 hover:underline">10.1007/s12559-024-10281-5</a></p>
            <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
              <span className="bg-indigo-600/30 px-3 py-1 rounded-full">Impact Factor: 5.600</span>
              <span className="bg-indigo-600/30 px-3 py-1 rounded-full">h-index: 73</span>
            </div>
          </div>

          {/* Publication 3 */}
          <div className="bg-gray-800 border border-indigo-500/30 hover:border-indigo-500 transition p-6 rounded-2xl text-left shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-300">arXiv (2025)</h3>
            <p className="text-gray-300 mb-3">
              <em>Direct Speech to Speech Translation: A Review</em>
            </p>
            <p className="text-sm text-gray-400 mb-2">DOI: <a href="https://doi.org/10.48550/arXiv.2503.04799" className="text-indigo-400 hover:underline">10.48550/arXiv.2503.04799</a></p>
            <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
              <span className="bg-indigo-600/30 px-3 py-1 rounded-full">Preprint Repository</span>
              <span className="bg-indigo-600/30 px-3 py-1 rounded-full">h-index: N/A</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
