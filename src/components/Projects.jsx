// src/components/Projects.jsx (Upgraded)
export function Projects() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-indigo-900 text-white" id="projects" data-aos="fade-up">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 border-b-4 inline-block border-indigo-500">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-2xl shadow-lg p-6 text-left border border-indigo-500/30 hover:border-indigo-500 transition">
            <h3 className="text-2xl font-semibold mb-2 text-indigo-300">ISOPC</h3>
            <p className="text-gray-300 mb-4">
              A centralized chemical procurement platform for labs. Built with HTML, CSS, JavaScript (frontend), PHP and MySQL (backend).
            </p>
            <a href="#" className="text-indigo-400 hover:underline">View Project →</a>
          </div>
          <div className="bg-gray-800 rounded-2xl shadow-lg p-6 text-left border border-indigo-500/30 hover:border-indigo-500 transition">
            <h3 className="text-2xl font-semibold mb-2 text-indigo-300">Parkinson's Disease Detection</h3>
            <p className="text-gray-300 mb-4">
              A Google Colab-based machine learning project to detect Parkinson's Disease using biomedical voice measurements. Implemented using Python and scikit-learn.
            </p>
            <a href="#" className="text-indigo-400 hover:underline">View Notebook →</a>
          </div>
          <div className="bg-gray-800 rounded-2xl shadow-lg p-6 text-left border border-indigo-500/30 hover:border-indigo-500 transition">
            <h3 className="text-2xl font-semibold mb-2 text-indigo-300">Personal Portfolio</h3>
            <p className="text-gray-300 mb-4">
              A  project built with React and Tailwind CSS to showcase students’ achievements, blogs, and work. Designed for elegance and responsiveness.
            </p>
            <a href="#" className="text-indigo-400 hover:underline">View Project →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
