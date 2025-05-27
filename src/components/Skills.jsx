import {
  Code2,
  BrainCircuit,
  UserCog,
  Wrench,
  Globe,
} from "lucide-react";

export function Skills() {
  const skills = [
    {
      name: "Technical",
      desc: "AI, ML, Data Structures, DBMS",
      icon: <BrainCircuit />,
    },
    {
      name: "Programming",
      desc: "Python, Java, C, SQL, JS, HTML, CSS",
      icon: <Code2 />,
    },
    {
      name: "Soft Skills",
      desc: "Research, Public Speaking",
      icon: <UserCog />,
    },
    {
      name: "Tools",
      desc: "GitHub, VS Code, Firebase, Figma",
      icon: <Wrench />,
    },
    {
      name: "Languages",
      desc: "English, Hindi, Urdu",
      icon: <Globe />,
    },
  ];

  return (
    <section
      className="py-24 px-6 bg-gradient-to-b from-transparent via-gray-900 to-black text-white"
      id="skills"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold inline-block border-b-4 border-indigo-500">
          Skills
        </h2>
        <p className="text-gray-400 mt-4 text-sm">
          My skillset spans software development, intelligent systems & communication.
        </p>
      </div>

      {/* Neural-grid layout: 3 on top row, 2 on bottom row centered */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {skills.slice(0, 3).map((skill, idx) => (
          <div
            key={idx}
            className="relative group p-6 rounded-2xl border border-indigo-500/20 bg-white/5 backdrop-blur-sm shadow-md hover:shadow-lg hover:border-indigo-400 transition-all duration-300"
            data-aos="zoom-in"
          >
            <div className="w-14 h-14 mx-auto mb-4 text-indigo-300 text-3xl flex items-center justify-center rounded-full bg-indigo-600/10 border border-indigo-500 shadow-md group-hover:scale-110 transition-transform">
              {skill.icon}
            </div>
            <h3 className="text-base font-semibold text-indigo-300">{skill.name}</h3>
            <p className="text-sm text-gray-300 mt-2">{skill.desc}</p>
          </div>
        ))}
      </div>

      {/* Centered 2-bottom-row grid */}
      <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12">
        {skills.slice(3).map((skill, idx) => (
          <div
            key={idx}
            className="relative group p-6 rounded-2xl border border-indigo-500/20 bg-white/5 backdrop-blur-sm shadow-md hover:shadow-lg hover:border-indigo-400 transition-all duration-300"
            data-aos="zoom-in"
          >
            <div className="w-14 h-14 mx-auto mb-4 text-indigo-300 text-3xl flex items-center justify-center rounded-full bg-indigo-600/10 border border-indigo-500 shadow-md group-hover:scale-110 transition-transform">
              {skill.icon}
            </div>
            <h3 className="text-base font-semibold text-indigo-300">{skill.name}</h3>
            <p className="text-sm text-gray-300 mt-2">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
