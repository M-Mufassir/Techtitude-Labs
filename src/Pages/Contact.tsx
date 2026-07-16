import { type FormEvent, useState } from "react";
import { Mail, Phone, MessageCircle, ArrowUpRight, GraduationCap, Briefcase, ChevronRight, type LucideIcon } from "lucide-react";
import TraceBackground from "../components/TraceBackground";
import Reveal from "../components/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import {
  contactChannels,
  academyCourseOptions,
  studioCapabilityTags,
  studioTimelineOptions,
} from "../data/content";

// Icon map for contactChannels iconKey strings
const CONTACT_ICONS: Record<string, LucideIcon> = { Mail, Phone, MessageCircle };

export default function Contact() {
  const [activeTab, setActiveTab] = useState<'academy' | 'studio'>('academy');
  const [budget, setBudget] = useState<number>(5000);

  function handleAcademySubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const course = data.get("course");
    const background = data.get("background");

    const subject = encodeURIComponent(`Academy Enrollment: ${name} - ${course}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCourse: ${course}\nAcademic Background: ${background}`
    );
    window.location.href = `mailto:techtitude.labs@gmail.com?subject=${subject}&body=${body}`;
  }

  function handleStudioSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const company = data.get("company");
    const timeline = data.get("timeline");
    const details = data.get("details");
    
    // Collect checked tech stacks
    const stacks = Array.from(form.querySelectorAll('input[name="stack"]:checked')).map(el => (el as HTMLInputElement).value).join(', ');

    const subject = encodeURIComponent(`New Project Inquiry: ${company || name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company || "N/A"}\nBudget: $${budget}+\nTimeline: ${timeline}\nTech Stack: ${stacks || "Not specified"}\n\nProject Details:\n${details}`
    );
    window.location.href = `mailto:techtitude.labs@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="relative">
      <section className="relative pt-32 pb-24 px-6 overflow-hidden min-h-screen flex flex-col justify-center">
        <TraceBackground />
        
        <div className="max-w-6xl mx-auto w-full grid xl:grid-cols-12 gap-16 items-start">
          
          {/* LEFT COLUMN: INFO & TABS */}
          <Reveal className="xl:col-span-5 flex flex-col gap-8 xl:sticky xl:top-32">
            <div>
              <h1 className="font-display font-bold text-4xl sm:text-6xl text-white leading-tight">
                Let's build something <span className={activeTab === 'academy' ? "text-[#00AEEF]" : "text-[#7B2CBF]"}>epic.</span>
              </h1>
              <p className="font-mono text-gray-400 text-sm mt-6 leading-relaxed max-w-md">
                // Select your path below. Whether you're looking to master engineering or hire a team to build your next product, we're ready.
              </p>
            </div>

            {/* TAB SELECTOR */}
            <div className="flex bg-[#161618]/80 backdrop-blur-md rounded-2xl p-2 border border-white/10 relative">
              <div 
                className="absolute top-2 bottom-2 left-2 w-[calc(50%-0.5rem)] rounded-xl bg-white/10 transition-transform duration-500 ease-in-out"
                style={{ transform: activeTab === 'academy' ? 'translateX(0)' : 'translateX(100%)' }}
              />
              
              <button 
                onClick={() => setActiveTab('academy')}
                className={`relative z-10 w-1/2 flex items-center justify-center gap-3 py-4 rounded-xl font-bold font-display transition-colors ${activeTab === 'academy' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
              >
                <GraduationCap size={20} className={activeTab === 'academy' ? 'text-[#00AEEF]' : ''} />
                Academy
              </button>
              
              <button 
                onClick={() => setActiveTab('studio')}
                className={`relative z-10 w-1/2 flex items-center justify-center gap-3 py-4 rounded-xl font-bold font-display transition-colors ${activeTab === 'studio' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
              >
                <Briefcase size={20} className={activeTab === 'studio' ? 'text-[#7B2CBF]' : ''} />
                Studio
              </button>
            </div>

            <div className="space-y-4 mt-8 xl:mt-4">
              <p className="text-xs font-mono tracking-widest text-gray-500 uppercase mb-4">Direct Channels</p>
              {contactChannels.map((contact) => {
                const Icon = CONTACT_ICONS[contact.iconKey];
                return (
                  <a
                    key={contact.value}
                    href={contact.link}
                    target={contact.title === "WhatsApp" ? "_blank" : undefined}
                    className="group flex gap-4 items-center p-4 rounded-2xl bg-[#161618]/50 border border-white/5 hover:border-white/20 transition-all"
                  >
                    <div className="h-10 w-10 rounded-full bg-[#070B14] border border-white/5 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors shadow-lg">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-gray-400">{contact.title}</p>
                      <p className="text-white font-medium text-sm mt-1">{contact.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </Reveal>

          {/* RIGHT COLUMN: DYNAMIC FORM ENGINE */}
          <Reveal delay={0.15} className="xl:col-span-7">
            <div className="bg-[#161618]/80 backdrop-blur-xl border border-white/5 rounded-[40px] overflow-hidden shadow-2xl relative min-h-[600px]">
              
              <AnimatePresence mode="wait">
                {activeTab === 'academy' && (
                  <motion.form
                    key="academy-form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleAcademySubmit}
                    className="p-8 md:p-12 flex flex-col gap-6"
                  >
                    <div className="mb-4">
                      <h2 className="text-2xl font-bold font-display text-white">Enroll in Academy</h2>
                      <p className="text-gray-400 font-body text-sm mt-2">Secure your seat in our upcoming batches.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="font-mono text-xs text-gray-400 ml-2">Full Name</label>
                        <input name="name" required placeholder="John Doe" className="mt-2 w-full rounded-2xl bg-[#0A0A0C] border border-white/5 px-5 py-4 text-sm text-white placeholder-gray-600 outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-all" />
                      </div>
                      <div>
                        <label className="font-mono text-xs text-gray-400 ml-2">Email Address</label>
                        <input name="email" type="email" required placeholder="john@example.com" className="mt-2 w-full rounded-2xl bg-[#0A0A0C] border border-white/5 px-5 py-4 text-sm text-white placeholder-gray-600 outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-all" />
                      </div>
                    </div>

                    <div>
                      <label className="font-mono text-xs text-gray-400 ml-2">Select Course Path</label>
                      <div className="mt-2 relative">
                        <select name="course" required className="w-full rounded-2xl bg-[#0A0A0C] border border-white/5 px-5 py-4 text-sm text-white appearance-none outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-all">
                          <option value="" disabled>Choose a track...</option>
                          {academyCourseOptions.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                        <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none rotate-90" size={16} />
                      </div>
                    </div>

                    <div>
                      <label className="font-mono text-xs text-gray-400 ml-2">Current Academic Background</label>
                      <textarea name="background" rows={3} required placeholder="Tell us about your current school/university and any prior programming experience..." className="mt-2 w-full rounded-2xl bg-[#0A0A0C] border border-white/5 px-5 py-4 text-sm text-white placeholder-gray-600 outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] resize-none transition-all" />
                    </div>

                    <button type="submit" className="mt-6 w-full flex items-center justify-center gap-2 rounded-full bg-[#00AEEF] hover:bg-[#009ee0] px-8 py-4 text-[#070B14] text-sm font-bold font-display shadow-[0_0_20px_rgba(0,174,239,0.4)] transition-all duration-300">
                      Submit Application <ArrowUpRight size={18} />
                    </button>
                  </motion.form>
                )}

                {activeTab === 'studio' && (
                  <motion.form
                    key="studio-form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleStudioSubmit}
                    className="p-8 md:p-12 flex flex-col gap-6"
                  >
                    <div className="mb-4">
                      <h2 className="text-2xl font-bold font-display text-white">Start a Project</h2>
                      <p className="text-gray-400 font-body text-sm mt-2">Brief us on your requirements and let's architect a solution.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="font-mono text-xs text-gray-400 ml-2">Name</label>
                        <input name="name" required placeholder="Jane Doe" className="mt-2 w-full rounded-2xl bg-[#0A0A0C] border border-white/5 px-5 py-4 text-sm text-white placeholder-gray-600 outline-none focus:border-[#7B2CBF] focus:ring-1 focus:ring-[#7B2CBF] transition-all" />
                      </div>
                      <div>
                        <label className="font-mono text-xs text-gray-400 ml-2">Company / Organization</label>
                        <input name="company" placeholder="Acme Corp" className="mt-2 w-full rounded-2xl bg-[#0A0A0C] border border-white/5 px-5 py-4 text-sm text-white placeholder-gray-600 outline-none focus:border-[#7B2CBF] focus:ring-1 focus:ring-[#7B2CBF] transition-all" />
                      </div>
                    </div>

                    {/* Interactive Budget Slider */}
                    <div className="mt-2">
                      <div className="flex justify-between items-end mb-4">
                        <label className="font-mono text-xs text-gray-400 ml-2">Estimated Budget (USD)</label>
                        <span className="font-mono text-[#7B2CBF] font-bold">${budget.toLocaleString()}{budget >= 50000 ? '+' : ''}</span>
                      </div>
                      <input 
                        type="range" 
                        min="1000" 
                        max="50000" 
                        step="1000"
                        value={budget}
                        onChange={(e) => setBudget(Number(e.target.value))}
                        className="w-full accent-[#7B2CBF] bg-[#0A0A0C] h-2 rounded-full outline-none"
                      />
                      <div className="flex justify-between text-gray-600 font-mono text-[10px] mt-2 px-2">
                        <span>$1k</span>
                        <span>$50k+</span>
                      </div>
                    </div>

                    {/* Tech Stack Requirements */}
                    <div>
                      <label className="font-mono text-xs text-gray-400 ml-2 block mb-3">Required Capabilities (Optional)</label>
                      <div className="flex flex-wrap gap-2">
                        {studioCapabilityTags.map(tech => (
                          <label key={tech} className="cursor-pointer relative">
                            <input type="checkbox" name="stack" value={tech} className="peer sr-only" />
                            <div className="px-4 py-2 rounded-xl border border-white/10 bg-[#0A0A0C] text-sm text-gray-400 peer-checked:bg-[#7B2CBF]/10 peer-checked:border-[#7B2CBF] peer-checked:text-white transition-all">
                              {tech}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-2">
                      <div>
                        <label className="font-mono text-xs text-gray-400 ml-2">Target Timeline</label>
                        <div className="mt-2 relative">
                          <select name="timeline" required className="w-full rounded-2xl bg-[#0A0A0C] border border-white/5 px-5 py-4 text-sm text-white appearance-none outline-none focus:border-[#7B2CBF] focus:ring-1 focus:ring-[#7B2CBF] transition-all">
                            {studioTimelineOptions.map(opt => (
                              <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                          </select>
                          <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none rotate-90" size={16} />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="font-mono text-xs text-gray-400 ml-2">Project Details</label>
                      <textarea name="details" rows={4} required placeholder="Describe the core problem you are trying to solve..." className="mt-2 w-full rounded-2xl bg-[#0A0A0C] border border-white/5 px-5 py-4 text-sm text-white placeholder-gray-600 outline-none focus:border-[#7B2CBF] focus:ring-1 focus:ring-[#7B2CBF] resize-none transition-all" />
                    </div>

                    <button type="submit" className="mt-2 w-full flex items-center justify-center gap-2 rounded-full bg-[#7B2CBF] hover:bg-[#6a24a6] px-8 py-4 text-white text-sm font-bold font-display shadow-[0_0_20px_rgba(123,44,191,0.4)] transition-all duration-300">
                      Request Consultation <ArrowUpRight size={18} />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </Reveal>

        </div>
      </section>
    </div>
  );
}