// src/components/Skills.jsx (Upgraded)
export function Skills() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white" id="skills" data-aos="fade-up">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 border-b-4 inline-block border-indigo-500">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-800 rounded-2xl shadow hover:shadow-xl transition border border-indigo-500/30 hover:border-indigo-500">
            <h3 className="text-xl font-semibold mb-2 text-indigo-300">Technical</h3>
            <p className="text-gray-300">Algorithms, Data Structures, Git, DBMS, AI, ML, Data Science</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-2xl shadow hover:shadow-xl transition border border-indigo-500/30 hover:border-indigo-500">
            <h3 className="text-xl font-semibold mb-2 text-indigo-300">Programming</h3>
            <p className="text-gray-300">Python, C, Java, SQL, PHP, JS, HTML, CSS, R</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-2xl shadow hover:shadow-xl transition border border-indigo-500/30 hover:border-indigo-500">
            <h3 className="text-xl font-semibold mb-2 text-indigo-300">Soft Skills</h3>
            <p className="text-gray-300">Research, Critical Thinking, Public Speaking</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-2xl shadow hover:shadow-xl transition border border-indigo-500/30 hover:border-indigo-500">
            <h3 className="text-xl font-semibold mb-2 text-indigo-300">Tools & Platforms</h3>
            <p className="text-gray-300">GitHub, VS Code, Figma, Firebase, Jupyter</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-2xl shadow hover:shadow-xl transition border border-indigo-500/30 hover:border-indigo-500">
            <h3 className="text-xl font-semibold mb-2 text-indigo-300">Languages</h3>
            <p className="text-gray-300">English, Hindi, Urdu</p>
          </div>
        </div>
      </div>
    </section>
  );
}
