import { Link } from "react-router-dom";
import { ArrowRight, Code2, Smartphone, BrainCircuit, Bot } from "lucide-react";
import Reveal from "../components/Reveal";

export default function StudioHome() {
  const capabilities = [
  {
    title: "Software Engineering",
    desc: "Building scalable, secure, and maintainable software solutions tailored for modern businesses and enterprise applications.",
    icon: <Code2 className="text-[#7B2CBF]" size={24} />,
  },
  {
    title: "Mobile App Development",
    desc: "Creating fast, responsive, and intuitive mobile applications for Android, iOS, and cross-platform environments.",
    icon: <Smartphone className="text-[#7B2CBF]" size={24} />,
  },
  {
    title: "AI & Machine Learning",
    desc: "Developing intelligent AI solutions, predictive models, and data-driven systems that automate complex processes.",
    icon: <BrainCircuit className="text-[#7B2CBF]" size={24} />,
  },
  {
    title: "Embedded & Robotics",
    desc: "Designing embedded systems, IoT devices, and robotic solutions with reliable hardware and intelligent software integration.",
    icon: <Bot className="text-[#7B2CBF]" size={24} />,
  },
];

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
            {capabilities.map((cap, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="group glass p-8 rounded-3xl border border-white/5 hover:border-[#7B2CBF]/40 transition-all duration-500 hover:bg-white/[0.02]">
                  <div className="w-14 h-14 rounded-2xl bg-[#0B101E] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                    {cap.icon}
                  </div>
                  <h3 className="text-2xl font-bold font-display mb-3">{cap.title}</h3>
                  <p className="text-[#8A99AD] leading-relaxed">{cap.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ===================== ENGINEERING SHOWCASE ===================== */}
<section className="mb-32">
  <Reveal>
    <div className="text-center mb-12">
      <span className="inline-flex px-4 py-2 rounded-full border border-[#7B2CBF]/30 bg-[#7B2CBF]/10 text-[#7B2CBF] text-xs font-mono tracking-[0.3em] uppercase">
        Engineering Showcase
      </span>

      <h2 className="mt-6 text-4xl md:text-6xl font-bold font-display">
        Building the Future
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-[#8A99AD] text-lg leading-relaxed">
        Discover our latest innovations in Robotics, Artificial Intelligence,
        Embedded Systems, Computer Vision, Machine Learning, and modern software
        engineering through real-world demonstrations and prototypes.
      </p>
    </div>
  </Reveal>

  <Reveal delay={0.1}>
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0B101E] shadow-[0_0_80px_rgba(123,44,191,0.12)]">

      {/* Purple Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[350px] bg-[#7B2CBF]/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative p-4 md:p-8">

        <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">

          <div className="aspect-video">

            <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/CeAxevbaCF0?autoplay=1&mute=1&loop=1&playlist=CeAxevbaCF0&controls=0&rel=0&modestbranding=1&playsinline=1"
            title="Engineering Showcase"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            />

          </div>

        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">

          <span className="px-5 py-2 rounded-full bg-[#7B2CBF]/15 border border-[#7B2CBF]/30 text-[#d1b0ff] text-sm font-medium">
            Robotics
          </span>

          <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm">
            Artificial Intelligence
          </span>

          <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm">
            Machine Learning
          </span>

          <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm">
            Embedded Systems
          </span>

          <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm">
            Computer Vision
          </span>

          <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm">
            IoT
          </span>

          <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm">
            Software Engineering
          </span>

        </div>
      </div>

    </div>
  </Reveal>
</section>


      </div>
    </div>
  );
}
