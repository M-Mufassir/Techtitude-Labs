import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageSlideshowProps {
  images: string[];
  alt?: string;
}

/**
 * Autoplaying image slideshow used inside the Proof Ledger project cards.
 * Pauses on hover, supports manual arrow/dot navigation.
 *
 * Expects the ancestor card to carry a `group` class — the arrow/dot
 * controls reveal on `group-hover`, matching the existing card interaction.
 */
export default function ImageSlideshow({ images = [], alt = "" }: ImageSlideshowProps) {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isHovered || images.length <= 1) return;
    
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3200); 
    
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, images.length]);

  // Reset if the images array changes (e.g. different project mounted)
  useEffect(() => {
    setIndex(0);
  }, [images]);

  if (!images.length) return null;

  const goTo = (i: number) => setIndex((i + images.length) % images.length);

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${alt} — screenshot ${i + 1} of ${images.length}`}
          className={`absolute inset-0 w-full h-full object-cover ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            objectPosition: isHovered && i === index ? "bottom" : "top",
            transition: `opacity 700ms ease-out, object-position ${isHovered && i === index ? '4s linear' : '700ms ease-out'}`
          }}
          loading="lazy"
        />
      ))}

      {/* Subtle bottom gradient so controls stay legible over bright screenshots */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goTo(index - 1);
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60 z-10"
            aria-label="Previous screenshot"
          >
            <ChevronLeft size={16} className="text-white" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goTo(index + 1);
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60 z-10"
            aria-label="Next screenshot"
          >
            <ChevronRight size={16} className="text-white" />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                type="button"
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  goTo(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-5 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to screenshot ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}