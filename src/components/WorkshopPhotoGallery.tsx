import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { workshopSessionImages, workshopPosters } from "../assets/images";

// ─── Types ────────────────────────────────────────────────────────────────────
type Direction = "left" | "right";

interface PhotoItem {
  id: number;
  order: number;
  x: string;
  y: string;
  zIndex: number;
  direction: Direction;
  src: string;
  alt: string;
}

// ─── Photo Generator ──────────────────────────────────────────────────────────
const getPhotos = (isMobile: boolean): PhotoItem[] => [
  {
    id: 1,
    order: 0,
    x: isMobile ? "-130px" : "-320px",
    y: isMobile ? "8px" : "15px",
    zIndex: 50,
    direction: "left",
    src: workshopSessionImages["workshop-1"],
    alt: "Workshop photo 1",
  },
  {
    id: 2,
    order: 1,
    x: isMobile ? "-65px" : "-160px",
    y: isMobile ? "16px" : "32px",
    zIndex: 40,
    direction: "left",
    src: workshopSessionImages["workshop-2"],
    alt: "Workshop photo 2",
  },
  {
    id: 3,
    order: 2,
    x: "0px",
    y: isMobile ? "4px" : "8px",
    zIndex: 30,
    direction: "right",
    src: workshopSessionImages["workshop-3"],
    alt: "Workshop photo 3",
  },
  {
    id: 4,
    order: 3,
    x: isMobile ? "65px" : "160px",
    y: isMobile ? "11px" : "22px",
    zIndex: 20,
    direction: "right",
    src: workshopSessionImages["workshop-4"],
    alt: "Workshop photo 4",
  },
  {
    id: 5,
    order: 4,
    x: isMobile ? "130px" : "320px",
    y: isMobile ? "22px" : "44px",
    zIndex: 10,
    direction: "left",
    src: workshopPosters["ws-poster-1"],
    alt: "Workshop poster",
  },
];



// ─── Individual Photo ─────────────────────────────────────────────────────────
function Photo({
  src,
  alt,
  direction,
  size = 220,
}: {
  src: string;
  alt: string;
  direction: Direction;
  size?: number;
}) {
  const [rotation, setRotation] = useState<number>(0);

  useEffect(() => {
    const randomRotation =
      (Math.floor(Math.random() * 3) + 1) * (direction === "left" ? -1 : 1);
    setRotation(randomRotation);
  }, [direction]);

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      whileTap={{ scale: 1.2, zIndex: 9999 }}
      whileHover={{
        scale: 1.1,
        rotateZ: 2 * (direction === "left" ? -1 : 1),
        zIndex: 9999,
      }}
      whileDrag={{
        scale: 1.1,
        zIndex: 9999,
      }}
      initial={{ rotate: 0 }}
      animate={{ rotate: rotation }}
      style={{
        width: size,
        height: size,
        perspective: 400,
        transform: `rotate(0deg) rotateX(0deg) rotateY(0deg)`,
        zIndex: 1,
        WebkitTouchCallout: "none",
        WebkitUserSelect: "none",
        userSelect: "none",
        touchAction: "none",
      }}
      className="relative mx-auto shrink-0 cursor-grab active:cursor-grabbing"
      draggable={false}
      tabIndex={0}
    >
      <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-xl border border-white/10">
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="w-full h-full object-cover rounded-3xl pointer-events-none select-none"
        />
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
}

// ─── Main Gallery Component ───────────────────────────────────────────────────
export default function WorkshopPhotoGallery({
  animationDelay = 0.5,
}: {
  animationDelay?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, animationDelay * 1000);

    const animationTimer = setTimeout(() => {
      setIsLoaded(true);
    }, (animationDelay + 0.4) * 1000);

    return () => {
      clearTimeout(visibilityTimer);
      clearTimeout(animationTimer);
    };
  }, [animationDelay]);

  const photos = getPhotos(isMobile);
  const size = isMobile ? 140 : 220;

  return (
    <div className="relative w-full py-8">
      {/* Subtle Background Grid Accent */}
      <div className="absolute inset-0 top-[100px] -z-10 h-[300px] w-full bg-transparent bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />

      <p className="my-2 text-center text-xs font-mono font-light uppercase tracking-widest text-[#00AEEF]">
        A Journey Through Visual Stories
      </p>
      <h3 className="z-20 mx-auto max-w-2xl text-center text-3xl font-bold font-display text-white md:text-5xl mb-8">
        Inside Our <span className="text-[#00AEEF]">Workshops</span>
      </h3>

      <div className="relative mb-8 h-[260px] md:h-[350px] w-full items-center justify-center flex">
        <motion.div
          className="relative mx-auto flex w-full max-w-7xl justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            className="relative flex w-full justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
          >
            <div
              className="relative"
              style={{ width: size, height: size }}
            >
              {[...photos].reverse().map((photo) => (
                <motion.div
                  key={photo.id}
                  className="absolute left-0 top-0"
                  style={{ zIndex: photo.zIndex }}
                  initial={{ x: 0, y: 0, opacity: 0 }}
                  animate={{
                    x: isLoaded ? photo.x : 0,
                    y: isLoaded ? photo.y : 0,
                    opacity: isLoaded ? 1 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 70,
                    damping: 12,
                    mass: 1,
                    delay: photo.order * 0.15,
                  }}
                >
                  <Photo
                    src={photo.src}
                    alt={photo.alt}
                    direction={photo.direction}
                    size={size}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="flex w-full justify-center">
        <Link
          to="/builds"
          className="px-6 py-3 rounded-full font-bold text-sm bg-[#00AEEF] text-[#070B14] hover:shadow-[0_0_25px_rgba(0,174,239,0.5)] transition-all duration-300 font-display"
        >
          View All Workshop Stories
        </Link>
      </div>
    </div>
  );
}
