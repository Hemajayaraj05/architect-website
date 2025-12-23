import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full  bg-gray-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-3">

       
        <div className="text-xl font-semibold text-gray-900">
          ARCHI<span className="text-gray-500">TECT</span>
        </div>

      
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-950">
          <a className="hover:text-gray-500 transition" href="#home">Home</a>
          <a className="hover:text-gray-500 transition " href="#about">About</a>
          <a className="hover:text-gray-500 transition " href="#projects">Projects</a>
          <a className="hover:text-gray-500 transition " href="#services">Services</a>
          <a className="hover:text-gray-500 transition " href="#contact">Contact</a>
          <a className="hover:text-gray-500 transition " href="#blog">Blog</a>
        </div>

       
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setOpen(!open)}
        >
        <FaHamburger />
        </button>
      </nav>

    
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 py-4 bg-gray-50 text-sm font-medium text-gray-800 text-center">
          <a onClick={() => setOpen(false)} href="#home">Home</a>
          <a onClick={() => setOpen(false)} href="#about">About</a>
          <a onClick={() => setOpen(false)} href="#projects">Projects</a>
          <a onClick={() => setOpen(false)} href="#services">Services</a>
          <a onClick={() => setOpen(false)} href="#contact">Contact</a>
          <a onClick={() => setOpen(false)} href="#blog">Blog</a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
