import { motion } from "framer-motion";
import Accordion from "../components/Accordion";
import CircuitGrid from "../components/CircuitGrid";
import { CardStack, type CardStackItem } from "../components/CardStack";
import { velocityReelImages } from "../assets/images";

import workshopImg1 from "../assets/Workshop_Images/images-1-v2.jpeg";
import workshopImg2 from "../assets/Workshop_Images/images-2-v2.jpeg";
import workshopImg3 from "../assets/Workshop_Images/images-3-v2.jpeg";
import workshopImg4 from "../assets/Workshop_Images/images-4-v2.jpg";
import workshopImg5 from "../assets/Workshop_Images/images-5-v2.jpg";

const workshopStudents: CardStackItem[] = [
  { id: 1, title: "Code Core Batch 04", description: "O/L ICT students learning HTML basics.", imageSrc: workshopImg1 },
  { id: 2, title: "React Workshop", description: "Advanced web engineering students building dashboards.", imageSrc: workshopImg2 },
  { id: 3, title: "Python Data Science", description: "Introductory session to data pipelines.", imageSrc: workshopImg3 },
  { id: 4, title: "AI & ML Seminar", description: "Exploring neural networks with our future tech batch.", imageSrc: workshopImg4 },
  { id: 5, title: "UI/UX Prototyping", description: "Figma design workflows in action.", imageSrc: workshopImg5 }
];

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
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00AEEF] font-mono">1.2k+</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 mt-2 font-mono">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00AEEF] font-mono">450+</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 mt-2 font-mono">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00AEEF] font-mono">03</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 mt-2 font-mono">Days to Workshop</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. The Course Ecosystem (Interactive Bento Grid) */}
      <section className="relative px-6 py-24 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-12">The Ecosystem</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 (Double Width) */}
          <div className="lg:col-span-2 relative glass rounded-3xl p-8 hover:border-[#00AEEF]/50 transition-colors duration-500 group overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00AEEF]/10 blur-[60px] rounded-full group-hover:bg-[#00AEEF]/20 transition-colors duration-500" />
            <div className="relative z-10">
              <span className="text-xs font-mono tracking-widest text-[#00AEEF] uppercase mb-4 block">Grade 10 & 11 ICT</span>
              <h3 className="text-2xl font-bold font-display text-white mb-4">Code Core</h3>
              <p className="text-gray-400 font-body max-w-md">Complete syllabus coverage paired with practical programming labs. Designed specifically to build strong foundational logic early.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative glass rounded-3xl p-8 hover:border-[#00AEEF]/50 transition-colors duration-500 group overflow-hidden">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#00AEEF]/10 blur-[40px] rounded-full group-hover:bg-[#00AEEF]/20 transition-colors duration-500" />
            <div className="relative z-10">
              <span className="text-xs font-mono tracking-widest text-gray-500 uppercase mb-4 block">Advanced</span>
              <h3 className="text-2xl font-bold font-display text-white mb-4">Web Engineering</h3>
              <p className="text-gray-400 font-body text-sm">Full-stack architectures, JavaScript ecosystems, and advanced database engineering.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative glass rounded-3xl p-8 hover:border-[#00AEEF]/50 transition-colors duration-500 group overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#00AEEF]/10 blur-[40px] rounded-full group-hover:bg-[#00AEEF]/20 transition-colors duration-500" />
            <div className="relative z-10">
              <span className="text-xs font-mono tracking-widest text-gray-500 uppercase mb-4 block">Future Tech</span>
              <h3 className="text-2xl font-bold font-display text-white mb-4">Next-Gen AI & ML</h3>
              <p className="text-gray-400 font-body text-sm">Neural networks, data science pipelines, and practical implementation of automation models.</p>
            </div>
          </div>

          {/* Card 4 (Double Width on Tablet, Single on Desktop) */}
          <div className="md:col-span-2 lg:col-span-2 relative glass rounded-3xl p-8 hover:border-[#00AEEF]/50 transition-colors duration-500 group overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00AEEF]/10 blur-[60px] rounded-full group-hover:bg-[#00AEEF]/20 transition-colors duration-500" />
            <div className="relative z-10">
              <span className="text-xs font-mono tracking-widest text-gray-500 uppercase mb-4 block">Design</span>
              <h3 className="text-2xl font-bold font-display text-white mb-4">UI/UX & Interactive Design</h3>
              <p className="text-gray-400 font-body max-w-md">Design thinking, high-fidelity wireframing, motion design prototyping, and Figma workflows.</p>
            </div>
          </div>
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
              {[
                { step: "01", title: "Foundational Deep-Dive", desc: "Mastering syntax and structural logic. Building the bedrock of computer science." },
                { step: "02", title: "Final Year Project Guidance", desc: "Dedicated mentorship to architect, build, and deploy production-ready capstone systems." },
                { step: "03", title: "Career Development Bootcamps", desc: "Technical resume building, mock engineering interviews, portfolio optimization, and direct placement drives." }
              ].map((item, i) => (
                <div key={i} className="relative group">
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
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-6">Oct 12, 2026</td>
                  <td className="py-6 font-medium">Building Workflows with Advanced Automations</td>
                  <td className="py-6 text-right">
                    <button className="px-5 py-2 bg-[#00AEEF]/10 text-[#00AEEF] hover:bg-[#00AEEF] hover:text-black rounded-full font-semibold transition-all duration-300">
                      Reserve Seat
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-6">Oct 26, 2026</td>
                  <td className="py-6 font-medium">Modern React Server Components Architecture</td>
                  <td className="py-6 text-right">
                    <button className="px-5 py-2 bg-[#00AEEF]/10 text-[#00AEEF] hover:bg-[#00AEEF] hover:text-black rounded-full font-semibold transition-all duration-300">
                      Reserve Seat
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-24 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">Workshop Students</h2>
            <p className="text-gray-400">Glimpses from our recent active learning sessions and student interactions.</p>
          </div>
          <CardStack 
            items={workshopStudents} 
            autoAdvance={true} 
            className="max-w-4xl mx-auto"
          />
        </div>
      </section>

      {/* 5. Proof & Connection */}
      <section className="relative px-6 py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* FAQ */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-8">Questions?</h2>
            <Accordion items={[
              { title: "Do I need prior coding experience?", content: "Not for the Code Core track. We start from the absolute basics of logic and computational thinking before moving into specific syntax." },
              { title: "Are classes online or in-person?", content: "We offer hybrid models. You can join the live streams from anywhere or attend in-person sessions at our campus." },
              { title: "Do you provide job placement?", content: "Our Career Accelerator bootcamps connect top-performing students directly with our industry partners for internships and junior roles." }
            ]} />
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
                  <option value="" disabled selected>Select a Track</option>
                  <option value="core">Code Core</option>
                  <option value="web">Web Engineering</option>
                  <option value="ai">Next-Gen AI & ML</option>
                  <option value="design">UI/UX Design</option>
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