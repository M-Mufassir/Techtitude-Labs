import { Link } from "react-router-dom";
import { ArrowRight, Search, PenTool, Braces, Rocket, ShieldCheck, type LucideIcon } from "lucide-react";
import Reveal from "../components/Reveal";
import { processSteps } from "../data/content";

// Icon map for processSteps iconKey strings
const STEP_ICONS: Record<string, LucideIcon> = { Search, PenTool, Braces, Rocket, ShieldCheck };

export default function Process() {
  return (
    <div className="min-h-screen bg-[#070B14] text-white pt-32 pb-24 selection:bg-[#7B2CBF]/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HERO SECTION */}
        <section className="mb-32 text-center flex flex-col items-center">
          <Reveal>
            <span className="px-4 py-1.5 rounded-full border border-[#7B2CBF]/30 bg-[#7B2CBF]/10 text-[#7B2CBF] text-xs font-mono tracking-widest uppercase mb-6 inline-block">
              Our Methodology
            </span>
            <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-8 max-w-4xl leading-tight">
              The Blueprint to <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#7B2CBF] to-[#b37be8]">Execution.</span>
            </h1>
            <p className="text-[#8A99AD] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              We eliminate technical debt before it starts. Discover our battle-tested 5-step engineering pipeline designed for enterprise scale.
            </p>
            <Link to="/contact" className="px-8 py-4 bg-[#7B2CBF] hover:bg-[#6a24a6] text-white font-bold rounded-full transition-all duration-300 font-display flex items-center justify-center gap-2 mx-auto w-fit shadow-[0_0_20px_rgba(123,44,191,0.3)]">
              Start Your Build <ArrowRight size={18} />
            </Link>
          </Reveal>
        </section>

        {/* THE PIPELINE */}
        <section className="relative">
          {/* Vertical Track Line */}
          <div className="absolute left-[39px] md:left-[50px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#7B2CBF]/50 via-[#7B2CBF]/10 to-transparent z-0" />

          <div className="flex flex-col gap-16 md:gap-24">
            {processSteps.map((step) => {
              const IconComponent = STEP_ICONS[step.iconKey];
              return (
                <div key={step.id} className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-16 items-start group">
                  
                  {/* Node / Icon */}
                  <Reveal delay={0.1}>
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#070B14] border-2 border-[#7B2CBF]/30 shadow-[0_0_20px_rgba(123,44,191,0.2)] group-hover:shadow-[0_0_40px_rgba(123,44,191,0.4)] group-hover:scale-110 group-hover:border-[#7B2CBF] transition-all duration-500 shrink-0">
                      <span className="text-[#7B2CBF] group-hover:scale-110 transition-transform duration-500">
                        <IconComponent size={24} className="text-[#7B2CBF]" />
                      </span>
                    </div>
                  </Reveal>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <Reveal delay={0.2}>
                      <div className="glass p-8 md:p-12 rounded-3xl border border-white/5 hover:border-[#7B2CBF]/30 transition-colors duration-500 hover:bg-white/[0.02]">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-5xl font-bold font-display text-white/5">{step.id}</span>
                          <h2 className="text-3xl font-bold font-display">{step.title}</h2>
                        </div>
                        
                        <p className="text-[#8A99AD] text-lg leading-relaxed mb-8 max-w-3xl">
                          {step.desc}
                        </p>

                        {/* Deliverables List */}
                        <div>
                          <h4 className="text-sm font-mono text-[#7B2CBF] uppercase tracking-widest mb-4">Deliverables</h4>
                          <ul className="flex flex-col gap-3">
                            {step.deliverables.map(del => (
                              <li key={del} className="flex items-center gap-3 text-white/80">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#7B2CBF]" />
                                {del}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}
