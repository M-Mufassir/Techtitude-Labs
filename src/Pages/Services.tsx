import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import TraceBackground from "../components/TraceBackground";
import Reveal from "../components/Reveal";
import { services } from "../data/content";

export default function Services() {
  return (
    <div className="relative">
      <section className="relative pt-40 pb-16 px-6 overflow-hidden">
        <TraceBackground />
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="font-mono text-xs text-accent">// services</span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl mt-3 max-w-2xl">
              Eleven ways we help you{" "}
              <span className="text-gradient">build.</span>
            </h1>
            <p className="text-muted text-lg mt-6 max-w-2xl">
              From ICT education to full software delivery — pick a track,
              or combine a few.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.06}>
              <div className="h-full glass glass-hover rounded-2xl p-7 flex flex-col justify-between min-h-[170px]">
                <span className="font-mono text-xs text-muted">0{i + 1}</span>
                <div>
                  <h3 className="font-display font-semibold text-xl mt-4">{s.title}</h3>
                  <p className="text-muted text-sm mt-2">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="max-w-6xl mx-auto mt-14 glass rounded-3xl p-10 text-center relative overflow-hidden">
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-violet/20 blur-[100px]" />
            <h2 className="font-display font-bold text-2xl sm:text-3xl relative">
              Not sure which service fits?
            </h2>
            <p className="text-muted mt-3 relative">
              Tell us what you're trying to build — we'll point you the right way.
            </p>
            <NavLink
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-sm font-medium text-void hover:bg-accent-glow transition-colors relative"
            >
              Start a conversation <ArrowUpRight size={16} />
            </NavLink>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
