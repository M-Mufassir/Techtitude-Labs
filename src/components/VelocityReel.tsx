import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { velocityProjects } from "../data/content";

export default function VelocityReel() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);
  const [velocityDisplay, setVelocityDisplay] = useState("0.00");

  useEffect(() => {
    const dRow1 = row1Ref.current;
    const dRow2 = row2Ref.current;
    const dRow3 = row3Ref.current;

    if (!dRow1 || !dRow2 || !dRow3) return;

    let baselineScrollY = window.scrollY;
    let actualVelocity = 0;
    let dampenedVelocity = 0;
    let positionalOffsets = [0, 0, 0];

    const targetRows = [dRow1, dRow2, dRow3];
    const initialSpeeds = [0.4, 0.6, 0.3];
    const rotationalDirections = [-1, 1, -1];

    let animationFrameId: number;

    const executeVelocityLoop = () => {
      const currentScrollY = window.scrollY;
      actualVelocity = currentScrollY - baselineScrollY;
      baselineScrollY = currentScrollY;

      // Smooth attack and release handling
      const trackingRate = Math.abs(actualVelocity) > Math.abs(dampenedVelocity) ? 0.3 : 0.06;
      dampenedVelocity += (actualVelocity - dampenedVelocity) * trackingRate;

      // Safe bounds limiters
      const boundedVelocity = Math.max(-50, Math.min(50, dampenedVelocity));

      targetRows.forEach((row, idx) => {
        if (window.innerWidth < 768 && idx > 0) return; // Skip hidden rows on mobile

        // Idle motion tracking + scroll interaction injection (reduced speeds)
        positionalOffsets[idx] += (initialSpeeds[idx] * 0.4) * rotationalDirections[idx] * -1;
        positionalOffsets[idx] += boundedVelocity * 0.3 * rotationalDirections[idx];

        // Computational loop resetting structure
        // Assuming card width 400px + 32px margin = 432px
        const singleCardSpan = (row.children[0] as HTMLElement).offsetWidth + 32;
        const maximumWrapLimit = singleCardSpan * velocityProjects.length;

        if (positionalOffsets[idx] <= -maximumWrapLimit) positionalOffsets[idx] += maximumWrapLimit;
        if (positionalOffsets[idx] >= 0) positionalOffsets[idx] -= maximumWrapLimit;

        // Premium 3D Skew and Perspective matrices
        const calculatedSkew = Math.max(-12, Math.min(12, boundedVelocity * -0.25));
        const calculatedRotateY = Math.max(-8, Math.min(8, boundedVelocity * 0.15));
        const calculatedScale = 1 - Math.min(0.04, Math.abs(boundedVelocity) * 0.0008);

        row.style.transform = `translateX(${positionalOffsets[idx]}px) skewX(${calculatedSkew}deg) rotateY(${calculatedRotateY}deg) scale(${calculatedScale})`;
      });

      setVelocityDisplay(Math.abs(boundedVelocity).toFixed(2));
      animationFrameId = requestAnimationFrame(executeVelocityLoop);
    };

    const systemMotionCheck = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!systemMotionCheck) {
      animationFrameId = requestAnimationFrame(executeVelocityLoop);
    } else {
      targetRows.forEach((row) => (row.style.transform = "translateX(0)"));
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const renderCards = (indexSeed: number) => {
    // Render 4 sets of cards to ensure infinite scrolling
    const allCards = [];
    let globalIndex = indexSeed;
    for (let m = 0; m < 4; m++) {
      for (let i = 0; i < velocityProjects.length; i++) {
        const project = velocityProjects[i];
        allCards.push(
          <div key={`card-${m}-${i}`} className="dev-card group">
            <img 
              src={project.image} 
              alt={project.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-opacity duration-500" 
            />
            <div
              className="glow-mesh"
              style={{ background: `radial-gradient(circle at 80% 20%, hsl(${project.hue} 80% 50%), transparent 50%)` }}
            ></div>
            <div className="meta-display">
              <div className="card-top">
                <span className="tag">{project.tag}</span>
                <span className="sys-index">SYS_REF // {String(globalIndex).padStart(4, "0")}</span>
              </div>
              <div>
                <h3 className="title">{project.title}</h3>
                <div className="action-link">
                  Explore Case Study <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </div>
        );
        globalIndex++;
      }
    }
    return allCards;
  };

  return (
    <div className="dev-reel-component w-[100vw] relative left-1/2 -translate-x-1/2">
      <style>{`
        .dev-reel-component {
          background: #070B14;
          color: #FFFFFF;
          padding: 4rem 0;
          position: relative;
          overflow: hidden;
        }

        .reel-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding: 0 clamp(1.5rem, 5vw, 6rem);
          margin-bottom: 4rem;
          max-width: 80rem;
          margin-left: auto;
          margin-right: auto;
        }

        .reel-heading h2 {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(2rem, 4vw, 2.5rem);
          letter-spacing: -0.03em;
          margin: 0;
          color: #FFFFFF;
        }

        .reel-heading .matrix-counter {
          font-family: monospace;
          font-size: 0.75rem;
          color: #00AEEF;
          letter-spacing: 0.1em;
        }

        .reel-heading .matrix-counter span {
          color: #7B2CBF;
        }

        .cyber-rail {
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08) 20%, rgba(255, 255, 255, 0.08) 80%, transparent);
          margin-bottom: 2rem;
          position: relative;
        }

        .cyber-rail.bottom {
          margin-top: 2rem;
          margin-bottom: 0;
        }

        .velocity-gallery-viewport {
          perspective: 1600px;
          perspective-origin: 50% 50%;
          width: 100%;
        }

        .reel-row {
          display: flex;
          width: max-content;
          will-change: transform;
          transform-style: preserve-3d;
        }

        .reel-row + .reel-row { 
          margin-top: 2rem; 
        }

        .dev-card {
          flex: none;
          width: min(400px, 75vw);
          aspect-ratio: 16 / 10;
          margin-right: 2rem;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(11, 16, 30, 0.6);
          backdrop-filter: blur(12px);
          position: relative;
          overflow: hidden;
          transform-style: preserve-3d;
          transition: border-color 0.3s ease;
        }

        .dev-card:hover {
          border-color: rgba(0, 174, 239, 0.3);
        }

        .dev-card .glow-mesh {
          position: absolute;
          inset: 0;
          opacity: 0.15;
          mix-blend-mode: screen;
          pointer-events: none;
        }

        .dev-card .meta-display {
          position: absolute;
          inset: 0;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: linear-gradient(to top, rgba(7, 11, 20, 0.95) 20%, rgba(7, 11, 20, 0.4));
        }

        .dev-card .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .dev-card .tag {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: #00AEEF;
          text-transform: uppercase;
          background: rgba(0, 174, 239, 0.1);
          padding: 4px 10px;
          border-radius: 100px;
        }

        .dev-card .sys-index {
          font-family: monospace;
          font-size: 0.7rem;
          color: #8A99AD;
        }

        .dev-card .title {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 500;
          color: #FFFFFF;
          letter-spacing: -0.01em;
          margin: 0;
        }

        .dev-card .action-link {
          font-size: 0.8rem;
          color: #7B2CBF;
          margin-top: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          cursor: pointer;
        }

        .dev-card .action-link:hover {
          color: #00AEEF;
        }

        @media (prefers-reduced-motion: reduce) {
          .reel-row { transition: none !important; transform: none !important; }
        }
      `}</style>

      <section className="velocity-section">
        <div className="reel-heading">
          <h2>Student Innovation Lab</h2>
          <div className="matrix-counter">ENGINE_VELOCITY // <span>{velocityDisplay}</span> RAD</div>
        </div>

        <div className="cyber-rail top"></div>

        <div className="velocity-gallery-viewport">
          <div className="reel-row" ref={row1Ref}>
            {renderCards(1)}
          </div>
          <div className="reel-row hidden md:flex" ref={row2Ref}>
            {renderCards(100)}
          </div>
          <div className="reel-row hidden md:flex" ref={row3Ref}>
            {renderCards(200)}
          </div>
        </div>

        <div className="cyber-rail bottom"></div>
      </section>
    </div>
  );
}
