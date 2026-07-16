import { motion, useScroll, useVelocity, useSpring, useTransform } from "framer-motion";
import TiltCard from "../components/TiltCard";
import Marquee from "../components/Marquee";
import { ArrowRight } from "lucide-react";
import ProjectShowcase from "../components/ProjectShowcase";
import CircuitGrid from "../components/CircuitGrid";

export default function Services() {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  
  const velocityRotationX = useTransform(smoothVelocity, [-1000, 0, 1000], [15, 0, -15]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full min-h-screen bg-[#070B14] overflow-clip"
    >
      {/* 1. Hero Section (The Studio Intro) */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <CircuitGrid active={true} color="#7B2CBF" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7B2CBF]/20 rounded-full blur-[150px] mix-blend-screen" />
        </div>
        
        <div className="z-10 text-center max-w-5xl mx-auto mt-12">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold font-display text-white mb-6 uppercase tracking-tight"
          >
            We Architect Digital <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CBF] to-[#b37be8]">Infrastructure.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-400 font-body max-w-3xl mx-auto"
          >
            Engineering custom software platforms, automation flows, and premium digital products designed to scale infinitely.
          </motion.p>
        </div>
      </section>

      {/* 2. Core Engineering Capabilities */}
      <section className="relative px-6 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TiltCard className="p-8 h-[320px] group border border-white/5 hover:border-[#7B2CBF]/40 flex flex-col justify-end overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7B2CBF]/10 blur-[60px] rounded-full group-hover:bg-[#7B2CBF]/25 transition-colors duration-500" />
            <h3 className="text-2xl font-bold font-display text-white mb-3 relative z-10">Custom Software & Mobile Solutions</h3>
            <p className="text-gray-400 font-body relative z-10 max-w-md">Building native iOS/Android applications and cross-platform ecosystems engineered for high performance.</p>
          </TiltCard>

          <TiltCard className="p-8 h-[320px] group border border-white/5 hover:border-[#7B2CBF]/40 flex flex-col justify-end overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#7B2CBF]/10 blur-[60px] rounded-full group-hover:bg-[#7B2CBF]/25 transition-colors duration-500" />
            <h3 className="text-2xl font-bold font-display text-white mb-3 relative z-10">Next-Gen Web & E-Commerce</h3>
            <p className="text-gray-400 font-body relative z-10 max-w-md">Developing custom web solutions and high-conversion platforms optimized for speed and fluidity.</p>
          </TiltCard>

          <TiltCard className="p-8 h-[320px] group border border-white/5 hover:border-[#7B2CBF]/40 flex flex-col justify-end overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#7B2CBF]/10 blur-[60px] rounded-full group-hover:bg-[#7B2CBF]/25 transition-colors duration-500" />
            <h3 className="text-2xl font-bold font-display text-white mb-3 relative z-10">AI Solutions & Intelligent Automation</h3>
            <p className="text-gray-400 font-body relative z-10 max-w-md">Implementing custom LLM pipelines, BI tools, and automated operations to eliminate overhead.</p>
          </TiltCard>

          <TiltCard className="p-8 h-[320px] group border border-white/5 hover:border-[#7B2CBF]/40 flex flex-col justify-end overflow-hidden">
             <div className="absolute top-0 left-0 w-64 h-64 bg-[#7B2CBF]/10 blur-[60px] rounded-full group-hover:bg-[#7B2CBF]/25 transition-colors duration-500" />
            <h3 className="text-2xl font-bold font-display text-white mb-3 relative z-10">Digital Transformation Suites</h3>
            <p className="text-gray-400 font-body relative z-10 max-w-md">Complete overhauls of legacy business software systems into modern web-based internal tool architectures.</p>
          </TiltCard>
        </div>
      </section>

      {/* 3. The Interactive Tech Stack Matrix */}
      <section className="relative px-6 py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">Tech Stack Matrix</h2>
            <p className="text-gray-400 font-body mb-8">We don't limit ourselves to one tool. We pick the bleeding-edge stack that makes the most sense for the scale of your infrastructure.</p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {/* Frontend */}
            <div className="glass rounded-2xl p-6 border-t-2 border-[#7B2CBF]">
              <h4 className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-6">Frontend Architecture</h4>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"].map(tech => (
                  <span key={tech} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300 font-mono">{tech}</span>
                ))}
              </div>
            </div>
            {/* Backend */}
            <div className="glass rounded-2xl p-6 border-t-2 border-[#b37be8]">
              <h4 className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-6">Backend & Database</h4>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Python", "PostgreSQL", "MongoDB", "AWS", "Vercel"].map(tech => (
                  <span key={tech} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300 font-mono">{tech}</span>
                ))}
              </div>
            </div>
            {/* Automation */}
            <div className="glass rounded-2xl p-6 border-t-2 border-[#e0c4ff]">
              <h4 className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-6">Automation Engines</h4>
              <div className="flex flex-wrap gap-2">
                {["n8n", "Webhooks", "REST APIs", "GraphQL", "Zapier", "Make"].map(tech => (
                  <span key={tech} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300 font-mono">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Production Portfolio via Interactive Showcase */}
      <ProjectShowcase />

      {/* 5. The Execution Roadmap & Conversions */}
      <section className="relative pt-12 pb-24 overflow-hidden border-t border-white/5">
        {/* Client Logos Marquee */}
        <div className="mb-24 opacity-60">
          <Marquee speed={30}>
            {["Acme Corp", "Global Tech", "Stark Industries", "Wayne Enterprises", "Cyberdyne", "Umbrella Corp", "Massive Dynamic"].map((logo) => (
              <span key={logo} className="text-2xl font-display font-bold text-gray-500 uppercase tracking-widest">{logo}</span>
            ))}
          </Marquee>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="glass rounded-3xl p-8 md:p-16 relative overflow-hidden border border-[#7B2CBF]/30">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#7B2CBF]/20 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">Project Ingestion Engine</h2>
                <p className="text-gray-400 font-body text-lg mb-12">Submit your requirements and let's architect the next major leap for your infrastructure.</p>
                
                {/* Roadmap Track */}
                <div className="hidden md:flex flex-col gap-6">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Our Development Pipeline</span>
                  <div className="flex items-center justify-between text-sm text-gray-300 font-mono border-l-2 border-[#7B2CBF]/30 pl-4 space-y-4 flex-col items-start">
                    <div>1. Discovery Framework</div>
                    <div>2. UI/UX Interactive Prototyping</div>
                    <div>3. Agile Engineering</div>
                    <div>4. Automated Testing & Deployment</div>
                  </div>
                </div>
              </div>

              {/* Ingestion Form */}
              <div className="bg-[#070B14]/80 p-8 rounded-2xl border border-white/10">
                <form className="flex flex-col gap-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">Name</label>
                      <input type="text" className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#7B2CBF] transition-colors" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">Email</label>
                      <input type="email" className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#7B2CBF] transition-colors" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">Project Scope</label>
                    <select className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#7B2CBF] transition-colors appearance-none">
                      <option className="bg-[#070B14]">Custom Software / Web App</option>
                      <option className="bg-[#070B14]">E-Commerce Architecture</option>
                      <option className="bg-[#070B14]">AI & Automation Tools</option>
                      <option className="bg-[#070B14]">Digital Transformation</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">Project Details</label>
                    <textarea rows={4} className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#7B2CBF] transition-colors resize-none" />
                  </div>

                  <button type="button" className="mt-4 py-4 w-full bg-[#7B2CBF] text-white font-bold rounded-lg hover:shadow-[0_0_30px_rgba(123,44,191,0.5)] hover:-translate-y-1 transition-all duration-300">
                    Launch Project
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}