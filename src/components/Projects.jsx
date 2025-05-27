export function Projects() {
  const projects = [
    {
      title: "ISOPC (Integrated Chemical Procurement)",
      description:
        "A centralized platform for chemical procurement across vendors, built using HTML, CSS, JS (frontend), PHP & MySQL (backend).",
      link: "#",
      label: "View Project →",
    },
    {
      title: "Parkinson's Disease Detection",
      description:
        "ML-based detection of Parkinson’s using biomedical voice data in Google Colab. Implemented using Python and scikit-learn.",
      link: "https://colab.research.google.com/drive/12-JljGgPo_CM6YX_t_T5ilyBDLQubjp-?usp=sharing",
      label: "Open Colab Notebook →",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "An elegant portfolio built with React + Tailwind CSS to present academic work, publications, and skills.",
      link: "#",
      label: "View Project →",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-b from-transparent via-gray-900 to-black text-white"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold inline-block border-b-4 border-indigo-500">
          Projects
        </h2>
        <p className="text-sm text-gray-400 mt-3">
          A selection of technical and research-oriented projects
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white/5 backdrop-blur-md border border-indigo-500/10 hover:border-indigo-500 p-6 rounded-2xl shadow-md hover:shadow-indigo-500/20 transition-all duration-300 hover:scale-[1.03] flex flex-col justify-between"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div>
              <h3 className="text-lg font-semibold text-indigo-300 mb-3">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 text-sm hover:underline mt-auto"
            >
              {project.label}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
