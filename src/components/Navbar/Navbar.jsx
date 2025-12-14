import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Dark mode effect
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <>
      <nav className="bg-indigo-400 dark:bg-cyan-900 fixed w-full  text-black dark:text-white z-10 top-0  drop-shadow-2xl">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/">
            <h1 className="capitalize text-2xl text-nowrap">
              start framework
            </h1>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden xl:flex flex-nowrap">
            <li><NavLink className="px-4 py-2 rounded-2xl hover:bg-green-600 transition duration-300 hover:text-black" to="/">Home</NavLink></li>
            <li><NavLink className="px-4 py-2 rounded-2xl hover:bg-green-600 transition duration-300 hover:text-black" to="/About">About</NavLink></li>
            <li><NavLink className="px-4 py-2 rounded-2xl hover:bg-green-600 transition duration-300 hover:text-black" to="/Portofolio">Portfolio</NavLink></li>
            <li><NavLink className="px-4 py-2 rounded-2xl hover:bg-green-600 transition duration-300 hover:text-black" to="/Contact">Contact</NavLink></li>
          </ul>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            
            {/* Mobile Toggle */}
            <button
              className="xl:hidden text-3xl"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <i className="fa-solid fa-x"></i>
              ) : (
                <i className="fa-solid fa-bars"></i>
              )}
            </button>

            {/* Dark Mode Toggle */}
            <div
              className="bg-neutral-700 text-white py-2 px-1.5 rounded-3xl flex gap-3 cursor-pointer"
              onClick={() => setIsDark(!isDark)}
            >
              <i className={`fa-solid fa-moon text-2xl ${isDark ? "invisible" : "visible"}`}></i>
              <i className={`fa-solid fa-sun text-2xl ${isDark ? "visible" : "invisible"}`}></i>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden fixed top-[72px] left-0 w-full bg-indigo-500 dark:bg-cyan-900 text-white transform transition-transform duration-300 ease-in-out
        ${open ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0 pointer-events-none"}`}
      >
        <ul className="text-center">
          <li className="border-b"><NavLink to="/" onClick={() => setOpen(false)} className="block px-4 py-2">Home</NavLink></li>
          <li className="border-b"><NavLink to="/About" onClick={() => setOpen(false)} className="block px-4 py-2">About</NavLink></li>
          <li className="border-b"><NavLink to="/Portofolio" onClick={() => setOpen(false)} className="block px-4 py-2">Portfolio</NavLink></li>
          <li className="border-b"><NavLink to="/Contact" onClick={() => setOpen(false)} className="block px-4 py-2">Contact</NavLink></li>
        </ul>
      </div>
    </>
  );
}
