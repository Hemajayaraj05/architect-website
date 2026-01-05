import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
 import logo from "../assets/logo.jpeg";

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
    
      

<div className="flex items-center gap-2">
  <img
    src={logo}
    alt="LA Architect Logo"
    className="w-9 h-9 rounded-full object-cover shadow-md"
  />

  <div className="text-lg md:text-xl font-bold">
    <span className="text-amber-700">LA ARCHI</span>
    
    <span className="text-amber-700">TECTS</span>
  </div>
</div>


     
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

        
        <a
          href="tel:+916384284600"
          className="hidden md:inline-block text-sm font-medium bg-[#A05A49] px-4 py-2 rounded-full text-white hover:bg-amber-600 transition"
        >
          Call Us
        </a>

        <button
          className="md:hidden flex items-center justify-center p-1 bg-amber-700 rounded-md text-white text-2xl"
          onClick={() => setMobileOpen(true)}
        >
          ☰
        </button>
      </nav>

   
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
            className="mt-4 text-white bg-[#A05A49] px-4 py-2 rounded-full text-center hover:bg-amber-600 transition"
          >
            Call Us
          </a>
        </div>
      </div>

    
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
