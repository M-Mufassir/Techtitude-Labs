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
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "glass" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <NavLink to="/" onClick={() => setOpen(false)}>
          <Logo />
        </NavLink>

        <div className="hidden md:flex items-center gap-8 font-mono text-sm">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `transition-colors ${
                  isActive ? "text-accent" : "text-muted hover:text-ink"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <NavLink
          to="/contact"
          className="hidden md:inline-flex items-center rounded-full bg-accent px-5 py-2 text-sm font-mono font-medium text-void hover:bg-accent-glow transition-colors"
        >
          Start a project
        </NavLink>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-elevated px-6 py-6 flex flex-col gap-5 font-mono text-sm">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? "text-accent" : "text-muted")}
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="inline-flex w-fit items-center rounded-full bg-accent px-5 py-2 text-void"
          >
            Start a project
          </NavLink>
        </div>
      )}
    </header>
  );
}