import { useState, type FormEvent } from "react";
import TraceBackground from "../components/TraceBackground";
import Reveal from "../components/Reveal";
import { Mail, CheckCircle2 } from "lucide-react";

// Replace with your own Formspree endpoint: https://formspree.io (free tier)
// 1. Create a form at formspree.io, grab the endpoint id (looks like "abcdwxyz")
// 2. Set VITE_FORMSPREE_ID in a .env file, or paste it directly below.
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || "";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!FORMSPREE_ID) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="relative">
      <section className="relative pt-40 pb-16 px-6 overflow-hidden">
        <TraceBackground />
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <span className="font-mono text-xs text-accent">// contact</span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl mt-3 max-w-xl">
              Let's build something{" "}
              <span className="text-gradient">real.</span>
            </h1>
            <p className="text-muted text-lg mt-6 max-w-xl">
              Courses, final year projects, or a full product — tell us what
              you need and we'll get back to you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-6">
          <Reveal className="md:col-span-3">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-7 sm:p-8 flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="font-mono text-xs text-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-2 w-full rounded-xl bg-elevated/50 border border-elevated px-4 py-3 text-sm outline-none focus:border-accent/50 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-mono text-xs text-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-xl bg-elevated/50 border border-elevated px-4 py-3 text-sm outline-none focus:border-accent/50 transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="font-mono text-xs text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full rounded-xl bg-elevated/50 border border-elevated px-4 py-3 text-sm outline-none focus:border-accent/50 transition-colors resize-none"
                  placeholder="What are you trying to build?"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-sm font-medium text-void hover:bg-accent-glow transition-colors disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>

              {status === "sent" && (
                <p className="flex items-center gap-2 text-sm text-accent-glow">
                  <CheckCircle2 size={16} /> Message sent — we'll be in touch soon.
                </p>
              )}
              {status === "error" && !FORMSPREE_ID && (
                <p className="text-sm text-muted">
                  Form isn't wired up yet — add your Formspree ID in{" "}
                  <code className="font-mono text-accent">.env</code> as{" "}
                  <code className="font-mono text-accent">VITE_FORMSPREE_ID</code>.
                </p>
              )}
              {status === "error" && FORMSPREE_ID && (
                <p className="text-sm text-muted">Something went wrong — try again, or email us directly.</p>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-2">
            <div className="glass rounded-2xl p-7 sm:p-8 h-full flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-accent">// direct</span>
                <a
                  href="mailto:hello@techtitudelabs.com"
                  className="mt-4 flex items-center gap-2 text-ink hover:text-accent transition-colors"
                >
                  <Mail size={18} /> hello@techtitudelabs.com
                </a>
              </div>
              <p className="text-muted text-sm mt-8">
                We typically reply within 1–2 business days.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
