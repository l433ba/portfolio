export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-b from-transparent via-gray-900 to-black text-white"
      data-aos="fade-up"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 border-b-4 inline-block border-indigo-500">
          Get in Touch
        </h2>
        <p className="text-gray-300 mb-10 text-lg">
          Whether you'd like to collaborate, connect on research, or just say hello — feel free to reach out.
        </p>

        <div className="flex flex-col items-center gap-6">
          <div className="px-6 py-4 bg-indigo-600/10 backdrop-blur-md border border-indigo-500/20 rounded-2xl shadow-lg hover:shadow-indigo-500/30 transition">
            📧{" "}
            <a
              href="mailto:laeebajaved@gmail.com"
              className="text-indigo-300 text-lg hover:underline"
            >
              laeebajaved@gmail.com
            </a>
          </div>
          {/*
  <div className="px-6 py-4 bg-indigo-600/10 backdrop-blur-md border border-indigo-500/20 rounded-2xl shadow-lg hover:shadow-indigo-500/30 transition">
    📞{" "}
    <a
      href="tel:+919068138222"
      className="text-indigo-300 text-lg hover:underline"
    >
      +91 9068138222
    </a>
  </div>
*/}


          <div className="flex justify-center space-x-8 pt-6">
            <a
              href="https://github.com/l433ba"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-300 hover:text-indigo-400 text-xl transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/laeeba/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-300 hover:text-indigo-400 text-xl transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
