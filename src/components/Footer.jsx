export function Footer() {
  return (
    <footer className="bg-black text-center text-sm text-gray-400 pt-10 pb-6 relative">
      {/* Glowing top border effect */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-600 via-indigo-400 to-indigo-600 blur-sm opacity-40"></div>

      <p>&copy; {new Date().getFullYear()} Laeeba Javed. All rights reserved.</p>
      
    </footer>
  );
}
