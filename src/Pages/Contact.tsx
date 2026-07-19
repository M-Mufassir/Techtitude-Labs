import { type FormEvent, useState } from "react";
import { Mail, Phone, MessageCircle, ArrowUpRight, GraduationCap, Briefcase, ChevronRight } from "lucide-react";
import TraceBackground from "../components/TraceBackground";
import Reveal from "../components/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import WhatsAppButton from "../components/WhatsAppButton";

const contacts = [
  {
    title: "Email",
    value: "techtitude.labs@gmail.com",
    link: "mailto:techtitude.labs@gmail.com",
    icon: Mail,
    description: "For courses, projects & business inquiries",
  },
  {
    title: "WhatsApp",
    value: "+94 74 074 7677",
    link: "https://wa.me/94740747677",
    icon: MessageCircle,
    description: "Fast communication",
  },
  {
    title: "Phone",
    value: "+94 74 074 7677",
    link: "tel:+94740747677",
    icon: Phone,
    description: "General inquiries",
  },
];

export default function Contact() {
  const [activeTab, setActiveTab] = useState<'academy' | 'studio'>('academy');
  const [budget, setBudget] = useState<number>(50000);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  async function handleAcademySubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const location = data.get("location");
    const course = data.get("gradeSelection");
    const intake = data.get("preferredDay");
    const background = data.get("background");

    const subject = `Academy Enrollment: ${name} - ${course}`;
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nLocation: ${location}\nCourse: ${course}\nPreferred Intake: ${intake}\nAcademic Background: ${background}`;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subject, body, senderEmail: email, senderName: name, formType: 'academy' }),
      });

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Your application has been sent successfully!' });
        form.reset();
      } else {
        const errorData = await response.json();
        setSubmitStatus({ type: 'error', message: errorData.error || 'Failed to send application. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'An unexpected error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleStudioSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const company = data.get("company");
    const timeline = data.get("timeline");
    const details = data.get("details");

    // Collect checked tech stacks
    const stacks = Array.from(form.querySelectorAll('input[name="stack"]:checked')).map(el => (el as HTMLInputElement).value).join(', ');

    const subject = `New Project Inquiry: ${company || name}`;
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company || "N/A"}\nBudget: LKR ${budget}+\nTimeline: ${timeline}\nTech Stack: ${stacks || "Not specified"}\n\nProject Details:\n${details}`;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subject, body, senderEmail: email, senderName: name, formType: 'studio' }),
      });

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Your inquiry has been sent successfully! We will get back to you soon.' });
        form.reset();
        setBudget(50000); // reset budget slider
      } else {
        const errorData = await response.json();
        setSubmitStatus({ type: 'error', message: errorData.error || 'Failed to send inquiry. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'An unexpected error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  }

  // Clear status when switching tabs
  const handleTabSwitch = (tab: 'academy' | 'studio') => {
    setActiveTab(tab);
    setSubmitStatus({ type: null, message: '' });
  };

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
                onClick={() => handleTabSwitch('academy')}
                className={`relative z-10 w-1/2 flex items-center justify-center gap-3 py-4 rounded-xl font-bold font-display transition-colors ${activeTab === 'academy' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
              >
                <GraduationCap size={20} className={activeTab === 'academy' ? 'text-[#00AEEF]' : ''} />
                Academy
              </button>

              <button
                onClick={() => handleTabSwitch('studio')}
                className={`relative z-10 w-1/2 flex items-center justify-center gap-3 py-4 rounded-xl font-bold font-display transition-colors ${activeTab === 'studio' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
              >
                <Briefcase size={20} className={activeTab === 'studio' ? 'text-[#7B2CBF]' : ''} />
                Studio
              </button>
            </div>

            <div className="space-y-4 mt-8 xl:mt-4">
              <p className="text-xs font-mono tracking-widest text-gray-500 uppercase mb-4">Direct Channels</p>
              {contacts.map((contact) => {
                const Icon = contact.icon;
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

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="font-mono text-xs text-gray-400 ml-2">Phone Number</label>
                        <input name="phone" type="tel" required placeholder="+94 7X XXX XXXX" className="mt-2 w-full rounded-2xl bg-[#0A0A0C] border border-white/5 px-5 py-4 text-sm text-white placeholder-gray-600 outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-all" />
                      </div>
                      <div>
                        <label className="font-mono text-xs text-gray-400 ml-2">City / Location</label>
                        <input name="location" required placeholder="Colombo, Sri Lanka" className="mt-2 w-full rounded-2xl bg-[#0A0A0C] border border-white/5 px-5 py-4 text-sm text-white placeholder-gray-600 outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-all" />
                      </div>
                    </div>

                    <div className="w-full flex flex-col sm:flex-row items-center gap-6 font-sans">

                      {/* LEFT SIDE: GRADE SELECTION DROPDOWN */}
                      <div className="w-full flex flex-col items-start group">
                        <label htmlFor="gradeSelection" className="font-mono text-[10px] text-white/40 tracking-wider uppercase mb-2">
                          Select Academic Class
                        </label>
                        <div className="relative w-full">
                          <select
                            id="gradeSelection"
                            name="gradeSelection"
                            required
                            defaultValue=""
                            className="w-full h-12 px-4 bg-[#0b101e]/60 border border-[#00AEEF] text-white text-xs rounded-xl appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#00AEEF]/50 transition-all duration-300 font-medium"
                          >
                            <option value="" disabled className="bg-[#070B14] text-white/50">Choose a class...</option>
                            <option value="grade-6" className="bg-[#070B14] text-white">Grade 6 ICT </option>
                            <option value="grade-7" className="bg-[#070B14] text-white">Grade 7 ICT </option>
                            <option value="grade-8" className="bg-[#070B14] text-white">Grade 8 ICT </option>
                            <option value="grade-9" className="bg-[#070B14] text-white">Grade 9 ICT </option>
                            <option value="grade-10" className="bg-[#070B14] text-white">Grade 10 ICT</option>
                            <option value="grade-11" className="bg-[#070B14] text-white">Grade 11 ICT</option>
                          </select>
                          {/* Premium Custom Micro-Chevron Indicator */}
                          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-white/40 group-hover:text-[#00AEEF] transition-colors duration-300">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* RIGHT SIDE: PREFERRED DAY DROPDOWN */}
                      <div className="w-full flex flex-col items-start group">
                        <label htmlFor="preferredDay" className="font-mono text-[10px] text-white/40 tracking-wider uppercase mb-2">
                          Preferred Batch Day
                        </label>
                        <div className="relative w-full">
                          <select
                            id="preferredDay"
                            name="preferredDay"
                            required
                            defaultValue=""
                            className="w-full h-12 px-4 bg-[#0b101e]/40 border border-white/10 text-white text-xs rounded-xl appearance-none cursor-pointer focus:outline-none focus:border-[#00AEEF]/60 focus:ring-1 focus:ring-[#00AEEF]/30 transition-all duration-300 font-medium group-hover:border-white/20"
                          >
                            <option value="" disabled className="bg-[#070B14] text-white/50">Select preferred day...</option>
                            <option value="saturday" className="bg-[#070B14] text-white">Saturday Batches</option>
                            <option value="sunday" className="bg-[#070B14] text-white">Sunday Batches</option>
                          </select>
                          {/* Premium Custom Micro-Chevron Indicator */}
                          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-white/40 group-hover:text-white/70 transition-colors duration-300">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </div>
                        </div>
                      </div>

                    </div>

                    <div>
                      <label className="font-mono text-xs text-gray-400 ml-2">Current Academic Background</label>
                      <textarea name="background" rows={3} required placeholder="Tell us about your current school/university and any prior programming experience..." className="mt-2 w-full rounded-2xl bg-[#0A0A0C] border border-white/5 px-5 py-4 text-sm text-white placeholder-gray-600 outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] resize-none transition-all" />
                    </div>

                    {submitStatus.type && (
                      <div className={`p-4 rounded-xl text-sm font-medium ${submitStatus.type === 'success' ? 'bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}>
                        {submitStatus.message}
                      </div>
                    )}

                    <button type="submit" disabled={isSubmitting} className="mt-6 w-full flex items-center justify-center gap-2 rounded-full bg-[#00AEEF] hover:bg-[#009ee0] px-8 py-4 text-[#070B14] text-sm font-bold font-display shadow-[0_0_20px_rgba(0,174,239,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                      {isSubmitting ? 'Submitting...' : 'Submit Application'} <ArrowUpRight size={18} />
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

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="font-mono text-xs text-gray-400 ml-2">Email Address</label>
                        <input name="email" type="email" required placeholder="jane@example.com" className="mt-2 w-full rounded-2xl bg-[#0A0A0C] border border-white/5 px-5 py-4 text-sm text-white placeholder-gray-600 outline-none focus:border-[#7B2CBF] focus:ring-1 focus:ring-[#7B2CBF] transition-all" />
                      </div>
                      <div>
                        <label className="font-mono text-xs text-gray-400 ml-2">Phone Number</label>
                        <input name="phone" type="tel" required placeholder="+94 7X XXX XXXX" className="mt-2 w-full rounded-2xl bg-[#0A0A0C] border border-white/5 px-5 py-4 text-sm text-white placeholder-gray-600 outline-none focus:border-[#7B2CBF] focus:ring-1 focus:ring-[#7B2CBF] transition-all" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-2">
                      {/* Interactive Budget Slider */}
                      <div className="flex flex-col justify-end pb-1">
                        <div className="flex justify-between items-center mb-2 gap-2">
                          <label className="font-mono text-xs text-gray-400 ml-2 whitespace-nowrap shrink-0">Estimated Budget</label>
                          <span className="font-mono text-[#7B2CBF] font-bold whitespace-nowrap text-right">LKR {budget.toLocaleString()}{budget >= 150000 ? '+' : ''}</span>
                        </div>
                        <div className="py-2">
                          <input
                            type="range"
                            min="10000"
                            max="150000"
                            step="10000"
                            value={budget}
                            onChange={(e) => setBudget(Number(e.target.value))}
                            className="w-full accent-[#7B2CBF] bg-[#0A0A0C] h-2 rounded-full outline-none"
                          />
                        </div>
                        <div className="flex justify-between text-gray-600 font-mono text-[10px] mt-1 px-2">
                          <span>LKR 10k</span>
                          <span>LKR 150k+</span>
                        </div>
                      </div>

                      {/* Target Timeline */}
                      <div>
                        <label className="font-mono text-xs text-gray-400 ml-2">Target Timeline</label>
                        <div className="mt-2 relative">
                          <select name="timeline" required className="w-full rounded-2xl bg-[#0A0A0C] border border-white/5 px-5 py-4 text-sm text-white appearance-none outline-none focus:border-[#7B2CBF] focus:ring-1 focus:ring-[#7B2CBF] transition-all">
                            <option value="ASAP">ASAP (Expedited)</option>
                            <option value="1-3 Months">1-3 Months</option>
                            <option value="3-6 Months">3-6 Months</option>
                            <option value="6+ Months">6+ Months</option>
                          </select>
                          <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none rotate-90" size={16} />
                        </div>
                      </div>
                    </div>

                    {/* Tech Stack Requirements */}
                    <div>
                      <label className="font-mono text-xs text-gray-400 ml-2 block mb-3">Required Capabilities (Optional)</label>
                      <div className="flex flex-wrap gap-2">
                        {['Web App', 'Final Year Projects', 'E-Commerce', 'AI/ML Integration', 'Automation/n8n', 'UI/UX Redesign','Wordpress Sites','Other'].map(tech => (
                          <label key={tech} className="cursor-pointer relative">
                            <input type="checkbox" name="stack" value={tech} className="peer sr-only" />
                            <div className="px-4 py-2 rounded-xl border border-white/10 bg-[#0A0A0C] text-sm text-gray-400 peer-checked:bg-[#7B2CBF]/10 peer-checked:border-[#7B2CBF] peer-checked:text-white transition-all">
                              {tech}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="font-mono text-xs text-gray-400 ml-2">Project Details</label>
                      <textarea name="details" rows={2} required placeholder="Describe the core problem you are trying to solve..." className="mt-2 w-full rounded-2xl bg-[#0A0A0C] border border-white/5 px-5 py-4 text-sm text-white placeholder-gray-600 outline-none focus:border-[#7B2CBF] focus:ring-1 focus:ring-[#7B2CBF] resize-none transition-all" />
                    </div>

                    {submitStatus.type && (
                      <div className={`p-4 rounded-xl text-sm font-medium ${submitStatus.type === 'success' ? 'bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}>
                        {submitStatus.message}
                      </div>
                    )}

                    <button type="submit" disabled={isSubmitting} className="mt-2 w-full flex items-center justify-center gap-2 rounded-full bg-[#7B2CBF] hover:bg-[#6a24a6] px-8 py-4 text-white text-sm font-bold font-display shadow-[0_0_20px_rgba(123,44,191,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                      {isSubmitting ? 'Submitting...' : 'Request Consultation'} <ArrowUpRight size={18} />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </Reveal>

        </div>
      </section>
      <WhatsAppButton />
    </div>
  );
}