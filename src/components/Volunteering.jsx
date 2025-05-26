// src/components/Volunteering.jsx
export function Volunteering() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white" id="volunteering" data-aos="fade-up">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center border-b-4 inline-block border-indigo-500">Volunteering</h2>

        <div className="space-y-10">
          <div className="border-l-4 border-indigo-500 pl-6 relative">
            <span className="absolute left-[-9px] top-1 w-4 h-4 bg-indigo-500 rounded-full"></span>
            <h3 className="text-xl font-semibold text-indigo-300">Mentor – Computer Science Society</h3>
            <p className="text-gray-400">Sep 2024 – Apr 2025</p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li>Guided leadership team to ensure smooth transitions.</li>
              <li>Mentored core team in leadership and technical skills.</li>
              <li>Organized AMUHACKS 5.0: hackathon, coding & quiz competitions.</li>
            </ul>
          </div>

          <div className="border-l-4 border-indigo-500 pl-6 relative">
            <span className="absolute left-[-9px] top-1 w-4 h-4 bg-indigo-500 rounded-full"></span>
            <h3 className="text-xl font-semibold text-indigo-300">Secretary – Computer Science Society</h3>
            <p className="text-gray-400">Jul 2023 – Jun 2024</p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li>Organized CodeHawk, CS360, and GFG One Month Coding Challenge.</li>
            </ul>
          </div>

          <div className="border-l-4 border-indigo-500 pl-6 relative">
            <span className="absolute left-[-9px] top-1 w-4 h-4 bg-indigo-500 rounded-full"></span>
            <h3 className="text-xl font-semibold text-indigo-300">GDSC Lead – Google Developer Student Clubs AMU</h3>
            <p className="text-gray-400">Jul 2023 – Jun 2024</p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li>Organized AMUHACKS 3.0: coding & treasure hunt hackathon.</li>
              <li>Conducted sessions on Google Cloud, web/app development.</li>
              <li>Led Google Cloud Study Jams with hands-on projects.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
