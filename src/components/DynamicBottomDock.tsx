import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, MoreHorizontal, X } from "lucide-react";

export default function DynamicBottomDock() {
  const location = useLocation();
  const [activeDivision, setActiveDivision] = useState<'academy' | 'studio'>('academy');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Determine division based on URL path
  useEffect(() => {
    const path = location.pathname;
    if (['/academy', '/courses', '/workshops', '/builds', '/student-showcase'].includes(path)) {
      setActiveDivision('academy');
      sessionStorage.setItem('division', 'academy');
    } else if (['/studio', '/services', '/portfolio', '/process'].includes(path)) {
      setActiveDivision('studio');
      sessionStorage.setItem('division', 'studio');
    } else {
      // Shared pages (/about, /contact) use last known division
      const stored = sessionStorage.getItem('division') as 'academy' | 'studio';
      if (stored) setActiveDivision(stored);
    }
  }, [location.pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isAcademy = activeDivision === 'academy';

  const academyLinks = [
    { label: "About", path: "/about" },
    { label: "Courses", path: "/courses" },
    { label: "Workshops", path: "/workshops" },
    { label: "Builds", path: "/builds" },
    { label: "Contact", path: "/contact" },
  ];

  const studioLinks = [
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Process", path: "/process" },
    { label: "Contact", path: "/contact" },
  ];

  const currentLinks = isAcademy ? academyLinks : studioLinks;

  return (
    <>
      {/* Mobile Bottom Sheet Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-x-0 bottom-0 z-40 h-[50vh] lg:hidden bg-[#0B101E]/80 backdrop-blur-[24px] border-t border-white/10 rounded-t-3xl overflow-hidden flex flex-col"
          >
            {/* Themed Backdrop Glow */}
            <div className={`absolute inset-0 opacity-20 pointer-events-none transition-colors duration-700 ${isAcademy ? 'bg-[#00AEEF]' : 'bg-[#7B2CBF]'}`} />
            
            <div className="relative z-10 flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-white/50 font-mono text-sm tracking-widest uppercase">Menu</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 bg-white/5 rounded-full text-white/70 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-4 overflow-y-auto pb-20">
                {currentLinks.map((item, i) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.1 }}
                    >
                      <Link 
                        to={item.path}
                        className={`flex items-center min-h-[44px] ${isActive ? (isAcademy ? 'text-[#00AEEF]' : 'text-[#7B2CBF]') : 'text-white'}`}
                      >
                        <span className="font-display text-2xl font-bold tracking-tight">
                          {item.label}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Pill Dock */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
        className={`fixed bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 z-50 flex w-[calc(100%-32px)] max-w-[480px] lg:w-max lg:max-w-none transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-24 opacity-0 pointer-events-none' : ''}`}
      >
        <div className="flex items-center justify-between w-full lg:w-auto bg-[#0B101E]/60 backdrop-blur-[24px] border border-white/5 lg:border-white/10 rounded-full p-2 lg:pr-3 shadow-2xl relative overflow-hidden">
          
          {/* Glow Effects behind the pill */}
          <div className={`absolute inset-0 opacity-20 pointer-events-none transition-colors duration-700 ${isAcademy ? 'bg-[#00AEEF]' : 'bg-[#7B2CBF]'}`} />

          {/* Home Button (Absolute Left Anchor) */}
          <Link 
            to="/" 
            className={`w-12 h-12 flex flex-col items-center justify-center rounded-full transition-colors duration-300 ml-1 mr-2 hover:bg-white/5 ${isAcademy ? 'text-[#00AEEF] hover:text-[#00AEEF]' : 'text-[#7B2CBF] hover:text-[#7B2CBF]'}`}
          >
            <Home size={20} />
          </Link>

          {/* Left Divider */}
          <div className="hidden lg:block w-[1px] h-8 bg-white/20 mx-3" />

          {/* Mobile Center Touch Trigger */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex lg:hidden flex-1 items-center justify-center py-2 text-white/70 hover:text-white transition-colors"
          >
            <MoreHorizontal size={24} />
          </button>

          {/* Dynamic Center Menu Links (Desktop Only) */}
          <div className="hidden lg:flex items-center gap-2 px-2">
            <AnimatePresence mode="popLayout">
              {currentLinks.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={`${item.label}-${activeDivision}`}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link 
                      to={item.path} 
                      className={`flex items-center justify-center px-4 py-2 transition-all duration-300 rounded-full hover:bg-white/5 group`}
                    >
                      <span className={`text-sm font-bold font-display tracking-wide transition-colors ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Right Divider */}
          <div className="hidden lg:block w-[1px] h-8 bg-white/20 mx-3" />

          {/* Action Button (Absolute Right Anchor) */}
          <div className="ml-2 lg:ml-0 shrink-0">
            {isAcademy ? (
              <Link 
                to="/contact" 
                className="px-6 lg:px-8 py-2.5 lg:py-3 bg-[#00AEEF] hover:bg-[#009ee0] text-[#070B14] text-sm font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(0,174,239,0.3)] font-display whitespace-nowrap block"
              >
                Enroll<span className="hidden lg:inline"> Now</span>
              </Link>
            ) : (
              <Link 
                to="/contact" 
                className="px-6 lg:px-8 py-2.5 lg:py-3 bg-[#7B2CBF] hover:bg-[#6a24a6] text-white text-sm font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(123,44,191,0.5)] font-display whitespace-nowrap block"
              >
                Start<span className="hidden lg:inline"> a Project</span>
              </Link>
            )}
          </div>

        </div>
      </motion.div>
    </>
  );
}
