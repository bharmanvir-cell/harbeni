import { motion } from 'framer-motion';
import { Search, Zap, Code2, Rocket, RefreshCw } from 'lucide-react';
import { useEffect } from 'react';

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
);

export function Process() {
  useEffect(() => {
    document.title = 'Process | Harbeni';
  }, []);

  const steps = [
    {
      number: "01",
      icon: Search,
      title: "DISCOVERY",
      desc: "Deep-dive sessions to understand your vision and goals."
    },
    {
      number: "02",
      icon: Zap,
      title: "STRATEGY",
      desc: "Blueprint the AI systems and tech stack."
    },
    {
      number: "03",
      icon: Code2,
      title: "BUILD",
      desc: "Rapid development with React 19, Vite, and modern tools."
    },
    {
      number: "04",
      icon: Rocket,
      title: "LAUNCH",
      desc: "Global deployment on Vercel with zero downtime."
    },
    {
      number: "05",
      icon: RefreshCw,
      title: "EVOLVE",
      desc: "Ongoing optimization and self-healing intelligence."
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 pb-24">
      <Container>
        <div className="text-center py-20">
          <h1 className="text-6xl font-syne tracking-tighter mb-6">Our Process</h1>
          <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
            From vision to autonomous empire — a deliberate 5-step system.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-8 items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl font-mono text-cyan-400">
                {step.number}
              </div>
              <div className="glass flex-1 p-8 rounded-3xl">
                <step.icon className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-3xl font-medium mb-3">{step.title}</h3>
                <p className="text-zinc-400">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center py-12 border-t border-white/10 mt-20">
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-zinc-950 px-10 py-6 rounded-3xl text-xl font-medium"
          >
            Start Your Process →
          </a>
        </div>
      </Container>
    </div>
  );
}
