export function Volunteering() {
  const events = [
    {
      title: "Mentor – Computer Science Society",
      period: "Sep 2024 – Apr 2025",
      points: [
        "Guided leadership team to ensure smooth transitions.",
        "Mentored core team in leadership and technical skills.",
        "Organized AMUHACKS 4.0: hackathon, coding, quiz competition & Capture the Flag [CTF]- an Online Treasure Hunt.",
      ],
    },
    {
      title: "Secretary – Computer Science Society",
      period: "Jul 2023 – Jun 2024",
      points: [
        "Organized CodeHawk, CS360, and GFG One Month Coding Challenge.",
      ],
    },
    {
      title: "GDSC Lead – Google Developer Student Clubs AMU",
      period: "Jul 2023 – Jun 2024",
      points: [
        "Organized AMUHACKS 3.0: coding & treasure hunt hackathon.",
        "Conducted sessions on Google Cloud, web/app development.",
        "Led Google Cloud Study Jams with hands-on projects.",
      ],
    },
  ];

  return (
    <section
      className="py-24 px-6 bg-gradient-to-b from-transparent via-gray-900 to-black text-white"
      id="volunteering"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-14 text-center border-b-4 inline-block border-indigo-500">
          Volunteering
        </h2>

        <div className="relative border-l border-indigo-500/20 ml-4 pl-6 space-y-16">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="relative group"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Glowing dot */}
              <div className="absolute -left-[22px] top-1 w-4 h-4 bg-indigo-500 rounded-full shadow-md shadow-indigo-500/30"></div>

              {/* Animated neural line glow */}
              <div className="absolute -left-[1.35rem] h-full w-[2px] bg-gradient-to-b from-indigo-500/30 to-transparent animate-pulse blur-sm" />

              <h3 className="text-xl font-semibold text-indigo-300">
                {event.title}
              </h3>
              <p className="text-sm text-gray-400">{event.period}</p>
              <ul className="list-disc list-inside mt-3 text-sm text-gray-300 space-y-1">
                {event.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
