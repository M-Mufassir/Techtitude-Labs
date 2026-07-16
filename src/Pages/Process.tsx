import { Link } from "react-router-dom";
import { ArrowRight, Search, PenTool, Braces, Rocket, ShieldCheck } from "lucide-react";
import Reveal from "../components/Reveal";

export default function Process() {
  const steps = [
    {
      id: "01",
      title: "Discovery & Scope",
      icon: <Search size={24} className="text-[#7B2CBF]" />,
      desc: "We dive deep into your business logic. We don't just take orders; we challenge assumptions and draft a precise technical scope.",
      deliverables: ["Product Requirements Document (PRD)", "System Architecture Draft", "Budget Allocation"],
    },
    {
      id: "02",
      title: "UI/UX & Prototyping",
      icon: <PenTool size={24} className="text-[#7B2CBF]" />,
      desc: "Translating architecture into interactive, high-fidelity prototypes. You see exactly how the product behaves before a single line of code is written.",
      deliverables: ["Interactive Figma Prototype", "Design System", "User Flow Diagrams"],
    },
    {
      id: "03",
      title: "Core Engineering",
      icon: <Braces size={24} className="text-[#7B2CBF]" />,
      desc: "Our elite engineers build the product using scalable, fault-tolerant enterprise stacks (React, Node, Python). We work in 2-week agile sprints.",
      deliverables: ["Frontend Client", "Backend Microservices", "API Endpoints"],
    },
    {
      id: "04",
      title: "QA & Pen Testing",
      icon: <ShieldCheck size={24} className="text-[#7B2CBF]" />,
      desc: "Rigorous testing to break the system. We ensure banking-grade security, cross-browser compatibility, and zero-latency performance.",
      deliverables: ["Automated Test Suites", "Security Audit Report", "Performance Benchmarks"],
    },
    {
      id: "05",
      title: "Deployment & Scaling",
      icon: <Rocket size={24} className="text-[#7B2CBF]" />,
      desc: "Going live. We deploy onto AWS/GCP and set up CI/CD pipelines so your product can scale to millions of users seamlessly.",
      deliverables: ["Production Deployment", "CI/CD Setup", "30-Day Hypercare Support"],
    }
  ];

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
            {steps.map((step, idx) => (
              <div key={step.id} className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-16 items-start group">
                
                {/* Node / Icon */}
                <Reveal delay={0.1}>
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#070B14] border-2 border-[#7B2CBF]/30 shadow-[0_0_20px_rgba(123,44,191,0.2)] group-hover:shadow-[0_0_40px_rgba(123,44,191,0.4)] group-hover:scale-110 group-hover:border-[#7B2CBF] transition-all duration-500 shrink-0">
                    <span className="text-[#7B2CBF] group-hover:scale-110 transition-transform duration-500">{step.icon}</span>
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
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
