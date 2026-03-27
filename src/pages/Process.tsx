import { motion } from 'framer-motion';
import { Search, Zap, Code2, Rocket, RefreshCw, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
);

const steps = [
  {
    number: "01",
    icon: Search,
    title: "DISCOVERY",
    subtitle: "Understand the Empire",
    desc: "Deep-dive sessions to map your vision, pain points, users, and 2030s goals.",
  },
  {
    number: "02",
    icon: Zap,
    title: "STRATEGY",
    subtitle: "Blueprint the Future",
    desc: "Architect the AI systems, tech stack, and autonomous workflows that will power your empire.",
  },
  {
    number: "03",
    icon: Code2,
    title: "BUILD",
    subtitle: "Ship Intelligent Systems",
    desc: "Rapid prototyping → full-stack development with React 19, Gemini, Edge deployment, and glassmorphic UI.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "LAUNCH",
    subtitle: "Go Live at Light Speed",
    desc: "Global deployment on Vercel. Real-time testing. Zero-downtime rollout.",
  },
  {
    number: "05",
    icon: RefreshCw,
    title: "EVOLVE",
    subtitle: "Self-Healing Intelligence",
    desc: "Ongoing optimization, AI agents that learn, monthly updates, and continuous empire expansion.",
  },
];

export default function Process() {
  // === META UPDATE ===
  useEffect(() => {
    document.title = 'Process | Harbeni — How Empires Are Built';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Our 5-step process to build intelligent, autonomous digital empires that anticipate the future.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 pb-24">
      {/* HERO */}
      <section className="pt-32 pb-20 border-b border-white/10">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/5 text-sm px-5 py-2.5 rounded-3xl border border-white/10 mb-6">
              <RefreshCw className="w-4 h-4" />
              PROCESS
            </div>
            <h1 className="text-6xl md:text-7xl font-syne tracking-tighter leading-none mb-6">
              HOW EMPIRES ARE BUILT
            </h1>
            <p className="text-2xl text-zinc-400">
              A deliberate, intelligent system.<br />
              From vision to autonomous reality — in weeks, not months.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* TIMELINE */}
      <section className="py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group flex gap-8 mb-16 last:mb-0 relative"
              >
                {/* Line connector */}
                {i !== steps.length - 1 && (
                  <div className="absolute left-[27px] top-12 w-0.5 h-24 bg-gradient-to-b from-cyan-400/30 to-transparent" />
                )}

                {/* Number + Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl font-mono text-cyan-400 group-hover:border-cyan-400 transition-colors">
                    {step.number}
                  </div>
                  <step.icon className="w-8 h-8 mx-auto mt-4 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
                </div>

                {/* Content */}
                <div className="glass flex-1 p-8 rounded-3xl border border-white/10 hover:border-cyan-400/40">
                  <div className="text-sm font-mono text-cyan-400 mb-2">{step.subtitle}</div>
                  <h3 className="text-3xl font-medium mb-4">{step.title}</h3>
                  <p className="text-zinc-300 leading-relaxed">{step.desc}</p>
                </div>
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
          <p className="text-3xl font-light mb-8">Ready to start building your empire?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-4 bg-white text-zinc-950 px-12 py-7 rounded-3xl text-2xl font-medium hover:scale-105 active:scale-95 transition-transform group"
          >
            Begin the Process
            <ArrowRight className="w-7 h-7 group-active:translate-x-1 transition-transform" />
          </a>
        </Container>
      </motion.div>
    </div>
  );
}
