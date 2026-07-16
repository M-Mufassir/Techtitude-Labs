import { motion } from "framer-motion";
import { Clock, MapPin, Users, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import { workshops } from "../data/content";

export default function Workshops() {

  return (
    <div className="min-h-screen bg-[#070B14] text-white pt-32 pb-24 selection:bg-[#00AEEF]/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <section className="mb-20 text-center md:text-left">
          <Reveal>
            <span className="px-4 py-1.5 rounded-full border border-[#00AEEF]/30 bg-[#00AEEF]/10 text-[#00AEEF] text-xs font-mono tracking-widest uppercase mb-6 inline-block">
              Community Hub
            </span>
            <h1 className="text-5xl md:text-6xl font-bold font-display tracking-tight mb-6">
              Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00AEEF] to-white">Masterclasses</span>
            </h1>
            <p className="text-[#8A99AD] text-lg max-w-2xl leading-relaxed">
              Join our intense, focused workshops covering everything from advanced system architecture to AI engineering. Build alongside industry veterans.
            </p>
          </Reveal>
        </section>

        {/* TIMELINE LEDGER */}
        <section>
          <Reveal>
            <div className="w-full overflow-x-auto pb-8">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-white/10 text-sm font-mono text-[#8A99AD] uppercase tracking-wider">
                    <th className="py-4 px-6 font-normal">Date & Time</th>
                    <th className="py-4 px-6 font-normal">Workshop</th>
                    <th className="py-4 px-6 font-normal">Details</th>
                    <th className="py-4 px-6 font-normal text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {workshops.map((ws, idx) => (
                    <motion.tr 
                      key={ws.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group cursor-pointer"
                    >
                      {/* DATE */}
                      <td className="py-6 px-6 align-top">
                        <div className="font-bold font-display text-lg mb-1 group-hover:text-[#00AEEF] transition-colors">{ws.date}</div>
                        <div className="text-sm text-[#8A99AD] flex items-center gap-2">
                          <Clock size={14} /> {ws.time}
                        </div>
                      </td>
                      
                      {/* TITLE */}
                      <td className="py-6 px-6 align-top">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono border border-white/10 text-white/70">
                            {ws.tag}
                          </span>
                        </div>
                        <div className="font-bold text-xl mb-1">{ws.title}</div>
                        <div className="text-sm text-[#8A99AD]">by {ws.instructor}</div>
                      </td>

                      {/* DETAILS */}
                      <td className="py-6 px-6 align-top text-sm text-[#8A99AD]">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin size={14} /> {ws.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users size={14} /> {ws.capacity}
                        </div>
                      </td>

                      {/* ACTION */}
                      <td className="py-6 px-6 align-top text-right">
                        {ws.status === "Waitlist" ? (
                          <button className="px-6 py-2 border border-white/10 text-[#8A99AD] rounded-full text-sm font-bold opacity-70 cursor-not-allowed">
                            Waitlist Full
                          </button>
                        ) : (
                          <button className="px-6 py-2 bg-[#00AEEF] hover:bg-[#009ee0] text-[#070B14] rounded-full text-sm font-bold shadow-[0_0_15px_rgba(0,174,239,0.2)] hover:shadow-[0_0_25px_rgba(0,174,239,0.4)] transition-all duration-300 flex items-center justify-end gap-2 ml-auto">
                            Register <ArrowUpRight size={16} />
                          </button>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </section>

      </div>
    </div>
  );
}
