import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import NeuralBackground from "./NeuralBackground";
import { siteConfig, navigation, socialLinks } from "../data/content";
import { Icon } from "../lib/icons";

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
        <div className="max-w-6xl mx-auto px-6 py-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:items-start">
          <div className="flex flex-col justify-start">
            <Logo variant="footer" className="!h-44 sm:!h-48 md:!h-44 lg:!h-48 object-contain" />
            <span className="mt-2 text-ink/40 text-xs font-mono">Learn &middot; Build &middot; Innovate</span>
          </div>

          <div className="font-mono text-sm text-muted flex flex-col gap-2.5">
            <span className="text-ink/70 mb-1">// sitemap</span>
            {navigation.footer.map((link) => (
              <NavLink key={link.path} to={link.path} className="hover:text-accent w-fit transition-colors">{link.label}</NavLink>
            ))}
          </div>

          <div className="font-mono text-sm text-muted flex flex-col gap-2.5">
            <span className="text-ink/70 mb-1">// reach us</span>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-accent w-fit transition-colors break-all">
              {siteConfig.email}
            </a>
            <a href={siteConfig.phoneHref} className="hover:text-accent w-fit transition-colors">
              {siteConfig.phone}
            </a>
            <a href={siteConfig.whatsapp.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent w-fit transition-colors text-xs text-ink/60">
              WhatsApp Support &rarr;
            </a>
          </div>

          <div className="font-mono text-sm text-muted flex flex-col gap-3">
            <span className="text-ink/70 mb-1">// follow us</span>
            <div className="flex flex-col gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.title}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.title}
                  className="group flex items-center gap-3 text-muted hover:text-white transition-all w-fit"
                >
                  <div className={`w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${social.colorClass}`}>
                    <Icon name={social.icon} size={16} />
                  </div>
                  <div>
                    <span className={`text-xs font-medium text-gray-300 transition-colors block ${social.textHoverClass}`}>{social.title}</span>
                    <span className="text-[10px] text-gray-500 group-hover:text-white/70 transition-colors block">{social.username}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 border-t border-white/5 pt-6 pb-32 lg:pb-24 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted/50">
          <div>
            © {new Date().getFullYear()} TechTitude Labs. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.title}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.title}
                title={social.title}
                className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-white transition-all duration-300 ${social.colorClass}`}
              >
                <Icon name={social.icon} size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}