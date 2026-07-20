import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Cpu, Monitor, Zap, Clock, ChevronRight } from "lucide-react";
import Reveal from "../components/Reveal";

// Sub-components
const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("August 2, 2026 09:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 items-center font-mono">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="text-3xl md:text-5xl font-bold text-white bg-white/5 px-4 py-3 rounded-xl border border-white/10">
            {value.toString().padStart(2, '0')}
          </div>
          <span className="text-[10px] text-[#00AEEF] uppercase tracking-widest mt-2">{unit}</span>
        </div>
      ))}
    </div>
  );
};

export default function AcademyHome() {
  const pillars = [
    {
      title: "A/L and O/L ICT Practicals",
      icon: <Code2 size={24} className="text-[#00AEEF]" />,
      desc: "O/L & A/L ICT curriculums mapped to real-world tech industry standards.",
      colSpan: "col-span-1 md:col-span-2",
      bg: "bg-gradient-to-br from-[#00AEEF]/10 to-transparent",
    },
    {
      title: "ICT Fundamentals",
      icon: <Zap size={24} className="text-[#00AEEF]" />,
      desc: "Basics of ICT with Logic theory, Networking fundamentals and Troubleshooting ",
      colSpan: "col-span-1",
      bg: "bg-gradient-to-bl from-pink-500/10 to-transparent",
      
    },
    {
      title: "Basics of Programming",
      icon: <Cpu size={24} className="text-[#00AEEF]" />,
      desc: "Programming Fundamentals including basic core principles like OOP principles",
      colSpan: "col-span-1",
      bg: "bg-gradient-to-br from-[#7B2CBF]/10 to-transparent",
    },
    
    {
      title: "Software Development",
      icon: <Monitor size={24} className="text-[#00AEEF]" />,
      desc: "Python, JavaScript, and C++. The foundation of modern software engineering.",
      colSpan: "col-span-1 md:col-span-2",
      bg: "bg-gradient-to-tr from-[#00AEEF]/5 to-transparent",
    }
    
  ];

  const showcaseProjects = [
    //after first workshop or practical, can update
    { title: "Business Website", type: "Web Development", author: "Mohamed" },
    // { title: "EcoTrack App", type: "Mobile Development", author: "David M." },
    // { title: "Defi Exchange UI", type: "UI/UX Design", author: "Aisha T." },
  ];

  return (
    <div className="min-h-screen bg-[#070B14] text-white pt-32 pb-24 selection:bg-[#00AEEF]/30 overflow-clip">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HERO SECTION */}
        <section className="relative mb-32">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00AEEF]/20 blur-[150px] rounded-full pointer-events-none" />
          
          <Reveal>
            <div className="flex flex-col items-center text-center relative z-10">
              <span className="px-4 py-1.5 rounded-full border border-[#00AEEF]/30 bg-[#00AEEF]/10 text-[#00AEEF] text-xs font-mono tracking-widest uppercase mb-6 inline-block">
                The Academy Division
              </span>
              <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-8 max-w-4xl leading-tight">
                Engineering the <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00AEEF] to-white">Next Generation.</span>
              </h1>
              <p className="text-[#8A99AD] text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
                We don't just teach theory. We build full-stack developers, AI engineers, and product designers through rigorous, project-based curriculums.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/courses" className="px-8 py-4 bg-[#00AEEF] hover:bg-[#009ee0] text-[#070B14] font-bold rounded-full transition-all duration-300 font-display flex items-center gap-2">
                  Explore Curriculums <ArrowRight size={18} />
                </Link>
                <Link to="/builds" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-full transition-all duration-300 font-display">
                  Final Year Projects
                </Link>
              </div>
            </div>
          </Reveal>
        </section>

        {/* BENTO GRID: CORE FIELDS */}
        <section className="mb-32">
          <Reveal>
            <h2 className="text-3xl font-bold font-display mb-10 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-[#00AEEF]"></span>
              Core Disciplines
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <Reveal key={idx} delay={idx * 0.1} className={pillar.colSpan}>
                <div className={`h-full ${pillar.bg} border border-white/5 rounded-3xl p-8 hover:border-[#00AEEF]/30 transition-colors duration-500 group relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
                    {pillar.icon}
                  </div>
                  <div className="w-12 h-12 bg-[#070B14] rounded-2xl flex items-center justify-center border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {pillar.icon}
                  </div>
                  <h3 className="text-2xl font-bold font-display mb-3">{pillar.title}</h3>
                  <p className="text-[#8A99AD] leading-relaxed">{pillar.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* LIVE COUNTDOWN / UPCOMING HUB */}
        <section className="mb-32 relative">
          <Reveal>
            <div className="bg-gradient-to-r from-[#0B101E] to-[#070B14] border border-white/10 rounded-3xl p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00AEEF]/10 blur-[100px] pointer-events-none" />
              
              <div className="relative z-10 max-w-xl">
                <div className="flex items-center gap-2 text-[#00AEEF] font-mono text-sm uppercase tracking-widest mb-4">
                  <Clock size={16} /> Next Masterclass
                </div>
                <h2 className="text-4xl font-bold font-display mb-4">Grade 10 & 11 O/L ICT - HTML Fundamentals Module</h2>
                <p className="text-[#8A99AD] mb-8">Join our ICT workshop and learn HTML fundamentals through practical sessions. Build your first webpage, understand web structures, and develop essential skills for your O/L ICT journey.</p>
                <Link to="/workshops" className="inline-flex items-center gap-2 text-white font-bold hover:text-[#00AEEF] transition-colors border-b border-white/20 pb-1 hover:border-[#00AEEF]">
                  View All Workshops <ChevronRight size={16} />
                </Link>
              </div>

              <div className="relative z-10 w-full lg:w-auto flex justify-center">
                <Countdown />
              </div>
            </div>
          </Reveal>
        </section>

        {/* SHOWCASE PREVIEW */}
        <section>
          <Reveal>
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
              <div>
                <h2 className="text-3xl font-bold font-display mb-2 flex items-center gap-4">
                  <span className="w-8 h-[2px] bg-[#00AEEF]"></span>
                  Innovation Lab
                </h2>
                <p className="text-[#8A99AD]">Recent projects shipped by our students.</p>
              </div>
              <Link to="/student-showcase" className="px-6 py-2 border border-white/10 rounded-full text-sm font-bold hover:bg-white/5 transition-colors">
                View Gallery
              </Link>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {showcaseProjects.map((project, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="group cursor-pointer">
                  <div className="aspect-[4/3] bg-[#0B101E] border border-white/5 rounded-2xl mb-4 overflow-hidden relative">
                    {/* Placeholder for project image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Code2 size={48} className="text-white/10 group-hover:scale-110 transition-transform duration-500 group-hover:text-[#00AEEF]/20" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-display mb-1 group-hover:text-[#00AEEF] transition-colors">{project.title}</h3>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#8A99AD]">{project.type}</span>
                    <span className="font-mono text-white/50">{project.author}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
