import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 md:left-12 md:right-12 z-50 px-4 md:px-0">
      <nav className="max-w-5xl mx-auto flex items-center justify-between bg-white/30 backdrop-blur-lg border border-white/40 shadow-lg rounded-3xl md:rounded-4xl px-4 py-2">
        {/* Brand */}
        <div className="text-lg md:text-xl font-bold text-amber-900">
          ARCHI<span className="text-amber-500">TECT</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-amber-800/90 hover:text-amber-500 transition border-b-2 ${
                location.pathname === link.path
                  ? "border-amber-500"
                  : "border-transparent"
              } pb-1`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Call Button (Desktop) */}
        <a
          href="tel:+919876543210"
          className="hidden md:inline-block text-sm font-medium bg-amber-500 px-4 py-2 rounded-full text-white hover:bg-amber-600 transition"
        >
          Call Us
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2 bg-amber-500 rounded-md text-white text-2xl"
          onClick={() => setMobileOpen(true)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-64 bg-white/95 backdrop-blur-md shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-amber-700 text-2xl font-bold hover:text-amber-500 transition"
          onClick={() => setMobileOpen(false)}
        >
          ✕
        </button>

        <div className="flex flex-col mt-24 px-6 gap-6 text-lg font-medium">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`transition-colors duration-200 ${
                location.pathname === link.path
                  ? "font-bold text-amber-500"
                  : "text-amber-900 hover:text-amber-500"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <a
            href="tel:+919876543210"
            className="mt-4 text-white bg-amber-500 px-4 py-2 rounded-full text-center hover:bg-amber-600 transition"
          >
            Call Us
          </a>
        </div>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
}

export default Navbar;
