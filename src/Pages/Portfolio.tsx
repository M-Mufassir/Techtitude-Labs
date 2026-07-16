import { ArrowUpRight, Code2, Database, Layout } from "lucide-react";
import Reveal from "../components/Reveal";
import { portfolioProjects } from "../data/content";

// Visual icons per project index — kept in component since they're display logic, not content
const PROJECT_VISUALS = [Database, Layout, Code2];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#070B14] text-white pt-32 pb-24 selection:bg-[#7B2CBF]/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <section className="mb-20">
          <Reveal>
            <span className="px-4 py-1.5 rounded-full border border-[#7B2CBF]/30 bg-[#7B2CBF]/10 text-[#7B2CBF] text-xs font-mono tracking-widest uppercase mb-6 inline-block">
              Proof Ledger
            </span>
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold font-display tracking-tight mb-6">
                Case <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#7B2CBF] to-white">Studies.</span>
              </h1>
              <p className="text-[#8A99AD] text-lg leading-relaxed">
                We don't talk about theoretical architectures. We build them. Explore a selection of enterprise systems we've shipped to production.
              </p>
            </div>
          </Reveal>
        </section>

        {/* PROJECTS */}
        <section className="flex flex-col gap-24">
          {portfolioProjects.map((project, idx) => {
            const VisualIcon = PROJECT_VISUALS[idx];
            return (
              <div key={project.id} className="relative">
                {/* Vertical connecting line between projects */}
                {idx !== portfolioProjects.length - 1 && (
                  <div className="absolute left-[39px] md:left-1/2 top-32 bottom-[-96px] w-[2px] bg-gradient-to-b from-[#7B2CBF]/20 to-transparent -translate-x-1/2 z-0 hidden md:block" />
                )}
                
                <Reveal delay={0.1}>
                  <div className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    
                    {/* METRICS & DETAILS (Left/Right) */}
                    <div className="w-full md:w-1/2 z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="font-mono text-sm text-[#7B2CBF] uppercase tracking-widest">{project.client}</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono border border-white/10 text-white/50">{project.category}</span>
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">{project.title}</h2>
                      <p className="text-[#8A99AD] leading-relaxed mb-8 text-lg">{project.description}</p>
                      
                      {/* Metrics Grid */}
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        {project.metrics.map(metric => (
                          <div key={metric.label} className="glass p-4 rounded-xl border border-white/5">
                            <div className="text-2xl md:text-3xl font-bold font-display text-white mb-1">{metric.value}</div>
                            <div className="text-xs font-mono text-[#8A99AD] uppercase tracking-wider">{metric.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map(tech => (
                          <span key={tech} className="px-4 py-2 rounded-full bg-[#0B101E] border border-white/10 text-sm text-[#8A99AD]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* VISUAL PREVIEW (Right/Left) */}
                    <div className="w-full md:w-1/2 z-10">
                      <div className="aspect-[4/3] w-full bg-gradient-to-br from-[#0B101E] to-[#070B14] rounded-3xl border border-white/10 overflow-hidden relative group cursor-pointer">
                        {/* Interactive Glow */}
                        <div className="absolute inset-0 bg-[#7B2CBF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[50px]" />
                        
                        {/* Wireframe / Abstract Visual Placeholder */}
                        <div className="absolute inset-4 border border-white/5 rounded-2xl flex flex-col p-6 overflow-hidden">
                          <div className="flex gap-2 mb-6">
                            <div className="w-3 h-3 rounded-full bg-white/20"></div>
                            <div className="w-3 h-3 rounded-full bg-white/20"></div>
                            <div className="w-3 h-3 rounded-full bg-white/20"></div>
                          </div>
                          <div className="flex-1 flex items-center justify-center relative">
                            <VisualIcon size={80} className="text-[#7B2CBF]/20 group-hover:text-[#7B2CBF]/40 transition-colors duration-500 group-hover:scale-110" />
                          </div>
                        </div>

                        {/* Hover Action */}
                        <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white text-[#070B14] flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          <ArrowUpRight size={24} />
                        </div>
                      </div>
                    </div>

                  </div>
                </Reveal>
              </div>
            );
          })}
        </section>

      </div>
    </div>
  );
}
