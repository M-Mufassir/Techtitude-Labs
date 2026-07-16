import { motion } from "framer-motion";
import Accordion from "../components/Accordion";
import CircuitGrid from "../components/CircuitGrid";
import VelocityReel from "../components/VelocityReel";
import {
  coursesLiveCounters,
  coursesEcosystemCards,
  careerSteps,
  upcomingMasterclasses,
  courseFAQs,
  coursesEnrollmentTracks,
} from "../data/content";

export default function Courses() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full min-h-screen bg-[#070B14] overflow-x-hidden"
    >
      {/* 1. Hero Section (The Awakening) */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Blue Particle/Glow Mesh */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <CircuitGrid active={true} color="#00AEEF" />
          <div className="w-[800px] h-[800px] bg-[#00AEEF]/20 rounded-full blur-[120px]" />
        </div>
        
        <div className="z-10 text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ letterSpacing: "0.2em", opacity: 0, y: 20 }}
            animate={{ letterSpacing: "-0.03em", opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-bold font-display text-white mb-6"
          >
            Next-Gen Technical Literacy.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-400 font-body max-w-2xl mx-auto"
          >
            Bridging the gap between academic theory and bleeding-edge industrial engineering.
          </motion.p>
          
          {/* Live Counters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {coursesLiveCounters.map((counter) => (
              <div key={counter.label} className="text-center">
                <div className="text-4xl font-bold text-[#00AEEF] font-mono">{counter.value}</div>
                <div className="text-xs uppercase tracking-widest text-gray-500 mt-2 font-mono">{counter.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. The Course Ecosystem (Interactive Bento Grid) */}
      <section className="relative px-6 py-24 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-12">The Ecosystem</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesEcosystemCards.map((card) => (
            <div
              key={card.title}
              className={`relative glass rounded-3xl p-8 hover:border-[#00AEEF]/50 transition-colors duration-500 group overflow-hidden ${card.colSpanClass}`}
            >
              <div className={card.glowClass} />
              <div className="relative z-10">
                <span className={`text-xs font-mono tracking-widest uppercase mb-4 block ${card.tagColor}`}>{card.tag}</span>
                <h3 className="text-2xl font-bold font-display text-white mb-4">{card.title}</h3>
                <p className="text-gray-400 font-body max-w-md">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Learning Paths & Career Accelerator */}
      <section className="relative px-6 py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">Career Accelerator</h2>
            <p className="text-gray-400 font-body">Our vertical track takes you from foundational syntax to a fully placed engineer.</p>
          </div>
          <div className="md:w-2/3 relative">
            {/* Vertical Glowing Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#00AEEF]/50 via-[#00AEEF]/20 to-transparent" />
            
            <div className="space-y-12 pl-12 md:pl-20 relative">
              {careerSteps.map((item) => (
                <div key={item.step} className="relative group">
                  {/* Glowing Node */}
                  <div className="absolute -left-12 md:-left-20 top-1 w-3 h-3 rounded-full bg-[#00AEEF] shadow-[0_0_15px_rgba(0,174,239,0.8)]" />
                  <span className="text-sm font-mono text-[#00AEEF] tracking-widest mb-2 block">STEP {item.step}</span>
                  <h3 className="text-2xl font-bold font-display text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 font-body">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Live Hub */}
      <section className="relative px-6 py-24 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-12">Live Hub</h2>
        
        <div className="glass rounded-3xl p-8 mb-16">
          <h3 className="text-xl font-bold font-display text-white mb-6">Upcoming Masterclasses</h3>
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-gray-500 font-mono text-sm">
                  <th className="pb-4 font-normal">Date</th>
                  <th className="pb-4 font-normal">Topic</th>
                  <th className="pb-4 font-normal text-right">Action</th>
                </tr>
              </thead>
              <tbody className="text-white font-body text-sm md:text-base">
                {upcomingMasterclasses.map((mc, idx) => (
                  <tr
                    key={idx}
                    className={`${idx < upcomingMasterclasses.length - 1 ? 'border-b border-white/5' : ''} hover:bg-white/5 transition-colors`}
                  >
                    <td className="py-6">{mc.date}</td>
                    <td className="py-6 font-medium">{mc.topic}</td>
                    <td className="py-6 text-right">
                      <button className="px-5 py-2 bg-[#00AEEF]/10 text-[#00AEEF] hover:bg-[#00AEEF] hover:text-black rounded-full font-semibold transition-all duration-300">
                        Reserve Seat
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <VelocityReel />
      </section>

      {/* 5. Proof & Connection */}
      <section className="relative px-6 py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* FAQ */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-8">Questions?</h2>
            <Accordion items={courseFAQs} />
          </div>

          {/* Enroll Form */}
          <div>
            <div className="glass rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl font-bold font-display text-white mb-6">Enroll in Academy</h2>
              <form className="flex flex-col gap-5">
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white font-body focus:outline-none focus:border-[#00AEEF] transition-colors placeholder:text-gray-600"
                />
                <select className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-gray-400 font-body focus:outline-none focus:border-[#00AEEF] transition-colors appearance-none">
                  <option value="" disabled>Select a Track</option>
                  {coursesEnrollmentTracks.map(track => (
                    <option key={track.value} value={track.value}>{track.label}</option>
                  ))}
                </select>
                <button type="button" className="mt-8 px-8 py-4 bg-[#00AEEF] text-black font-bold rounded-full hover:shadow-[0_0_30px_rgba(0,174,239,0.4)] transition-shadow duration-300">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}