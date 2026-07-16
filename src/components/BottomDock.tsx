import { Home, Grid } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function BottomDock() {
  const location = useLocation();

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Courses", path: "/courses" },
  ];

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden md:flex"
    >
      {/* Single Main Container */}
      <div className="flex items-center bg-[#161618] border border-white/5 rounded-full p-2 shadow-2xl">
        
        {/* Home Icon */}
        <Link 
          to="/" 
          className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-[#00AEEF] transition-colors duration-300 ml-1"
        >
          <Home size={20} />
        </Link>

        <div className="w-[1px] h-6 bg-white/10 mx-3" />

        {/* Text Links */}
        <div className="flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`px-5 py-2 transition-colors duration-300 text-sm font-bold font-display ${isActive ? "text-[#00AEEF]" : "text-white hover:text-gray-300"}`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="w-[1px] h-6 bg-white/10 mx-3" />

        {/* Action Links */}
        <div className="flex items-center gap-1">
          <Link 
            to="/contact" 
            className="px-5 py-2 text-white hover:text-gray-300 text-sm font-bold font-display transition-colors duration-300"
          >
            Contact
          </Link>
          <Link 
            to="/contact" 
            className="px-6 py-2.5 ml-2 bg-[#00AEEF] hover:bg-[#009ee0] text-white text-sm font-bold rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(0,174,239,0.3)] font-display whitespace-nowrap"
          >
            Start a project
          </Link>
        </div>

        <div className="w-[1px] h-6 bg-white/10 mx-3" />

        {/* Menu/Grid Icon */}
        <button className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-[#00AEEF] transition-colors duration-300 mr-1">
          <Grid size={20} />
        </button>

      </div>
    </motion.div>
  );
}
