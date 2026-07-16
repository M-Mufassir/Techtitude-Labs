import { Link } from "react-router-dom";
import { ArrowRight, Terminal, Workflow, Database, Shield, type LucideIcon } from "lucide-react";
import Reveal from "../components/Reveal";
import { studioCapabilities } from "../data/content";

// Icon map for studioCapabilities iconKey strings
const CAP_ICONS: Record<string, LucideIcon> = { Terminal, Workflow, Database, Shield };

export default function StudioHome() {
  return (
    <div className="min-h-screen bg-[#070B14] text-white pt-32 pb-24 selection:bg-[#7B2CBF]/30 overflow-clip">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HERO SECTION */}
        <section className="relative mb-32 flex flex-col items-center text-center">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7B2CBF]/15 blur-[150px] rounded-full pointer-events-none" />
          
          <Reveal>
            <div className="relative z-10">
              <span className="px-4 py-1.5 rounded-full border border-[#7B2CBF]/30 bg-[#7B2CBF]/10 text-[#7B2CBF] text-xs font-mono tracking-widest uppercase mb-6 inline-block">
                The Development Studio
              </span>
              <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-8 max-w-4xl leading-tight">
                We Architect <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#7B2CBF] to-[#b37be8]">Digital Empires.</span>
              </h1>
              <p className="text-[#8A99AD] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Elite software engineering for startups and enterprises. We don't just write code; we design highly scalable, fault-tolerant systems built to conquer the market.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact" className="px-8 py-4 bg-[#7B2CBF] hover:bg-[#6a24a6] text-white font-bold rounded-full transition-all duration-300 font-display flex items-center gap-2 shadow-[0_0_20px_rgba(123,44,191,0.3)]">
                  Start a Project <ArrowRight size={18} />
                </Link>
                <Link to="/portfolio" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-full transition-all duration-300 font-display">
                  View Proof Ledger
                </Link>
              </div>
            </div>
          </Reveal>
        </section>

        {/* CAPABILITIES GRID */}
        <section className="mb-32">
          <Reveal>
            <div className="flex flex-col sm:flex-row justify-between items-end mb-10 gap-4">
              <div>
                <h2 className="text-3xl font-bold font-display mb-2 flex items-center gap-4">
                  <span className="w-8 h-[2px] bg-[#7B2CBF]"></span>
                  Core Capabilities
                </h2>
                <p className="text-[#8A99AD]">Our primary engineering verticals.</p>
              </div>
              <Link to="/services" className="text-sm font-bold text-white hover:text-[#7B2CBF] transition-colors border-b border-white/20 pb-1 hover:border-[#7B2CBF]">
                View All Capabilities →
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studioCapabilities.map((cap, idx) => {
              const IconComponent = CAP_ICONS[cap.iconKey];
              return (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="group glass p-8 rounded-3xl border border-white/5 hover:border-[#7B2CBF]/40 transition-all duration-500 hover:bg-white/[0.02]">
                    <div className="w-14 h-14 rounded-2xl bg-[#0B101E] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                      <IconComponent className="text-[#7B2CBF]" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold font-display mb-3">{cap.title}</h3>
                    <p className="text-[#8A99AD] leading-relaxed">{cap.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* FEATURED CASE STUDY */}
        <section>
          <Reveal>
            <div className="text-center mb-10">
              <span className="text-[#7B2CBF] font-mono text-xs uppercase tracking-widest block mb-2">Featured Project</span>
              <h2 className="text-3xl font-bold font-display">Project Nexus</h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-[#0B101E] rounded-[2rem] border border-white/10 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#070B14] via-[#070B14]/80 to-transparent z-10 p-8 md:p-16 flex flex-col justify-center">
                <div className="max-w-xl">
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 rounded bg-[#7B2CBF]/20 text-[#7B2CBF] text-xs font-mono border border-[#7B2CBF]/30">FinTech</span>
                    <span className="px-3 py-1 rounded bg-white/5 text-white/70 text-xs font-mono border border-white/10">React + Node</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold font-display mb-4">Building a highly scalable trading engine.</h3>
                  <p className="text-[#8A99AD] mb-8 text-sm md:text-base line-clamp-3">
                    We designed and engineered a custom high-frequency trading dashboard capable of processing 10,000+ WebSocket events per second with zero UI latency.
                  </p>
                  <Link to="/portfolio" className="inline-flex items-center gap-2 text-white font-bold hover:text-[#7B2CBF] transition-colors">
                    Read the Case Study <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
              
              {/* Abstract Placeholder Background */}
              <div className="absolute top-0 right-0 w-[60%] h-full opacity-30 group-hover:opacity-60 transition-opacity duration-700">
                <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7B2CBF]/40 via-transparent to-transparent opacity-50 mix-blend-screen" />
              </div>
            </div>
          </Reveal>
        </section>

      </div>
    </div>
  );
}
