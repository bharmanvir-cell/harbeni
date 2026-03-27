import { motion } from 'framer-motion';
import { Cpu, Palette, Layers, Users } from 'lucide-react';
import { useEffect } from 'react';

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
);

export function Expertise() {
  useEffect(() => {
    document.title = 'Expertise | Harbeni | 2030s Digital Intelligence Agency';
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 pb-24">
      <Container>
        <div className="text-center py-20">
          <h1 className="text-6xl font-syne tracking-tighter mb-6">Expertise</h1>
          <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
            Where I command the future — four pillars of 2030s digital intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          <div className="glass p-8 rounded-3xl border border-white/10 hover:border-cyan-400/30">
            <Cpu className="w-10 h-10 text-cyan-400 mb-6" />
            <h3 className="text-2xl font-medium mb-3">AI Systems Architecture</h3>
            <p className="text-zinc-400">Autonomous agents, multimodal models, and intelligent workflows.</p>
          </div>

          <div className="glass p-8 rounded-3xl border border-white/10 hover:border-cyan-400/30">
            <Palette className="w-10 h-10 text-purple-400 mb-6" />
            <h3 className="text-2xl font-medium mb-3">Cyber-Futuristic Design</h3>
            <p className="text-zinc-400">Glassmorphic UIs and micro-animations that feel alive.</p>
          </div>

          <div className="glass p-8 rounded-3xl border border-white/10 hover:border-cyan-400/30">
            <Layers className="w-10 h-10 text-cyan-400 mb-6" />
            <h3 className="text-2xl font-medium mb-3">Full-Stack Velocity</h3>
            <p className="text-zinc-400">React 19 + Vite + Edge deployment. From idea to live in days.</p>
          </div>

          <div className="glass p-8 rounded-3xl border border-white/10 hover:border-cyan-400/30">
            <Users className="w-10 h-10 text-purple-400 mb-6" />
            <h3 className="text-2xl font-medium mb-3">Product Intelligence Strategy</h3>
            <p className="text-zinc-400">Helping founders turn vision into self-evolving empires.</p>
          </div>
        </div>

        <div className="text-center py-12 border-t border-white/10">
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-zinc-950 px-10 py-6 rounded-3xl text-xl font-medium"
          >
            Work With Me →
          </a>
        </div>
      </Container>
    </div>
  );
}
