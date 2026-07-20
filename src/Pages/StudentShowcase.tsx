import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, ArrowUpRight, Filter } from "lucide-react";
import Reveal from "../components/Reveal";

export default function StudentShowcase() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "AI", "Practicals", "Development"];

  const projects = [
    {
      id: 1,
      title: "Hand Controlled Car",
      category: "AI & Embedded System Model",
      student: "Umar Rashid",
      desc: "A Hand controlled car DIY Project that operate with hand gesture signals - using Open CV library",
      icon: <Cpu size={32} className="text-[#00AEEF]" />,
      colSpan: "col-span-1 md:col-span-2 row-span-2",
      bg: "bg-gradient-to-br from-[#00AEEF]/10 to-[#070B14]",
    },
    // {
    //   id: 2,
    //   title: "DeFi Dashboard",
    //   category: "Web App",
    //   student: "Aisha T.",
    //   desc: "A sleek, responsive web3 dashboard tracking real-time crypto pairs using React and WebSockets.",
    //   icon: <Code2 size={32} className="text-white/50" />,
    //   colSpan: "col-span-1",
    //   bg: "bg-[#0B101E]",
    // },
    // {
    //   id: 3,
    //   title: "EcoTrack",
    //   category: "Mobile App",
    //   student: "David M.",
    //   desc: "React Native application helping users track and offset their daily carbon footprint.",
    //   icon: <MonitorSmartphone size={32} className="text-white/50" />,
    //   colSpan: "col-span-1",
    //   bg: "bg-[#0B101E]",
    // },
    // {
    //   id: 4,
    //   title: "Atlas CRM",
    //   category: "Web App",
    //   student: "Marcus R.",
    //   desc: "A full-stack Next.js CRM system built for local boutique hotels to manage bookings and staff.",
    //   icon: <Code2 size={32} className="text-white/50" />,
    //   colSpan: "col-span-1 md:col-span-2",
    //   bg: "bg-[#0B101E]",
    // },
    // {
    //   id: 5,
    //   title: "VisionScan",
    //   category: "AI Model",
    //   student: "Elena G.",
    //   desc: "Computer vision model detecting structural cracks in civil engineering blueprints.",
    //   icon: <Cpu size={32} className="text-white/50" />,
    //   colSpan: "col-span-1",
    //   bg: "bg-[#0B101E]",
    // }
  ];

  const filteredProjects = projects.filter(
    (p) => activeFilter === "All" || p.category === activeFilter
  );

  return (
    <div className="min-h-screen bg-[#070B14] text-white pt-32 pb-24 selection:bg-[#00AEEF]/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION */}
        <section className="mb-20">
          <Reveal>
            <span className="px-4 py-1.5 rounded-full border border-[#00AEEF]/30 bg-[#00AEEF]/10 text-[#00AEEF] text-xs font-mono tracking-widest uppercase mb-6 inline-block">
              Innovation Lab
            </span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold font-display tracking-tight mb-4">
                  Proof of <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00AEEF] to-white">Work.</span>
                </h1>
                <p className="text-[#8A99AD] text-lg max-w-xl">
                  Explore the production-ready applications, AI pipelines, and systems engineered by our students in the Academy.
                </p>
              </div>
              
              {/* FILTERS */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                <Filter size={16} className="text-[#8A99AD] mr-2 hidden sm:block" />
                {filters.map(f => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`px-5 py-2 rounded-full text-sm font-bold font-display transition-all duration-300 whitespace-nowrap ${
                      activeFilter === f 
                        ? 'bg-[#00AEEF] text-[#070B14] shadow-[0_0_15px_rgba(0,174,239,0.3)]' 
                        : 'border border-white/10 hover:bg-white/5 text-[#8A99AD] hover:text-white'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* BENTO WALL */}
        <section>
          <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            <AnimatePresence>
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`relative group rounded-3xl border border-white/5 overflow-hidden ${project.bg} ${project.colSpan}`}
                >
                  <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                    <div className="flex items-start justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-[#070B14] border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                        {project.icon}
                      </div>
                      <span className="px-3 py-1 rounded-md bg-[#070B14]/50 border border-white/5 font-mono text-xs text-[#8A99AD] backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>

                    <div>
                      <div className="text-sm font-mono text-[#00AEEF] mb-2">{project.student}</div>
                      <h3 className="text-2xl font-bold font-display mb-2 pr-8">{project.title}</h3>
                      <p className="text-[#8A99AD] text-sm line-clamp-2 md:line-clamp-3">{project.desc}</p>
                    </div>
                  </div>

                  {/* Hover Overlay Link Icon */}
                  <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 backdrop-blur-md cursor-pointer hover:bg-[#00AEEF] hover:text-[#070B14]">
                    <ArrowUpRight size={20} />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
