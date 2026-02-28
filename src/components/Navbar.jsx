import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-accent"
      : "text-gray-300 hover:text-accent transition";

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed w-full z-50 px-6 md:px-20 py-4 flex justify-between items-center transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-primary/80 shadow-lg"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-accent"
        >
         P SANDEEP YADAV
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <NavLink to="/" className={navLinkStyle}>Home</NavLink>
          <NavLink to="/projects" className={navLinkStyle}>Projects</NavLink>
          <NavLink to="/internships" className={navLinkStyle}>Internships</NavLink>
          <NavLink to="/contact" className={navLinkStyle}>Contact</NavLink>
          <a
  href="/resume_sandeep.pdf"
  download
  className="bg-accent text-black px-4 py-2 rounded-lg font-semibold hover:scale-105 transition"
>
  Resume
</a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-accent focus:outline-none"
          >
            ☰
          </button>
        </div>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 w-full bg-card backdrop-blur-md z-40 flex flex-col items-center py-6 space-y-6 md:hidden"
          >
            <NavLink to="/" onClick={() => setMenuOpen(false)} className={navLinkStyle}>Home</NavLink>
            <NavLink to="/projects" onClick={() => setMenuOpen(false)} className={navLinkStyle}>Projects</NavLink>
            <NavLink to="/internships" onClick={() => setMenuOpen(false)} className={navLinkStyle}>Internships</NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={navLinkStyle}>Contact</NavLink>
            <a
            href="/resume_sandeep.pdf"
            download
            onClick={() => setMenuOpen(false)}
            className="bg-accent text-black px-6 py-2 rounded-lg font-semibold"
          >
            Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;