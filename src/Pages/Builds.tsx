import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Filter } from "lucide-react";
import Reveal from "../components/Reveal";
import { Icon } from "../lib/icons";
import { studentBuildImages } from "../assets/images";
import { studentBuildFilters, studentBuilds } from "../data/content";

export default function Builds() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = studentBuilds.filter(
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
                  Student{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00AEEF] to-white">
                    Builds.
                  </span>
                </h1>
                <p className="text-[#8A99AD] text-lg max-w-xl">
                  Explore the Student's Works and Assignments and Workshop Practicals.
                </p>
              </div>

              {/* FILTERS */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                <Filter size={16} className="text-[#8A99AD] mr-2 hidden sm:block" />
                {studentBuildFilters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`px-5 py-2 rounded-full text-sm font-bold font-display transition-all duration-300 whitespace-nowrap ${
                      activeFilter === f
                        ? "bg-[#00AEEF] text-[#070B14] shadow-[0_0_15px_rgba(0,174,239,0.3)]"
                        : "border border-white/10 hover:bg-white/5 text-[#8A99AD] hover:text-white"
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
                  {/* Background image */}
                  {project.imageKey && (
                    <img
                      src={studentBuildImages[project.imageKey as keyof typeof studentBuildImages]}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}

                  {/* Gradient overlay so text stays readable over the image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/70 to-[#070B14]/20 z-[5]" />

                  <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                    <div className="flex items-start justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-[#070B14] border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                        <Icon name={project.icon} size={32} className={project.iconClass} />
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