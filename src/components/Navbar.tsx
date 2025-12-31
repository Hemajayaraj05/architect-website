import { useEffect } from "react";

function Navbar() {
  // Apply dark mode permanently
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <header className="w-full bg-gray-900 shadow-md transition-colors duration-500 fixed top-0 z-75">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-3">
        {/* Logo */}
        <div className="text-xl font-semibold text-white">
          ARCHI<span className="text-purple-500">TECT</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {["Home","About","Projects","Services","Contact","Blog"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-purple-400 transition text-white"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href="tel:+919876543210"
            className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition"
          >
            Call Us
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
