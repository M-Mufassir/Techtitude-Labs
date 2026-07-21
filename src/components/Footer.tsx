import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import NeuralBackground from "./NeuralBackground";

export default function Footer() {
  const location = useLocation();
  const isStudioRoute = ["/studio", "/services", "/portfolio", "/process"].includes(location.pathname);
  
  // Use purple/violet for studio, cyan/blue for academy and others
  const particleColor = isStudioRoute ? "#7B2CBF" : "#00AEEF";

  return (
    <footer className="relative border-t border-elevated overflow-hidden bg-[#070B14]">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 opacity-60">
        <NeuralBackground color={particleColor} particleCount={isStudioRoute ? 400 : 500} speed={isStudioRoute ? 0.9 : 0.7} />
      </div>
      
      {/* Gradient overlay to blend top edge */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#070B14] to-transparent z-0 pointer-events-none" />

      {/* Footer Content layered on top */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-14 grid gap-6 md:gap-10 md:grid-cols-3 md:items-center">
          <div className="flex justify-start">
            <Logo variant="footer" className="!h-48 sm:!h-56 md:!h-48 lg:!h-56 object-contain" />
          </div>

          <div className="font-mono text-sm text-muted flex flex-col gap-2">
            <span className="text-ink/70 mb-1">// sitemap</span>
            <NavLink to="/about" className="hover:text-accent w-fit transition-colors">About</NavLink>
            <NavLink to="/services" className="hover:text-accent w-fit transition-colors">Services</NavLink>
            <NavLink to="/courses" className="hover:text-accent w-fit transition-colors">Courses</NavLink>
            <NavLink to="/contact" className="hover:text-accent w-fit transition-colors">Contact</NavLink>
          </div>

          <div className="font-mono text-sm text-muted flex flex-col gap-2">
            <span className="text-ink/70 mb-1">// reach us</span>
            <a href="mailto:techtitude.labs@gmail.com" className="hover:text-accent w-fit transition-colors">
              techtitude.labs@gmail.com
            </a>
            <span className="mt-2 text-ink/40 w-full text-left">Learn &middot; Build &middot; Innovate</span>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 pb-32 lg:pb-24 text-center text-xs font-mono text-muted/50">
          © {new Date().getFullYear()} TechTitude Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}