import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import TraceBackground from "../components/TraceBackground";
import Reveal from "../components/Reveal";
import { courseTracks } from "../data/content";

export default function Courses() {
  return (
    <div className="relative">
      <section className="relative pt-40 pb-16 px-6 overflow-hidden">
        <TraceBackground />
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="font-mono text-xs text-accent">// courses</span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl mt-3 max-w-2xl">
              Structured tracks,{" "}
              <span className="text-gradient">real outcomes.</span>
            </h1>
            <p className="text-muted text-lg mt-6 max-w-2xl">
              Every track pairs theory with hands-on projects — built so what
              you learn is immediately usable.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {courseTracks.map((c, i) => (
            <Reveal key={c.name} delay={(i % 4) * 0.05}>
              <div className="glass glass-hover rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <span className="font-mono text-xs text-accent border border-accent/30 rounded-full px-3 py-1 w-fit shrink-0">
                  {c.tag}
                </span>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-lg">{c.name}</h3>
                  <p className="text-muted text-sm mt-1">{c.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="max-w-4xl mx-auto mt-14 glass rounded-3xl p-10 text-center relative overflow-hidden">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-accent/20 blur-[100px]" />
            <h2 className="font-display font-bold text-2xl sm:text-3xl relative">
              Want the full syllabus and schedule?
            </h2>
            <p className="text-muted mt-3 relative">
              Reach out and we'll send over intake dates and pricing for the track you're interested in.
            </p>
            <NavLink
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-sm font-medium text-void hover:bg-accent-glow transition-colors relative"
            >
              Ask about a course <ArrowUpRight size={16} />
            </NavLink>
          </div>
        </Reveal>
      </section>
    </div>
  );
}