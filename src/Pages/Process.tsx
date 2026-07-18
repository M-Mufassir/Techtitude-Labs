import { useState  } from "react";
import type {ReactNode} from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Compass, Layers3, Hammer, ShieldCheck, Rocket,
  Code2, Smartphone, BrainCircuit, Cpu
} from "lucide-react";
import Reveal from "../components/Reveal";

type DomainKey = "software" | "webmobile" | "ai" | "hardware";

const DOMAINS: Record<DomainKey, { label: string; icon: ReactNode }> = {
  software: { label: "Software", icon: <Code2 size={14} /> },
  webmobile: { label: "Web & Mobile", icon: <Smartphone size={14} /> },
  ai: { label: "AI & ML", icon: <BrainCircuit size={14} /> },
  hardware: { label: "Hardware", icon: <Cpu size={14} /> },
};

type Step = {
  id: string;
  title: string;
  icon: ReactNode;
  desc: string;
  detail: string;
  deliverables: string[];
  domains: DomainKey[];
};

const steps: Step[] = [
  {
    id: "01",
    title: "Discovery & Scope",
    icon: <Compass size={24} />,
    desc: "We dive into the problem before touching a tool. Constraints, goals, and success metrics get defined and challenged upfront, whatever we're building.",
    detail: "This is where we figure out what's actually being built — a product, a platform, a model, or a device — and draft the technical scope that everything else follows.",
    deliverables: ["Requirements Document", "Technical Scope & Architecture Draft", "Timeline & Budget"],
    domains: ["software", "webmobile", "ai", "hardware"],
  },
  {
    id: "02",
    title: "Design & Prototyping",
    icon: <Layers3 size={24} />,
    desc: "Ideas get translated into something tangible before full commitment — an interface, a data pipeline, or a working proof of concept.",
    detail: "Depending on the project this could mean interactive UI prototypes, model architecture design, or a first-pass circuit and enclosure layout.",
    deliverables: ["Interactive Prototype / Design System", "Architecture or Model Plan", "Feedback Loop with You"],
    domains: ["software", "webmobile", "ai", "hardware"],
  },
  {
    id: "03",
    title: "Core Build",
    icon: <Hammer size={24} />,
    desc: "The heaviest phase. We build in focused, iterative cycles — real progress you can see and test at every stage, not a black box until launch.",
    detail: "Application code, trained models, or physical builds — engineered the same disciplined way, with regular checkpoints instead of a single big reveal.",
    deliverables: ["Working Build / Increment", "Progress Checkpoints", "Documentation as We Go"],
    domains: ["software", "webmobile", "ai", "hardware"],
  },
  {
    id: "04",
    title: "Testing & Validation",
    icon: <ShieldCheck size={24} />,
    desc: "We try to break what we made before anyone else does. Every deliverable is stress-tested against real conditions, not just the happy path.",
    detail: "This spans functional and security testing, model accuracy and edge-case validation, or physical stress and reliability testing — matched to what we built.",
    deliverables: ["Test Reports", "Performance / Accuracy Benchmarks", "Issue Log & Fixes"],
    domains: ["software", "webmobile", "ai", "hardware"],
  },
  {
    id: "05",
    title: "Launch & Support",
    icon: <Rocket size={24} />,
    desc: "Getting it into the real world and making sure it keeps working there. We stay close after handoff instead of disappearing at delivery.",
    detail: "Deployment, release, or field rollout — followed by a defined support window so early issues get caught and fixed fast.",
    deliverables: ["Deployment / Release", "Handoff Documentation", "Post-Launch Support Window"],
    domains: ["software", "webmobile", "ai", "hardware"],
  },
];

export default function Process() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#070B14] text-white pt-32 pb-24 selection:bg-[#7B2CBF]/30">
      <div className="max-w-7xl mx-auto px-6">

        {/* HERO SECTION */}
        <section className="mb-24 text-center flex flex-col items-center">
          <Reveal>
            <span className="px-4 py-1.5 rounded-full border border-[#7B2CBF]/30 bg-[#7B2CBF]/10 text-[#7B2CBF] text-xs font-mono tracking-widest uppercase mb-6 inline-block">
              Our Methodology
            </span>
            <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-8 max-w-4xl leading-tight">
              The Blueprint to <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#7B2CBF] to-[#00AEEF]">
                Execution.
              </span>
            </h1>
            <p className="text-[#8A99AD] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              One disciplined process, applied across everything we build — software, web and mobile products, AI systems, or hardware. Here's how we take an idea from scope to shipped.
            </p>
            <Link to="/contact" className="px-8 py-4 bg-[#7B2CBF] hover:bg-[#6a24a6] text-white font-bold rounded-full transition-all duration-300 font-display flex items-center justify-center gap-2 mx-auto w-fit shadow-[0_0_20px_rgba(123,44,191,0.3)]">
              Start Your Build <ArrowRight size={18} />
            </Link>
          </Reveal>
        </section>

        {/* THE PIPELINE */}
        <section className="relative">
          {/* Vertical Track Line */}
          <div className="absolute left-[39px] md:left-[50px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#7B2CBF]/50 via-[#00AEEF]/20 to-transparent z-0" />

          <div className="flex flex-col gap-16 md:gap-20">
            {steps.map((step) => {
              const isOpen = openId === step.id;
              return (
                <div key={step.id} className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-16 items-start group">

                  {/* Node / Icon */}
                  <Reveal delay={0.1}>
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#070B14] border-2 border-[#7B2CBF]/30 shadow-[0_0_20px_rgba(123,44,191,0.2)] group-hover:shadow-[0_0_40px_rgba(0,174,239,0.35)] group-hover:scale-110 group-hover:border-[#00AEEF]/60 transition-all duration-500 shrink-0 text-[#7B2CBF] group-hover:text-[#00AEEF]">
                      {step.icon}
                    </div>
                  </Reveal>

                  {/* Content */}
                  <div className="flex-1 pt-2 w-full">
                    <Reveal delay={0.2}>
                      <button
                        onClick={() => setOpenId(isOpen ? null : step.id)}
                        className="w-full text-left glass p-8 md:p-12 rounded-3xl border border-white/5 hover:border-[#7B2CBF]/30 transition-colors duration-500 hover:bg-white/[0.02]"
                      >
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div className="flex items-center gap-4">
                            <span className="text-5xl font-bold font-display text-white/5">{step.id}</span>
                            <h2 className="text-3xl font-bold font-display">{step.title}</h2>
                          </div>
                          <span
                            className={`mt-2 shrink-0 text-[#8A99AD] transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                          >
                            <ArrowRight size={20} className="rotate-[-45deg]" />
                          </span>
                        </div>

                        <p className="text-[#8A99AD] text-lg leading-relaxed mb-6 max-w-3xl">
                          {step.desc}
                        </p>

                        {/* Domain chips */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {step.domains.map((d) => (
                            <span
                              key={d}
                              className="flex items-center gap-1.5 text-xs font-mono text-[#8A99AD] border border-white/10 rounded-full px-3 py-1.5 group-hover:border-white/20 transition-colors"
                            >
                              {DOMAINS[d].icon}
                              {DOMAINS[d].label}
                            </span>
                          ))}
                        </div>

                        {/* Expandable detail + deliverables */}
                        <div
                          className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                          }`}
                        >
                          <p className="text-[#8A99AD]/90 text-base leading-relaxed mb-6 border-l-2 border-[#7B2CBF]/40 pl-4">
                            {step.detail}
                          </p>
                          <h4 className="text-sm font-mono text-[#7B2CBF] uppercase tracking-widest mb-4">
                            Deliverables
                          </h4>
                          <ul className="flex flex-col gap-3">
                            {step.deliverables.map((del) => (
                              <li key={del} className="flex items-center gap-3 text-white/80">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#7B2CBF]" />
                                {del}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {!isOpen && (
                          <span className="text-xs font-mono text-[#00AEEF]/70 uppercase tracking-widest">
                            Tap to see deliverables →
                          </span>
                        )}
                      </button>
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