import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/courses", label: "Courses" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070B14]/70 backdrop-blur-2xl border-b border-white/10 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 relative">
        <NavLink to="/" onClick={() => setOpen(false)} className="z-10">
          <Logo />
        </NavLink>

        {/* Centered Navigation for Desktop */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 font-mono text-[13px] tracking-wide">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `transition-colors ${
                  isActive ? "text-accent font-medium" : "text-gray-400 hover:text-white"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center z-10">
          <NavLink
            to="/contact"
            className="inline-flex items-center rounded-full bg-white px-5 py-2 text-[13px] font-semibold text-black hover:scale-105 transition-transform"
          >
            Start a project
          </NavLink>
        </div>

        <button
          className="md:hidden text-gray-300 hover:text-white transition-colors z-10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#070B14]/95 backdrop-blur-3xl border-b border-white/10 px-6 py-8 flex flex-col gap-6 font-mono text-sm shadow-2xl">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `transition-colors ${isActive ? "text-accent" : "text-gray-300 hover:text-white"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex w-fit items-center rounded-full bg-white px-6 py-2.5 text-black font-semibold"
          >
            Start a project
          </NavLink>
        </div>
      )}
    </header>
  );
}