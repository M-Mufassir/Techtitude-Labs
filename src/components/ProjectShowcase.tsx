import { useEffect, useRef } from 'react';
import { animate, scroll } from 'framer-motion';
import { 
  image1, image2, image3, image4, image5, image6, 
  image7, image8, image9, image10, image11, image12, 
  image13, image14, image15 
} from '../assets/images';

export default function ProjectShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cleanups: VoidFunction[] = [];

    const initAnimation = () => {
      if (!containerRef.current || !trackRef.current) return;

      const focalImage = containerRef.current.querySelector('.scaler img') as HTMLElement;
      const layers = containerRef.current.querySelectorAll('.grid > .layer');

      if (!focalImage) return;

      // Reset styles for React Strict Mode
      focalImage.style.width = '';
      focalImage.style.height = '';
      focalImage.style.transform = 'translate(-50%, -50%)';

      // 1. Initial configuration mapping for dimensions
      const naturalWidth = focalImage.offsetWidth;
      const naturalHeight = focalImage.offsetHeight;
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // We set explicit pixel bounds to avoid jumping
      focalImage.style.width = `${vw}px`;
      focalImage.style.height = `${vh}px`;

      // 2. Core Focal Scaler Animation
      cleanups.push(
        scroll(
          animate(focalImage, {
            width: [`${vw}px`, `${naturalWidth}px`],
            height: [`${vh}px`, `${naturalHeight}px`]
          }, {
            ease: [0.42, 0, 0.58, 1] // Global ease to ensure compatibility
          } as any),
          {
            target: trackRef.current as any,
            offset: ['start start', '80% end'] 
          }
        )
      );

      // 3. Staggered Grid Reveal Logic
      const scaleCurves = [
        [0.42, 0, 0.58, 1],
        [0.76, 0, 0.24, 1],
        [0.87, 0, 0.13, 1]
      ];
      
      layers.forEach((layer, idx) => {
        const dynamicEnd = `${1 - (idx * 0.05)} end` as any;
        
        // Reset state
        (layer as HTMLElement).style.opacity = "";
        (layer as HTMLElement).style.transform = "";

        cleanups.push(
          scroll(
            animate(layer, { opacity: [0, 0, 1] }, {
              ease: [0.61, 1, 0.88, 1]
            }),
            { 
              target: trackRef.current as any, 
              offset: ['start start', dynamicEnd]
            }
          )
        );
        
        cleanups.push(
          scroll(
            animate(layer, { scale: [0, 0, 1] }, {
              ease: scaleCurves[idx] as any
            }),
            { 
              target: trackRef.current as any, 
              offset: ['start start', dynamicEnd] 
            }
          )
        );
      });
    };

    // Delay initialization to allow AnimatePresence and ScrollToTop to settle
    const timeoutId = setTimeout(initAnimation, 100);

    return () => {
      clearTimeout(timeoutId);
      cleanups.forEach(c => c());
    };
  }, []);

  return (
    <div className="project-showcase-wrap" ref={containerRef}>
      <style>{`
        /* Local scoped CSS for Project Showcase */
        .project-showcase-wrap {
          --gutter: 2rem;
          background: #070B14;
          overflow: clip;
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          color: #fff;
          position: relative;
        }

        @media (max-width: 600px) {
          .project-showcase-wrap {
            --gutter: 1rem;
          }
        }

        /* INTRO HEADER DECK */
        .project-showcase-header {
          min-height: 100vh;
          display: grid;
          align-content: center;
          max-width: calc(100% - (2 * var(--gutter)));
          padding-left: 48px;
          text-align: left;
          margin: 0 auto;
        }

        .project-showcase-header .fluid {
          font-size: clamp(4rem, 12vw, 12rem);
          line-height: 0.6;
          margin: 0;
          font-family: inherit;
        }

        .project-showcase-header h2.fluid {
          font-size: clamp(0.5rem, 2vw, 1.5rem);
          padding-top: 48px;
          line-height: 1.2;
        }

        /* SCROLL WRAPPER & STICKY CONTAINER */
        .scroll-track {
          min-height: 240vh; /* Creates the scroll runway track */
        }

        .sticky-content {
          min-height: 100vh;
          width: 100vw;
          display: flex;
          place-items: center;
          align-content: center;
          position: sticky;
          top: 0;
          overflow: hidden;
        }

        .ending-section {
          min-height: 100vh;
          display: grid;
          place-items: center;
        }

        /* GRID ARCHITECTURE (5 Columns x 3 Rows) */
        .project-showcase-wrap .grid {
          --offset: 0;
          --container-width: 1600px;
          --gap: clamp(10px, 7.35vw, 80px);

          width: var(--container-width);
          max-width: calc(100% - (2 * var(--gutter)));
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          grid-template-rows: repeat(3, auto);
          gap: var(--gap);
          margin: 0 auto;
          align-content: center;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        /* Responsive adjustments for smaller monitors/tablets */
        @media (max-width: 600px) {
          .project-showcase-wrap .grid {
            grid-template-columns: repeat(3, 1fr);
            --offset: -1;
          }
          .project-showcase-wrap .grid > .layer:nth-of-type(1) {
            display: none; /* Hide outer grid track on mobile devices */
          }
        }

        /* Subgrid Layer Blueprint */
        .project-showcase-wrap .grid > .layer {
          display: grid;
          grid-column: 1 / -1;
          grid-row: 1 / -1;
          grid-template-columns: subgrid;
          grid-template-rows: subgrid;
        }

        /* Layer 1 Structural Rules (Outer Borders) */
        .project-showcase-wrap .grid > .layer:nth-of-type(1) div:nth-of-type(odd) { grid-column: 1; }
        .project-showcase-wrap .grid > .layer:nth-of-type(1) div:nth-of-type(even) { grid-column: -2; }

        /* Layer 2 Structural Rules (Inner Columns) */
        .project-showcase-wrap .grid > .layer:nth-of-type(2) div:nth-of-type(odd) { grid-column: calc(2 + var(--offset)); }
        .project-showcase-wrap .grid > .layer:nth-of-type(2) div:nth-of-type(even) { grid-column: calc(-3 - var(--offset)); }

        /* Layer 3 Structural Rules (Center Vertical Caps) */
        .project-showcase-wrap .grid > .layer:nth-of-type(3) div:first-of-type { grid-column: calc(3 + var(--offset)); grid-row: 1; }
        .project-showcase-wrap .grid > .layer:nth-of-type(3) div:last-of-type { grid-column: calc(3 + var(--offset)); grid-row: -1; }

        /* Card Configurations */
        .project-showcase-wrap .grid img {
          width: 100%;
          aspect-ratio: 4 / 5;
          object-fit: cover;
          border-radius: 1rem;
        }

        /* Main Scaler Focal Element Placement */
        .project-showcase-wrap .grid .scaler {
          position: relative;
          grid-area: 2 / calc(3 + var(--offset));
          z-index: 2;
          width: 100%;
          height: 100%;
        }

        .project-showcase-wrap .scaler img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 1rem;
          will-change: width, height;
        }
      `}</style>
      
      {/* Title Section */}
      <header className="project-showcase-header">
        <h1 className="fluid font-display font-bold">our<br />work.</h1>
        <h2 className="fluid font-mono text-gray-400">Scroll down to explore showcased creative engineering.</h2>
      </header>

      {/* Interactive Canvas Track */}
      <section className="scroll-track" ref={trackRef}>
        <div className="sticky-content">
          <div className="grid">
            
            {/* Layer 1: Outer edges (6 items) */}
            <div className="layer">
              <div><img src={image1} alt="Work 1" /></div>
              <div><img src={image2} alt="Work 2" /></div>
              <div><img src={image3} alt="Work 3" /></div>
              <div><img src={image4} alt="Work 4" /></div>
              <div><img src={image5} alt="Work 5" /></div>
              <div><img src={image6} alt="Work 6" /></div>
            </div>

            {/* Layer 2: Inner columns (6 items) */}
            <div className="layer">
              <div><img src={image7} alt="Work 7" /></div>
              <div><img src={image8} alt="Work 8" /></div>
              <div><img src={image9} alt="Work 9" /></div>
              <div><img src={image10} alt="Work 10" /></div>
              <div><img src={image11} alt="Work 11" /></div>
              <div><img src={image12} alt="Work 12" /></div>
            </div>

            {/* Layer 3: Center column top and bottom (2 items) */}
            <div className="layer">
              <div><img src={image13} alt="Work 13" /></div>
              <div><img src={image14} alt="Work 14" /></div>
            </div>

            {/* Center Scaler Anchor Image (This stars full-screen) */}
            <div className="scaler">
              <img src={image15} alt="Featured Project Focus" />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
