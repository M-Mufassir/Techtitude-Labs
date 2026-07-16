import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import TraceBackground from "../components/TraceBackground";
import Reveal from "../components/Reveal";
import { services, stats, values } from "../data/content";

export default function Home() {
  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative pt-40 pb-28 px-6 overflow-hidden">
        <TraceBackground />
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="inline-flex items-center gap-2 font-mono text-xs text-accent border border-accent/30 rounded-full px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              &gt; empowering_next_gen_innovators.exe
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mt-6 max-w-4xl">
              Learn. Build.{" "}
              <span className="text-gradient">Innovate.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-muted text-lg">
              We bridge education and industry through hands-on training,
              real-world projects, and software that helps businesses grow —
              turning ideas into real-world impact.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-wrap gap-4">
              <NavLink
                to="/courses"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-sm font-medium text-void hover:bg-accent-glow transition-colors"
              >
                Explore courses <ArrowUpRight size={16} />
              </NavLink>
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full glass glass-hover px-6 py-3 font-mono text-sm text-ink"
              >
                Talk to us
              </NavLink>
            </div>
          </Reveal>

          {/* stats bento strip */}
          <Reveal delay={0.4}>
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="glass glass-hover rounded-2xl p-6">
                  <div className="font-display text-3xl font-bold text-accent">{s.value}</div>
                  <div className="font-mono text-xs text-muted mt-2">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES BENTO */}
      <section className="relative px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="font-mono text-xs text-accent">// what we do</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 max-w-lg">
              Education and software, under one roof.
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) * 0.05} className={s.span}>
                <div className="h-full glass glass-hover rounded-2xl p-6 flex flex-col justify-between min-h-[150px]">
                  <span className="font-mono text-xs text-muted">0{i + 1}</span>
                  <div>
                    <h3 className="font-display font-semibold text-lg mt-4">{s.title}</h3>
                    <p className="text-muted text-sm mt-2">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-8">
              <NavLink
                to="/services"
                className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:text-accent-glow"
              >
                See all services <ArrowUpRight size={16} />
              </NavLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative px-6 py-24 border-t border-elevated">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="font-mono text-xs text-accent">// what drives us</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 max-w-lg">
              Core values, not wall art.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap gap-3">
              {values.map((v) => (
                <span
                  key={v}
                  className="font-mono text-sm text-muted border border-elevated rounded-full px-4 py-2 hover:border-accent/40 hover:text-ink transition-colors"
                >
                  {v}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-24">
        <Reveal>
          <div className="max-w-6xl mx-auto glass rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-accent/20 blur-[100px]" />
            <h2 className="font-display font-bold text-3xl sm:text-4xl relative">
              Ready to build something real?
            </h2>
            <p className="text-muted mt-4 max-w-md mx-auto relative">
              Whether it's a course, a final year project, or a full product —
              let's talk about what you're trying to build.
            </p>
            <NavLink
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 font-mono text-sm font-medium text-void hover:bg-accent-glow transition-colors relative"
            >
              Get in touch <ArrowUpRight size={16} />
            </NavLink>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
