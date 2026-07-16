import { NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative border-t border-elevated mt-32">
      <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-muted max-w-xs">
            Empowering the next generation of innovators through technology.
          </p>
        </div>

        <div className="font-mono text-sm text-muted flex flex-col gap-2">
          <span className="text-ink/70 mb-1">// sitemap</span>
          <NavLink to="/about" className="hover:text-accent w-fit">About</NavLink>
          <NavLink to="/services" className="hover:text-accent w-fit">Services</NavLink>
          <NavLink to="/courses" className="hover:text-accent w-fit">Courses</NavLink>
          <NavLink to="/contact" className="hover:text-accent w-fit">Contact</NavLink>
        </div>

        <div className="font-mono text-sm text-muted flex flex-col gap-2">
          <span className="text-ink/70 mb-1">// reach us</span>
          <a href="mailto:hello@techtitudelabs.com" className="hover:text-accent w-fit">
            hello@techtitudelabs.com
          </a>
          <span>Learn &middot; Build &middot; Innovate</span>
        </div>
      </div>

      <div className="border-t border-elevated py-6 text-center text-xs font-mono text-muted/70">
        © {new Date().getFullYear()} Techtitude Labs. All rights reserved.
      </div>
    </footer>
  );
}
