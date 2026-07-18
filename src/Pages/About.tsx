import TraceBackground from "../components/TraceBackground";
import Reveal from "../components/Reveal";
import { values } from "../data/content";
import { Code2, GraduationCap, Network, Rocket } from "lucide-react";
import TeamShowcase from "../components/TeamShowcase";

export default function About() {
  return (
    <div className="relative font-body">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 min-h-[80vh] flex flex-col justify-center overflow-hidden">
        <TraceBackground />
        <div className="max-w-5xl mx-auto text-center z-10">
          <Reveal>
            <span className="font-mono text-xs text-[#00AEEF] tracking-widest uppercase">// Our Story & Philosophy</span>
            <h1 className="font-display font-bold text-5xl sm:text-7xl mt-6 text-white leading-tight tracking-tight">
              A hybrid engine of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#7B2CBF]">Learning & Development.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-gray-400 text-lg md:text-xl mt-8 max-w-3xl mx-auto leading-relaxed">
              Techtitude Labs was forged in 2026 with a singular philosophy: you cannot teach modern technology effectively if you are not actively building it. We exist as a dual-core ecosystem from day one—an Academy that engineers the next generation of talent, and a Studio that builds production-grade software for the industry.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SYNERGY EXPLANATION */}
      <section className="px-6 py-24 bg-[#0A0A0C]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00AEEF]/20 to-[#7B2CBF]/20 blur-3xl rounded-full" />
              <div className="glass rounded-3xl p-10 relative z-10 border border-white/5">
                <Network className="text-white mb-6" size={40} strokeWidth={1} />
                <h2 className="text-3xl font-bold font-display text-white mb-4">The Dual-Core Synergy</h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Traditional academies teach theory. Traditional agencies just write code. We're building both, together, from the ground up.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="mt-1 text-[#00AEEF]"><GraduationCap size={20} /></div>
                    <div>
                      <strong className="text-white font-mono text-sm block mb-1">THE ACADEMY</strong>
                      <p className="text-sm text-gray-500">Grooms elite talent, using real-world architectures and constraints sourced directly from our Studio's active client projects.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="mt-1 text-[#7B2CBF]"><Code2 size={20} /></div>
                    <div>
                      <strong className="text-white font-mono text-sm block mb-1">THE STUDIO</strong>
                      <p className="text-sm text-gray-500">Delivers modern, production-grade software, staffed by hands-on engineers and the sharpest talent coming through our Academy.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-6">
              Our Standard for Architecture
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Whether we are structuring a curriculum for a 15-year-old just starting out or deploying a scalable cloud microservice for a client, our standard remains identical: <strong className="text-white">Clean, scalable, and relentlessly optimized.</strong>
            </p>
            <p className="text-gray-400 leading-relaxed">
              We despise bloat. We hate fragile code. Every syllabus we design and every application we ship is rooted in engineering discipline from day one. We're building systems that last, and teaching students how to do the same.
            </p>
          </Reveal>
        </div>
      </section>

      {/* THE JOURNEY BEGINS */}
      <section className="px-6 py-32 bg-[#070B14] relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-20">
              <span className="font-mono text-xs text-[#7B2CBF] tracking-widest uppercase block mb-4">Genesis</span>
              <h2 className="font-display font-bold text-4xl text-white">Our Journey Starts Now</h2>
              <p className="text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed">
                2026 marks year one. Here's the roadmap we're building toward — not a highlight reel of the past, but a commitment to what's next.
              </p>
            </div>
          </Reveal>

          <div className="relative border-l border-white/10 ml-4 md:ml-1/2 md:-translate-x-px space-y-16">
            {[
              {
                year: "Q1 2026",
                title: "The Inception",
                desc: "Techtitude Labs was founded on a simple bet: fuse hands-on industry engineering with modern, practical teaching — no fluff, no outdated syllabus.",
                color: "#00AEEF"
              },
              {
                year: "Q2 2026",
                title: "Studio Goes Live",
                desc: "Opened our Development Studio, taking on real client projects and using every build as a live case study for how modern software should be architected.",
                color: "#4a72d6"
              },
              {
                year: "Q3 2026",
                title: "Academy Launch",
                desc: "Rolling out our first cohort-based programs, built directly from patterns and constraints pulled out of active Studio projects — not textbook theory.",
                color: "#7B2CBF"
              },
              {
                year: "What's Next",
                title: "The Dual-Core Matrix",
                desc: "Scaling both divisions in tandem — more students, more client systems, one continuous feedback loop between what we teach and what we ship.",
                color: "white"
              }
            ].map((node, i) => (
              <Reveal key={node.year} delay={i * 0.1}>
                <div className="relative pl-8 md:pl-0">
                  {/* Timeline Dot */}
                  <div 
                    className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-1 w-3 h-3 rounded-full"
                    style={{ backgroundColor: node.color, boxShadow: `0 0 15px ${node.color}` }}
                  />
                  
                  <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                    <span className="font-mono text-sm mb-2 block" style={{ color: node.color }}>{node.year}</span>
                    <h3 className="text-xl font-bold font-display text-white mb-2">{node.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{node.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-20 glass rounded-3xl p-8 border border-white/5 flex items-center gap-6 max-w-2xl mx-auto">
              <Rocket className="text-[#00AEEF] flex-shrink-0" size={32} strokeWidth={1.5} />
              <p className="text-sm text-gray-400 leading-relaxed">
                We're not pretending to be a legacy institution. We're a new team, moving fast, building in public, and inviting early students and clients to grow with us from the ground floor.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE TEAM */}
      <section className="px-6 py-24 bg-[#0A0A0C] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="font-mono text-xs text-[#00AEEF] tracking-widest uppercase block mb-4">The People Behind The Code</span>
              <h2 className="font-display font-bold text-4xl text-white">Meet the Team</h2>
            </div>
          </Reveal>
          <TeamShowcase />
        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 py-24 border-t border-white/5 bg-[#0A0A0C]">
        <div className="max-w-6xl mx-auto text-center">
          <Reveal>
            <span className="font-mono text-xs text-gray-500 tracking-widest uppercase">// what drives us</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 text-white">
              Core values, not wall art.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {values.map((v) => (
                <span
                  key={v}
                  className="font-mono text-sm text-gray-400 border border-white/5 bg-white/[0.02] rounded-full px-5 py-2 hover:border-[#00AEEF]/40 hover:text-white transition-all cursor-default"
                >
                  {v}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}