import TraceBackground from "../components/TraceBackground";
import Reveal from "../components/Reveal";
import { values } from "../data/content";
import { Code2, GraduationCap, Network } from "lucide-react";

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
              Techtitude Labs was forged with a singular philosophy: you cannot teach modern technology effectively if you are not actively building it. We exist as a dual-core ecosystem—an Academy that engineers the next generation of talent, and a Studio that builds production-grade software for the industry.
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
                  Traditional academies teach theory. Traditional agencies just write code. We do both, and they feed into each other.
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
                      <p className="text-sm text-gray-500">Delivers world-class enterprise software, staffed by veteran engineers and the top 1% of graduates produced by our Academy.</p>
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
              Whether we are structuring a curriculum for 15-year-olds or deploying a scalable cloud microservice for a global enterprise, our standard remains identical: <strong className="text-white">Clean, scalable, and relentlessly optimized.</strong>
            </p>
            <p className="text-gray-400 leading-relaxed">
              We despise bloat. We hate fragile code. Every syllabus we design and every application we ship is rooted in engineering discipline. We build systems that last, and we teach students how to do the same.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE OF BRAND GROWTH */}
      <section className="px-6 py-32 bg-[#070B14] relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-20">
              <span className="font-mono text-xs text-[#7B2CBF] tracking-widest uppercase block mb-4">Evolution</span>
              <h2 className="font-display font-bold text-4xl text-white">How We Scaled</h2>
            </div>
          </Reveal>

          <div className="relative border-l border-white/10 ml-4 md:ml-1/2 md:-translate-x-px space-y-16">
            {[
              {
                year: "2021",
                title: "The Inception",
                desc: "Started as a specialized tutoring program aimed at bridging the gap in local O/L and A/L ICT curriculums, focusing purely on fundamentals.",
                color: "#00AEEF"
              },
              {
                year: "2022",
                title: "The Code Core Expansion",
                desc: "Launched our first advanced programming bootcamps. Students began moving beyond exams and started building actual software.",
                color: "#4a72d6"
              },
              {
                year: "2024",
                title: "Studio Establishment",
                desc: "Formally launched the Development Studio to handle enterprise client requests. Began architecting custom web systems and automations for local businesses.",
                color: "#7B2CBF"
              },
              {
                year: "2026",
                title: "The Dual-Division Matrix",
                desc: "Unified the Academy and Studio into a seamless, cyclical ecosystem. Producing world-class digital products and the next generation of engineers under one roof.",
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