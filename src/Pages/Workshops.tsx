import { motion } from "framer-motion";
import { Clock, MapPin, Users, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";

export default function Workshops() {
  const workshops = [
    {
      id: "ws-001",
      title: "Grade 10 & 11 O/L ICT - HTML Fundamentals Module",
      date: "Aug 02, 2026",
      time: "9:00 AM - 12:00 PM",
      location: "Thihariya",
      instructor: "Mohamed Mufassir",
      capacity: "30 Seats",
      status: "Registration Open",
      tag: "HTML",
      registrationLink: "YOUR_GOOGLE_FORM_URL_HERE"
    },
    {
      id: "ws-002",
      title: "Grade 10 & 11 O/L ICT - Flowcharts & Algorithms",
      date: "Aug 09, 2026",
      time: "9:00 AM - 12:00 PM",
      location: "Thihariya",
      instructor: "Mohamed Mufassir",
      capacity: "30 Seats",
      status: "Registration Open",
      tag: "Flowcharts",
      registrationLink: "YOUR_GOOGLE_FORM_URL_HERE"
    },
    {
      id: "ws-003",
      title: "Grade 10 & 11 O/L ICT - Microsoft Excel Essentials",
      date: "Aug 16, 2026",
      time: "9:00 AM - 12:00 PM",
      location: "Thihariya",
      instructor: "Ahamed Ishrath",
      capacity: "30 Seats",
      status: "Registration Open",
      tag: "Excel",
      registrationLink: "YOUR_GOOGLE_FORM_URL_HERE"
    },
    {
      id: "ws-004",
      title: "Grade 10 & 11 O/L ICT - Number Systems & Binary",
      date: "Aug 23, 2026",
      time: "9:00 AM - 12:00 PM",
      location: "Thihariya",
      instructor: "Mohamed Musharraf",
      capacity: "30 Seats",
      status: "Registration Open",
      tag: "Number Systems",
      registrationLink: "YOUR_GOOGLE_FORM_URL_HERE"
    }
  ];

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
            {/* Desktop Table View */}
            <div className="hidden md:block w-full overflow-x-auto pb-8">
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
                          <a 
                            href={ws.registrationLink || "#"} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-[#00AEEF] hover:bg-[#009ee0] text-[#070B14] rounded-full text-sm font-bold shadow-[0_0_15px_rgba(0,174,239,0.2)] hover:shadow-[0_0_25px_rgba(0,174,239,0.4)] transition-all duration-300 flex items-center justify-end gap-2 ml-auto w-fit"
                          >
                            Register <ArrowUpRight size={16} />
                          </a>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden flex flex-col gap-4 pb-8">
              {workshops.map((ws, idx) => (
                <motion.div
                  key={ws.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="border border-white/10 rounded-xl p-5 bg-white/[0.02] flex flex-col gap-4"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono border border-white/10 text-white/70">
                        {ws.tag}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg mb-1">{ws.title}</h3>
                    <div className="text-sm text-[#8A99AD]">by {ws.instructor}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-[#8A99AD] py-4 border-y border-white/5">
                    <div>
                      <div className="font-bold text-white mb-1">{ws.date}</div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} /> 
                        <span className="truncate">{ws.time}</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin size={14} /> 
                        <span className="truncate">{ws.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={14} /> 
                        <span>{ws.capacity}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    {ws.status === "Waitlist" ? (
                      <button className="w-full py-3 border border-white/10 text-[#8A99AD] rounded-full text-sm font-bold opacity-70 cursor-not-allowed">
                        Waitlist Full
                      </button>
                    ) : (
                      <a 
                        href={ws.registrationLink || "#"} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full py-3 bg-[#00AEEF] hover:bg-[#009ee0] text-[#070B14] rounded-full text-sm font-bold shadow-[0_0_15px_rgba(0,174,239,0.2)] hover:shadow-[0_0_25px_rgba(0,174,239,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        Register <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </section>

      </div>
    </div>
  );
}
