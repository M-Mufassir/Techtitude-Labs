import { useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BookOpen, GraduationCap, Book, Bookmark, Library, PenTool } from 'lucide-react';
//import Logo from './Logo';

// ACADEMY: Dropping Study Materials
const STUDY_ICONS = [BookOpen, GraduationCap, Book, Bookmark, Library, PenTool];

const DroppingStudyMaterials = ({ active }: { active: boolean }) => {
  if (!active) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {Array.from({ length: 20 }).map((_, i) => {
        const Icon = STUDY_ICONS[i % STUDY_ICONS.length];
        const startX = (i * 21) % 100;
        const duration = 2 + (i % 5) * 1.5;
        const delay = (i % 6) * 0.8;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: "-20vh", rotate: 0 }}
            animate={{ 
              opacity: [0, 1, 1, 0], 
              y: "120vh", 
              rotate: (i % 2 === 0 ? 360 : -360) 
            }}
            transition={{ 
              duration: duration, 
              repeat: Infinity, 
              delay: delay,
              ease: "linear"
            }}
            className="absolute text-[#00AEEF]"
            style={{ 
              left: `${startX}%`, 
              top: 0,
              filter: "drop-shadow(0 0 12px rgba(0,174,239,0.8))"
            }}
          >
            <Icon size={40 + (i % 3) * 20} strokeWidth={2} />
          </motion.div>
        );
      })}
    </div>
  );
};

// DEVELOPMENT: Matrix Code Stream Marquee
import { splitGatewayContent } from '../data/content';

const MARQUEE_SNIPPETS = splitGatewayContent.marqueeSnippets;

const MatrixMarqueeStream = ({ active }: { active: boolean }) => {
  if (!active) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-40 flex flex-col justify-around py-20" style={{ filter: "blur(4px)" }}>
      {MARQUEE_SNIPPETS.map((code, i) => (
        <motion.div
          key={i}
          initial={{ x: "100vw" }}
          animate={{ x: "-150vw" }}
          transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
          className="whitespace-nowrap font-mono text-[#7B2CBF] text-lg md:text-2xl font-bold ml-12"
        >
          {code} {code}
        </motion.div>
      ))}
    </div>
  );
};

// DEVELOPMENT: Circuit Trace with Nodes
const CircuitTraceWithNodes = ({ active }: { active: boolean }) => {
  if (!active) return null;
  
  const PATH1 = "M 100 100 L 250 100 L 300 150 L 300 400";
  const PATH2 = "M -50 300 L 150 300 L 200 250 L 500 250";
  const PATH3 = "M 400 600 L 400 450 L 250 300 L -50 300";

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60 z-10" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d={PATH1}
        fill="transparent"
        stroke="#7B2CBF"
        strokeWidth="3"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <circle r="4" fill="#fff" filter="drop-shadow(0 0 5px #fff)">
        <animateMotion dur="2s" repeatCount="indefinite" path={PATH1} />
      </circle>

      <motion.path
        d={PATH2}
        fill="transparent"
        stroke="#7B2CBF"
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
      />
      <circle r="3" fill="#00AEEF" filter="drop-shadow(0 0 5px #00AEEF)">
        <animateMotion dur="2.5s" repeatCount="indefinite" path={PATH2} />
      </circle>

      <motion.path
        d={PATH3}
        fill="transparent"
        stroke="#b37be8"
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.8, delay: 0.4, ease: "easeInOut" }}
      />
      <circle r="2" fill="#fff" filter="drop-shadow(0 0 3px #fff)">
        <animateMotion dur="3s" repeatCount="indefinite" path={PATH3} />
      </circle>
    </svg>
  );
};



// --- Main Gateway Component ---

export default function SplitGateway() {
  const [hoveredZone, setHoveredZone] = useState<'academy' | 'dev' | null>(null);
  const [activeMobileZone, setActiveMobileZone] = useState<'academy' | 'dev' | null>(null);
  const navigate = useNavigate();
  
  // Parallax tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleGlobalMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX - window.innerWidth / 2);
    mouseY.set(e.clientY - window.innerHeight / 2);
  };

  // Damped Inertia Physics
  const flexTransition = { type: 'spring' as const, stiffness: 45, damping: 22, mass: 1.2 };

  const toggleMobileZone = (zone: 'academy' | 'dev', e: React.MouseEvent) => {
    // If user clicks directly on the actual active CTA navigation link, let it go through
    if ((e.target as HTMLElement).closest('button')) return;
    e.preventDefault();
    setActiveMobileZone(prev => prev === zone ? null : zone);
  };

  return (
    <>
      {/* MOBILE GATEWAY LAYOUT (AWWWARDS-LEVEL TOUCH INTERFACE) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="md:hidden relative w-full h-[100dvh] flex flex-col bg-[#070B14] overflow-hidden select-none font-sans"
      >
        {/* CENTERPIECE */}
        <motion.div
          animate={{
            y: activeMobileZone === 'academy' ? "15vh" : activeMobileZone === 'dev' ? "-35vh" : "-50%",
            x: "-50%",
            opacity: activeMobileZone ? 0.15 : 1,
            scale: activeMobileZone ? 0.85 : 1,
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-1/2 left-1/2 z-50 text-center w-full px-6 pointer-events-none flex flex-col items-center"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
             <span className="font-['Space_Grotesk'] font-bold text-white text-[0.85rem] tracking-[0.35em]">TECHTITUDE</span>
             <span className="font-['Space_Grotesk'] font-medium text-[#00AEEF] text-[0.85rem] tracking-[0.2em]">LABS</span>
          </div>
          <h1 className="font-['Space_Grotesk'] font-bold text-white text-[1.8rem] leading-[1.2] tracking-[-0.03em] whitespace-pre-line">
            {splitGatewayContent.mobile.titleLine1}
            {splitGatewayContent.mobile.titleLine2}
          </h1>
        </motion.div>

        {/* ACADEMY PANE */}
        <motion.div
          animate={{
            flex: activeMobileZone === 'academy' ? 1.8 : activeMobileZone === 'dev' ? 0.4 : 1,
            opacity: activeMobileZone === 'dev' ? 0.3 : 1
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => toggleMobileZone('academy', e)}
          className="relative w-full flex flex-col justify-center items-center z-10 overflow-hidden border-b border-white/5 cursor-pointer"
          style={{ background: 'linear-gradient(to bottom, rgba(0, 174, 239, 0.02), transparent)' }}
        >
          <motion.div 
            animate={{ opacity: activeMobileZone === 'academy' ? 1 : 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 50% 30%, rgba(0, 174, 239, 0.12), transparent 60%)' }}
          />
          <div className="absolute inset-0 pointer-events-none opacity-30">
             <DroppingStudyMaterials active={activeMobileZone === 'academy'} />
          </div>
          
          <motion.div
            animate={{ y: activeMobileZone === 'academy' ? 0 : -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center z-10"
          >
            <motion.span 
              animate={{ 
                opacity: activeMobileZone === 'academy' ? 1 : 0.5,
                color: activeMobileZone === 'academy' ? '#00AEEF' : '#FFFFFF'
              }}
              className="font-mono text-[0.6rem] tracking-[0.25em] uppercase mb-1.5"
            >
              {splitGatewayContent.mobile.academy.subtitle}
            </motion.span>
            
            <motion.h2 
              animate={{ 
                opacity: activeMobileZone === 'academy' ? 1 : 0.8,
                fontSize: activeMobileZone === 'academy' ? '2rem' : '1.6rem'
              }}
              className="font-['Space_Grotesk'] font-bold tracking-[-0.02em] text-white"
            >
              {splitGatewayContent.mobile.academy.title}
            </motion.h2>

            <motion.div
              animate={{
                height: activeMobileZone === 'academy' ? 'auto' : 0,
                opacity: activeMobileZone === 'academy' ? 1 : 0,
                scale: activeMobileZone === 'academy' ? 1 : 0.9,
                marginTop: activeMobileZone === 'academy' ? '1rem' : '0px'
              }}
              className="overflow-hidden flex items-center justify-center"
            >
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/academy');
                }}
                className="px-5 py-2.5 text-xs font-medium text-white bg-white/5 border border-white/10 rounded-full backdrop-blur-md flex items-center gap-2"
              >
                {splitGatewayContent.mobile.academy.cta} <span className="text-[#00AEEF]">→</span>
              </button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* DEVELOPMENT PANE */}
        <motion.div
          animate={{
            flex: activeMobileZone === 'dev' ? 1.8 : activeMobileZone === 'academy' ? 0.4 : 1,
            opacity: activeMobileZone === 'academy' ? 0.3 : 1
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => toggleMobileZone('dev', e)}
          className="relative w-full flex flex-col justify-center items-center z-10 overflow-hidden cursor-pointer"
          style={{ background: 'linear-gradient(to top, rgba(123, 44, 191, 0.02), transparent)' }}
        >
          <motion.div 
            animate={{ opacity: activeMobileZone === 'dev' ? 1 : 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 50% 70%, rgba(123, 44, 191, 0.12), transparent 60%)' }}
          />
          <div className="absolute inset-0 pointer-events-none opacity-50">
             <MatrixMarqueeStream active={activeMobileZone === 'dev'} />
          </div>
          
          <motion.div
            animate={{ y: activeMobileZone === 'dev' ? 0 : 20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center z-10"
          >
            <motion.span 
              animate={{ 
                opacity: activeMobileZone === 'dev' ? 1 : 0.5,
                color: activeMobileZone === 'dev' ? '#7B2CBF' : '#FFFFFF'
              }}
              className="font-mono text-[0.6rem] tracking-[0.25em] uppercase mb-1.5"
            >
              {splitGatewayContent.mobile.dev.subtitle}
            </motion.span>
            
            <motion.h2 
              animate={{ 
                opacity: activeMobileZone === 'dev' ? 1 : 0.8,
                fontSize: activeMobileZone === 'dev' ? '2rem' : '1.6rem'
              }}
              className="font-['Space_Grotesk'] font-bold tracking-[-0.02em] text-white"
            >
              {splitGatewayContent.mobile.dev.title}
            </motion.h2>

            <motion.div
              animate={{
                height: activeMobileZone === 'dev' ? 'auto' : 0,
                opacity: activeMobileZone === 'dev' ? 1 : 0,
                scale: activeMobileZone === 'dev' ? 1 : 0.9,
                marginTop: activeMobileZone === 'dev' ? '1rem' : '0px'
              }}
              className="overflow-hidden flex items-center justify-center"
            >
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/studio');
                }}
                className="px-5 py-2.5 text-xs font-medium text-white bg-white/5 border border-white/10 rounded-full backdrop-blur-md flex items-center gap-2"
              >
                {splitGatewayContent.mobile.dev.cta} <span className="text-[#7B2CBF]">→</span>
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* DESKTOP GATEWAY LAYOUT */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        onMouseMove={handleGlobalMouseMove}
        className="hidden md:flex relative w-screen h-[100dvh] bg-[#070B14] overflow-hidden flex-row"
      >
      <style>{`
        @keyframes spin-gradient {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-gradient {
          animation: spin-gradient 3s linear infinite;
        }
      `}</style>

      {/* ADVANCED TYPOGRAPHIC ARCHITECTURE CENTERPIECE (Desktop) */}
      <motion.div 
        animate={{ 
          opacity: hoveredZone === null ? 1 : 0,
          scale: hoveredZone === null ? 1 : 0.9,
          filter: hoveredZone === null ? "blur(0px)" : "blur(12px)"
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none text-center select-none w-full max-w-4xl px-4 flex flex-col items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="relative w-full flex flex-col items-center justify-center"
        >
          {/* THE BACKDROP EMBLAZON (Giant Subtle Watermark) */}
          <div className="absolute inset-0 flex items-center justify-center z-0 opacity-[0.03] select-none pointer-events-none">
            <span className="font-['Space_Grotesk'] font-bold text-white text-[12vw] tracking-tighter leading-none uppercase">
              TECH
            </span>
          </div>

          {/* THE INTERLOCKING LOGO AND SLOGAN CONTAINER */}
          <div className="relative z-10 flex flex-col items-center">
            
            {/* Ultra-Premium Minimal Logo Header */}
            <div className="flex items-center gap-3 mb-6 mix-blend-difference">
              <span className="font-['Space_Grotesk'] font-bold text-white text-xs tracking-[0.4em] uppercase">
                TECHTITUDE
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] animate-pulse"></span>
              <span className="font-['Space_Grotesk'] font-medium text-white/50 text-[11px] tracking-[0.3em] uppercase">
                LABS
              </span>
            </div>

            {/* The Kinetic Asymmetric Slogan */}
            <motion.h1 
              initial={{ filter: "blur(10px)", scale: 0.95, opacity: 0 }}
              animate={{ filter: "blur(0px)", scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="font-['Space_Grotesk'] font-bold text-white text-4xl sm:text-5xl lg:text-6xl tracking-[-0.03em] leading-[1.1] max-w-2xl mx-auto"
            >
              {splitGatewayContent.desktop.titleLine1}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#7B2CBF] font-medium">{splitGatewayContent.desktop.titleHighlight}</span>
              {splitGatewayContent.desktop.titleLine2}
            </motion.h1>

            {/* Inline Modern Descriptive Metric Matrix */}
            <div className="flex items-center gap-6 mt-8 font-mono text-[10px] text-white/40 tracking-wider uppercase">
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#00AEEF]"></span> ACADEMY.SYS
              </div>
              <div className="w-1 h-1 bg-white/20 rounded-full"></div>
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#7B2CBF]"></span> DEV_STUDIO.EXE
              </div>
            </div>

          </div>

          {/* The Kinetic Interaction Line */}
          <div className="w-px h-20 bg-gradient-to-b from-white/20 via-white/5 to-transparent mx-auto mt-8"></div>
        </motion.div>
      </motion.div>

      {/* Global Entrance Split Line */}
      <motion.div 
        initial={{ height: "0%" }}
        animate={{ height: "100%" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-white/15 to-transparent z-30 pointer-events-none" 
      />

      {/* ACADEMY SIDE: The Knowledge Bloom */}
      <motion.div 
        animate={{ flex: hoveredZone === 'academy' ? 7 : hoveredZone === 'dev' ? 3 : 5 }}
        transition={flexTransition}
        onMouseEnter={() => setHoveredZone('academy')}
        onMouseLeave={() => setHoveredZone(null)}
        onClick={() => {
          if (window.innerWidth < 768 && hoveredZone !== 'academy') setHoveredZone('academy');
          else navigate('/academy');
        }}
        data-zone="academy"
        className="relative w-full md:w-auto h-full border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-start md:justify-end p-8 md:p-12 cursor-pointer overflow-hidden group basis-1/2"
      >
        {/* The Knowledge Bloom Mesh */}
        <motion.div 
          animate={{ opacity: hoveredZone === 'academy' ? 1 : 0, scale: hoveredZone === 'academy' ? 1 : 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute -bottom-[20%] -left-[20%] w-[140%] h-[140%] bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,174,239,0.15)_0%,transparent_70%)] pointer-events-none z-0"
        />

        {/* Blueprint Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: hoveredZone === 'academy' ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 blueprint-grid z-0"
        />

        {/* Dropping Study Materials Animation */}
        <DroppingStudyMaterials active={hoveredZone === 'academy'} />

        <div className="z-20 relative pointer-events-none">
          <motion.span 
            animate={{ 
              opacity: hoveredZone === 'academy' ? 1 : 0.4,
              color: hoveredZone === 'academy' ? '#FFFFFF' : '#00AEEF'
            }}
            className="text-xs font-mono tracking-[0.3em] uppercase block mb-2 transition-colors duration-500"
          >
            {splitGatewayContent.desktop.academy.subtitle}
          </motion.span>
          <motion.h2 
            animate={{ 
              scale: hoveredZone === 'academy' ? 1.05 : 1, 
              textShadow: hoveredZone === 'academy' ? "0 0 15px rgba(0,174,239,0.5)" : "none",
              transformOrigin: 'left bottom' 
            }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight font-display"
          >
            {splitGatewayContent.desktop.academy.title}
          </motion.h2>
          
          <div className="relative inline-block pointer-events-auto group/btn">
             <motion.div 
               animate={{ opacity: hoveredZone === 'academy' ? 0.4 : 0 }}
               className="absolute inset-0 bg-[#00AEEF] blur-xl rounded-full transition-opacity duration-500"
             />
             <button 
                className="relative overflow-hidden px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white font-bold rounded-full text-sm transition-all duration-300"
              >
                <div className="absolute inset-0 bg-white translate-y-[101%] group-hover/btn:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                <span className="relative z-10 group-hover/btn:text-[#00AEEF] transition-colors duration-300 flex items-center gap-2">
                  {splitGatewayContent.desktop.academy.cta} <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1.5">→</span>
                </span>
             </button>
          </div>
        </div>
      </motion.div>

      {/* DEVELOPMENT SIDE: The Cybernetic Core */}
      <motion.div 
        animate={{ flex: hoveredZone === 'dev' ? 7 : hoveredZone === 'academy' ? 3 : 5 }}
        transition={flexTransition}
        onMouseEnter={() => setHoveredZone('dev')}
        onMouseLeave={() => setHoveredZone(null)}
        onClick={() => {
          if (window.innerWidth < 768 && hoveredZone !== 'dev') setHoveredZone('dev');
          else navigate('/studio');
        }}
        data-zone="dev"
        className="relative w-full md:w-auto h-full flex flex-col justify-end p-8 md:p-12 cursor-pointer overflow-hidden group basis-1/2"
      >
        {/* Deep Purple Radial Beam Pulse */}
        <motion.div 
          animate={{ opacity: hoveredZone === 'dev' ? 1 : 0, scale: hoveredZone === 'dev' ? 1 : 0.8 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(123,44,191,0.2)_0%,transparent_60%)] pointer-events-none z-0"
        />

        {/* Marquee Code Stream */}
        <MatrixMarqueeStream active={hoveredZone === 'dev'} />

        {/* SVG Circuit Traces with Neon Nodes */}
        <CircuitTraceWithNodes active={hoveredZone === 'dev'} />

        <div className="z-20 relative pointer-events-none">
          <motion.span 
            animate={{ 
              opacity: hoveredZone === 'dev' ? 1 : 0.4,
              color: hoveredZone === 'dev' ? '#FFFFFF' : '#7B2CBF'
            }}
            className="text-xs font-mono tracking-[0.3em] uppercase block mb-2 transition-colors duration-500"
          >
            {splitGatewayContent.desktop.dev.subtitle}
          </motion.span>
          <motion.h2 
            animate={{ 
              scale: hoveredZone === 'dev' ? 1.05 : 1, 
              textShadow: hoveredZone === 'dev' ? "0 0 20px rgba(123,44,191,0.5)" : "none", 
              transformOrigin: 'left bottom' 
            }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight font-display"
          >
            {splitGatewayContent.desktop.dev.title}
          </motion.h2>
          
          <div className="relative inline-block pointer-events-auto">
             {/* Kinetic CTA Button */}
             <div className="relative rounded-full p-[2px] overflow-hidden group/btn bg-white/10">
               {/* Conic Gradient Border Spinner */}
               <motion.div 
                 animate={{ opacity: hoveredZone === 'dev' ? 1 : 0 }}
                 className="absolute inset-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#7B2CBF_360deg)] animate-spin-gradient pointer-events-none"
               />
               <button 
                 className={`relative block w-full px-8 py-4 text-white font-bold rounded-full text-sm transition-all duration-300 z-10 flex items-center justify-center gap-2
                 ${hoveredZone === 'dev' ? 'shadow-[0_10px_30px_rgba(123,44,191,0.4)] bg-[#110f21]' : 'bg-[#111520]'}`}
               >
                 {splitGatewayContent.desktop.dev.cta} <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1.5">→</span>
               </button>
             </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
    </>
  );
}
