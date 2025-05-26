// src/components/Footer.jsx
export function Footer() {
  return (
    <footer className="bg-black text-gray-400 text-sm py-6 text-center border-t border-indigo-800">
      <p>&copy; {new Date().getFullYear()} Laeeba Javed. All rights reserved.</p>
      <p className="text-xs text-gray-600 mt-1">Made with ❤️ using React + Tailwind CSS</p>
    </footer>
  );
}