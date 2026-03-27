import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Rocket } from 'lucide-react';
import { useEffect } from 'react';

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
);

export function About() {
  useEffect(() => {
    document.title = 'About | Harbeni | 2030s Digital Intelligence Agency'; 
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 pb-24">
      <Container>
        <div className="text-center py-20">
          <h1 className="text-6xl font-syne tracking-tighter mb-6">About Harbeni</h1>
          <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
            We build the future of digital intelligence. 
            No fluff. Just sophisticated systems that work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 py-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Brain className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-medium">Philosophy</h2>
            </div>
            <p className="text-zinc-300 text-lg">
              The era of passive software is over. 
              Every interface should anticipate, adapt, and evolve.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl font-medium">Our Arsenal</h2>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Shield className="w-6 h-6 text-emerald-400 mt-1" />
                <div>
                  <p className="font-medium">Gemini 2.5 Pro</p>
                  <p className="text-zinc-400 text-sm">Multimodal intelligence</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Rocket className="w-6 h-6 text-cyan-400 mt-1" />
                <div>
                  <p className="font-medium">React 19 + Vite + Vercel</p>
                  <p className="text-zinc-400 text-sm">Lightning fast delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center py-12 border-t border-white/10">
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-zinc-950 px-10 py-6 rounded-3xl text-xl font-medium"
          >
            Start Building Your Empire →
          </a>
        </div>
      </Container>
    </div>
  );
}
