// src/components/Internships.jsx
export function Internships() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-indigo-900 text-white" id="internships" data-aos="fade-up">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center border-b-4 inline-block border-indigo-500">Internships</h2>

        <div className="space-y-10">
          <div className="border-l-4 border-indigo-500 pl-6 relative">
            <span className="absolute left-[-9px] top-1 w-4 h-4 bg-indigo-500 rounded-full"></span>
            <h3 className="text-xl font-semibold text-indigo-300">Artificial Intelligence Intern</h3>
            <p className="text-gray-400">Infosys Springboard | Oct 2024 – Jan 2025</p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li>Built a real-life project: "Voice-Based Patient Call System."</li>
              <li>Developed the app using React Native (frontend).</li>
            </ul>
          </div>

          <div className="border-l-4 border-indigo-500 pl-6 relative">
            <span className="absolute left-[-9px] top-1 w-4 h-4 bg-indigo-500 rounded-full"></span>
            <h3 className="text-xl font-semibold text-indigo-300">Intern</h3>
            <p className="text-gray-400">Microsoft FRT Internship (AICTE) | Jan 2023 – Apr 2023</p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li>Acquired Azure cloud and security skills aligned with industry standards.</li>
              <li>Focused on real-world Azure applications for business solutions.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}