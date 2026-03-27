import { motion } from 'framer-motion';
import { Cpu, Palette, Layers, Users, Zap, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
);

export default function Expertise() {
  // === META UPDATE ===
  useEffect(() => {
    document.title = 'Expertise | Harbeni — 2030s Digital Intelligence';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Harbeni expertise: AI Systems Architecture, Cyber-Futuristic Design, Full-Stack Velocity, and Product Intelligence Strategy for the next decade.'
      );
    }
  }, []);

  const expertiseAreas = [
    {
      icon: Cpu,
      title: 'AI Systems Architecture',
      desc: 'Designing autonomous agents, multimodal reasoning engines, and self-evolving workflows that think 10 steps ahead.',
      highlight: 'Gemini 2.5 Pro • LangGraph • Agentic Loops',
    },
    {
      icon: Palette,
      title: 'Cyber-Futuristic Design',
      desc: 'Glassmorphic interfaces, micro-animations, and 2032 aesthetics that make users feel they’ve stepped into the future.',
      highlight: 'Motion 12 • Tailwind 4 • React 19',
    },
    {
      icon: Layers,
      title: 'Full-Stack Velocity',
      desc: 'From zero to globally deployed intelligent products in minutes using edge-first architecture.',
      highlight: 'Vite • Vercel • Edge Functions',
    },
    {
      icon: Users,
      title: 'Product Intelligence Strategy',
      desc: 'Helping visionary founders turn bold ideas into self-sustaining digital empires that anticipate user needs.',
      highlight: 'Strategy • Prototyping • Scale',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 pb-24">
      {/* HERO */}
      <section className="pt-32 pb-20 border-b border-white/10">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/5 text-sm px-5 py-2.5 rounded-3xl border border-white/10 mb-6">
              <Layers className="w-4 h-4" />
              EXPERTISE
            </div>
            <h1 className="text-6xl md:text-7xl font-syne tracking-tighter leading-none mb-6">
              I COMMAND THE FUTURE
            </h1>
            <p className="text-2xl text-zinc-400">
              Four pillars. Zero compromise. Built for 2030 and beyond.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* EXPERTISE AREAS */}
      <section className="py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {expertiseAreas.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-10 rounded-3xl border border-white/10 hover:border-cyan-400/40 group"
              >
                <area.icon className="w-12 h-12 text-cyan-400 mb-8 group-hover:rotate-12 transition-transform" />
                <h3 className="text-3xl font-medium mb-4">{area.title}</h3>
                <p className="text-zinc-300 text-lg leading-relaxed mb-6">{area.desc}</p>
                <div className="text-sm font-mono text-cyan-400 bg-white/5 px-4 py-2 rounded-2xl inline-block">
                  {area.highlight}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* HOW I DELIVER */}
      <section className="py-24 bg-white/5">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-syne tracking-tighter">How I Deliver at Light Speed</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { step: '01', title: 'Vision Lock', desc: 'Deep-dive strategy session → crystal-clear roadmap in 48 hours' },
              { step: '02', title: 'Rapid Prototyping', desc: 'Clickable, intelligent prototype live on Vercel in under a week' },
              { step: '03', title: 'Autonomous Scale', desc: 'Self-healing systems that evolve with your business' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="glass p-8 rounded-3xl"
              >
                <div className="text-6xl font-mono text-white/20 mb-4">{item.step}</div>
                <h4 className="text-2xl font-medium mb-3">{item.title}</h4>
                <p className="text-zinc-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center py-20 border-t border-white/10"
      >
        <Container>
          <p className="text-3xl font-light mb-8">Ready to deploy the future?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-4 bg-white text-zinc-950 px-12 py-7 rounded-3xl text-2xl font-medium hover:scale-105 active:scale-95 transition-transform group"
          >
            Command Your Empire
            <ArrowRight className="w-7 h-7 group-active:translate-x-1 transition-transform" />
          </a>
        </Container>
      </motion.div>
    </div>
  );
}
