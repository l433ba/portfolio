export function Internships() {
  const internships = [
    {
      title: "Artificial Intelligence Intern",
      org: "Infosys Springboard",
      period: "Oct 2024 – Jan 2025",
      details: [
        'Built a real-life project: "Voice-Based Patient Call System."',
        "Developed the app using React Native (frontend).",
      ],
    },
    {
      title: "Microsoft FRT Internship (AICTE)",
      org: "Microsoft | Remote",
      period: "Jan 2023 – Apr 2023",
      details: [
        "Acquired Azure cloud and security skills aligned with industry standards.",
        "Focused on real-world Azure applications for business solutions.",
      ],
    },
  ];

  return (
    <section
      className="py-24 px-6 bg-gradient-to-b from-transparent via-gray-900 to-black text-white"
      id="internships"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-14 text-center border-b-4 inline-block border-indigo-500">
          Internships
        </h2>

        <div className="relative border-l border-indigo-500/20 ml-4 pl-6 space-y-16">
          {internships.map((item, idx) => (
            <div key={idx} className="relative group" data-aos="fade-up" data-aos-delay={idx * 100}>
              {/* Glowing dot */}
              <div className="absolute -left-[22px] top-1 w-4 h-4 bg-indigo-500 rounded-full shadow-lg shadow-indigo-500/30"></div>

              {/* Vertical glowing line effect */}
              <div className="absolute -left-[1.35rem] h-full w-[2px] bg-gradient-to-b from-indigo-500/40 to-transparent animate-pulse blur-sm" />

              <h3 className="text-xl font-semibold text-indigo-300">{item.title}</h3>
              <p className="text-sm text-gray-400">
                {item.org} | {item.period}
              </p>
              <ul className="list-disc list-inside mt-3 text-gray-300 space-y-1 text-sm">
                {item.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
