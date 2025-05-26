// src/components/Contact.jsx
export function Contact() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white" id="contact" data-aos="fade-up">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 border-b-4 inline-block border-indigo-500">Get in Touch</h2>
        <p className="text-gray-300 mb-8 text-lg">
          Whether you want to collaborate, discuss a research idea, or just say hello — feel free to reach out!
        </p>
        <div className="space-y-4">
          <p className="text-indigo-300 text-xl">
            📧 <a href="mailto:laeebajaved@gmail.com" className="hover:underline">laeebajaved@gmail.com</a>
          </p>
          <p className="text-indigo-300 text-xl">
            📞 <a href="tel:+919068138222" className="hover:underline">+91 9068138222</a>
          </p>
          <div className="flex justify-center space-x-6 pt-6">
            <a href="https://github.com/l433ba" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 text-xl">GitHub</a>
            <a href="https://www.linkedin.com/in/laeeba/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 text-xl">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}