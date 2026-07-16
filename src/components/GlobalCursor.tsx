import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function GlobalCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [hoveredButtonRect, setHoveredButtonRect] = useState<DOMRect | null>(null);
  const [hoveredZone, setHoveredZone] = useState<'academy' | 'dev' | null>(null);

  const location = useLocation();

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [rawX, rawY, isVisible]);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Determine snap rect
      const snapTarget = target.closest('button, a, [role="button"], [data-cursor-magnetic]');
      if (snapTarget) {
        setHoveredButtonRect(snapTarget.getBoundingClientRect());
      } else {
        setHoveredButtonRect(null);
      }

      // Determine theme override from hovered element (useful for SplitGateway)
      const zoneTarget = target.closest('[data-zone]');
      if (zoneTarget) {
        setHoveredZone(zoneTarget.getAttribute('data-zone') as 'academy' | 'dev');
      } else {
        setHoveredZone(null);
      }
    };
    
    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  const isSnapped = hoveredButtonRect !== null;

  useEffect(() => {
    if (isSnapped && hoveredButtonRect) {
      cursorX.set(hoveredButtonRect.left + hoveredButtonRect.width / 2);
      cursorY.set(hoveredButtonRect.top + hoveredButtonRect.height / 2);
    } else {
      cursorX.set(coords.x);
      cursorY.set(coords.y);
    }
  }, [coords, isSnapped, hoveredButtonRect, cursorX, cursorY]);

  if (!isVisible) return null;

  const path = location.pathname;
  const isAcademyRoute = ['/academy', '/courses', '/workshops', '/builds', '/student-showcase'].includes(path);
  const isDevRoute = ['/studio', '/services', '/portfolio', '/process'].includes(path);
  
  const activeZone = hoveredZone || (isAcademyRoute ? 'academy' : isDevRoute ? 'dev' : null);
  const isAcademy = activeZone === 'academy';
  const isDev = activeZone === 'dev';

  let width = 40;
  let height = 40;
  let borderRadius = '50%';
  let border = '2px solid rgba(255, 255, 255, 0.2)';
  let boxShadow = 'none';

  if (isSnapped && hoveredButtonRect) {
    width = hoveredButtonRect.width;
    height = hoveredButtonRect.height;
    borderRadius = '9999px';
    if (isAcademy) {
      border = '2px solid #00AEEF';
      boxShadow = '0 0 20px rgba(0,174,239,0.4)';
    } else if (isDev) {
      border = '2px solid #7B2CBF';
      boxShadow = '0 0 20px rgba(123,44,191,0.4)';
    } else {
      border = '2px solid rgba(255,255,255,0.5)';
      boxShadow = '0 0 20px rgba(255,255,255,0.1)';
    }
  } else if (isAcademy) {
    border = '2px solid #00AEEF';
    boxShadow = '0 0 15px rgba(0,174,239,0.3)';
  } else if (isDev) {
    border = 'transparent'; 
    borderRadius = '0%';
    boxShadow = 'none';
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
      <motion.div
        className="absolute top-0 left-0 pointer-events-none"
        style={{ x: smoothX, y: smoothY }}
      >
        <motion.div
          className="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
          animate={{ width, height, borderRadius, border, boxShadow }}
          transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.5 }}
        >
          <motion.div 
            className="absolute inset-0 w-full h-full"
            animate={{ 
              opacity: isDev && !isSnapped ? 1 : 0, 
              scale: isDev && !isSnapped ? 1 : 0.5, 
              rotate: isDev && !isSnapped ? 0 : 45 
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#7B2CBF] -translate-y-1/2 shadow-[0_0_8px_#7B2CBF]"></div>
            <div className="absolute top-0 left-1/2 w-[2px] h-full bg-[#7B2CBF] -translate-x-1/2 shadow-[0_0_8px_#7B2CBF]"></div>
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#7B2CBF]"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#7B2CBF]"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#7B2CBF]"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#7B2CBF]"></div>
            
            <div className="absolute top-full left-full mt-2 ml-2 text-[10px] font-mono text-[#7B2CBF] whitespace-nowrap tracking-wider font-bold" style={{ textShadow: '0 0 5px rgba(123,44,191,0.8)' }}>
              SYS_LOC // X:{coords.x} Y:{coords.y}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute top-0 left-0 w-1.5 h-1.5 pointer-events-none"
        style={{ x: rawX, y: rawY }}
      >
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white rounded-full mix-blend-difference"></div>
      </motion.div>
    </div>
  );
}
