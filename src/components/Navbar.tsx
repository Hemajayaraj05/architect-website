import { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <header className="fixed top-4 inset-x-4 md:inset-x-20 z-50">
      <nav
        className="
        relative mx-auto max-w-7xl
        flex items-center justify-between
        px-5 py-1
        rounded-4xl md:rounded-full

        bg-linear-to-br from-white/20 to-white/5
        dark:from-white/10 dark:to-black/10

        backdrop-blur-2xl
        border border-white/30
        shadow-[0_8px_32px_rgba(0,0,0,0.35)]
        overflow-hidden
        "
      >
        {/* Glass reflection */}
        <span
          className="pointer-events-none absolute inset-0
          bg-linear-to-r from-transparent via-white/30 to-transparent
          opacity-20"
        />

        {/* Logo */}
        <div className="relative z-10 text-lg md:text-xl font-semibold text-white">
          ARCHI<span className="text-purple-400">TECT</span>
        </div>

        {/* Desktop Menu */}
        <div className="relative z-10 hidden md:flex items-center gap-8 text-sm font-medium">
          {["Overview", "Work", "Expertise", "Process", "Insights", "Connect"].map(
            (link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="
                  text-white/80 hover:text-purple-400 transition
                  relative after:absolute after:left-0 after:-bottom-1
                  after:h-0.5 after:w-0 after:bg-purple-400
                  after:transition-all hover:after:w-full
                "
              >
                {link}
              </a>
            )
          )}
        </div>

        {/* Call Us — Mobile & Desktop */}
        <a
          href="tel:+919876543210"
          className="
            relative z-10
            text-sm font-medium
            bg-purple-600/80
            backdrop-blur-lg
            text-white
            px-4 py-2
            rounded-full
            shadow-md
            hover:bg-purple-500
            transition
          "
        >
          Call Us
        </a>
      </nav>
    </header>
  );
}

export default Navbar;



