import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { workshopSessionImages, workshopPosters } from "../assets/images";

// ─── Workshop data ────────────────────────────────────────────────────────────
const workshops = [
  {
    id: "ws-001",
    tag: "Grade 10 & 11 — O/L ICT",
    title: "Number Systems & Logic Gates",
    date: "16 Aug 2026  ·  09:00 AM – 12:00 PM",
    location: "MH School of Excellence, Thihariya",
    instructor: "Mohamed Mufassir",
    description:
      "Master number base conversions, binary arithmetic, and logic gate truth tables. Gain a solid foundation in the core mathematics of computer systems through hands-on practical exercises.",
    color: "#00AEEF",
    poster: workshopPosters["ws-poster-1"],
    // 4 unique real photos for the 2×2 grid
    gridImages: [
      workshopSessionImages["workshop-4"],
      workshopSessionImages["workshop-3"],
      workshopSessionImages["workshop-2"],
      workshopSessionImages["workshop-1"],
    ],
    // all 4 real session photos for the lightbox
    allImages: [
      workshopSessionImages["workshop-1"],
      workshopSessionImages["workshop-2"],
      workshopSessionImages["workshop-3"],
      workshopSessionImages["workshop-4"],
    ],
  },
];

// Corner mask classes — order matches the reference component: [3,2,1,0]
const CORNER_CLASSES = [
  "warped-image warped-bottom-right",
  "warped-image warped-bottom-left",
  "warped-image warped-top-right",
  "warped-image warped-top-left",
];

// â”€â”€â”€ Diced Workshop Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function DicedWorkshopSection({
  workshop,
  onImageClick,
  reversed = false,
}: {
  workshop: (typeof workshops)[0];
  onImageClick: (imgs: string[], idx: number) => void;
  reversed?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      if (containerRef.current)
        setIsMobile(containerRef.current.offsetWidth < 900);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full"
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : reversed ? "row-reverse" : "row",
        alignItems: "stretch",
        gap: "3rem",
        padding: "3rem 0",
      }}
    >
      {/* â”€â”€ LEFT: Text content â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: isMobile ? "100%" : "48%",
        }}
      >
        {/* Tag */}
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs tracking-[0.25em] uppercase mb-3 block"
          style={{ color: workshop.color }}
        >
          {workshop.tag}
        </motion.span>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-bold text-white leading-tight mb-0"
          style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
        >
          Workshop on{" "}
          <span
            style={{
              backgroundImage: `linear-gradient(135deg, #ffffff, ${workshop.color})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {workshop.title}
          </span>
        </motion.h2>

        {/* Animated separator */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-1 rounded-full my-5"
          style={{ background: workshop.color }}
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[#8A99AD] leading-relaxed mb-6"
          style={{ fontSize: "1rem" }}
        >
          {workshop.description}
        </motion.p>

        {/* Meta info */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col gap-1.5 mb-8"
        >
          {[
            { label: "Date", value: workshop.date },
            { label: "Location", value: workshop.location },
            { label: "Instructor", value: workshop.instructor },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-start gap-3 text-sm font-mono">
              <span className="text-white/30 w-20 shrink-0">{label}</span>
              <span className="text-white/70">{value}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <button
            onClick={() => onImageClick(workshop.allImages, 0)}
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300"
            style={{
              background: workshop.color,
              color: "#070B14",
              boxShadow: `0 0 0 0 ${workshop.color}`,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = `0 0 24px 4px ${workshop.color}50`)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = `0 0 0 0 ${workshop.color}`)
            }
          >
            View Session Photos
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </motion.div>
      </div>

      {/* â”€â”€ RIGHT: 2Ã—2 Warped image grid â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div
        style={{
          flex: 1,
          maxWidth: isMobile ? "100%" : "52%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "16px",
            width: "100%",
            aspectRatio: "1 / 1",
          }}
        >
          {workshop.gridImages.map((src, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "100%",
                overflow: "hidden",
                borderRadius: "20px",
                cursor: "pointer",
              }}
              onClick={() => onImageClick(workshop.allImages, index)}
              className="group"
            >
              <img
                src={src}
                alt={`${workshop.title} â€” photo ${index + 1}`}
                className={`${CORNER_CLASSES[index]} transition-transform duration-500 group-hover:scale-105`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              {/* hover tint */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center"
                style={{
                  background: `${workshop.color}20`,
                  borderRadius: "20px",
                }}
              >
                <span className="text-white text-xs font-mono tracking-widest uppercase bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm flex items-center gap-1">
                  View <ExternalLink size={12} />
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// â”€â”€â”€ Lightbox â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function Lightbox({
  images,
  startIndex,
  onClose,
}: {
  images: string[];
  startIndex: number;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(startIndex);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-[#070B14]/95 backdrop-blur-xl flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
      >
        <X size={18} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-4 md:left-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors text-white z-10"
      >
        <ChevronLeft size={22} />
      </button>

      <motion.div
        key={idx}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="max-w-4xl w-full flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[idx]}
          className="w-full max-h-[75vh] object-contain rounded-2xl border border-white/10"
        />
        <p className="text-[#8A99AD]/60 text-xs font-mono">
          {idx + 1} / {images.length}
        </p>
      </motion.div>

      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-4 md:right-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors text-white z-10"
      >
        <ChevronRight size={22} />
      </button>
    </motion.div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function Builds() {
  const [lightbox, setLightbox] = useState<{ images: string[]; idx: number } | null>(null);

  return (
    <div className="min-h-screen bg-[#070B14] text-white pt-28 pb-24 selection:bg-[#00AEEF]/30 overflow-clip">
      {/* Ambient glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#00AEEF]/5 blur-[180px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="px-4 py-1.5 rounded-full border border-[#00AEEF]/30 bg-[#00AEEF]/10 text-[#00AEEF] text-xs font-mono tracking-widest uppercase inline-block mb-6">
            Class Gallery
          </span>
          <h1 className="text-5xl md:text-6xl font-bold font-display tracking-tight mb-4">
            Inside Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] via-white to-[#7B2CBF]">
              Workshops.
            </span>
          </h1>
          <p className="text-[#8A99AD] text-lg max-w-2xl leading-relaxed">
            Real moments from every session â€” students learning, building, and growing together.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />

        {/* Workshop sections */}
        {workshops.map((ws, i) => (
          <div key={ws.id}>
            <DicedWorkshopSection
              workshop={ws}
              onImageClick={(imgs, idx) => setLightbox({ images: imgs, idx })}
              reversed={i % 2 !== 0}
            />
            {i < workshops.length - 1 && (
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            images={lightbox.images}
            startIndex={lightbox.idx}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
