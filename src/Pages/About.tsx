import TraceBackground from "../components/TraceBackground";
import Reveal from "../components/Reveal";
import { values } from "../data/content";

export default function About() {
  return (
    <div className="relative">
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <TraceBackground />
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <span className="font-mono text-xs text-accent">// about us</span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl mt-3">
              A technology academy and{" "}
              <span className="text-gradient">innovation hub.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted text-lg mt-6 max-w-2xl">
              Techtitude Labs is a technology education and software
              innovation company dedicated to empowering students,
              professionals, and businesses through practical learning and
              modern digital solutions.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
          <Reveal>
            <div className="glass rounded-2xl p-8 h-full">
              <span className="font-mono text-xs text-accent">01 / mission</span>
              <p className="mt-4 text-ink/90 leading-relaxed">
                To empower students, professionals, and businesses by
                delivering practical technology education, innovative
                software solutions, and industry-focused training that
                transforms ideas into real-world impact.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass rounded-2xl p-8 h-full">
              <span className="font-mono text-xs text-accent">02 / vision</span>
              <p className="mt-4 text-ink/90 leading-relaxed">
                To become a globally recognized technology academy and
                innovation hub — inspiring lifelong learning, developing
                future-ready professionals, and delivering transformative
                digital solutions.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-elevated">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <span className="font-mono text-xs text-accent">// how we work</span>
            <h2 className="font-display font-bold text-3xl mt-3 max-w-xl">
              We bridge education and industry.
            </h2>
            <p className="text-muted mt-4 max-w-2xl">
              Hands-on training, real-world projects, and innovative learning
              experiences — paired with high-quality software delivery that
              helps businesses actually grow. Not theory in isolation, and
              not software built without understanding the people using it.
            </p>
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
    </div>
  );
}