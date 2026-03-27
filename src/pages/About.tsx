import { motion } from 'framer-motion';
import { Zap, Shield, Brain, Rocket, Users, Globe } from 'lucide-react';
import { useEffect } from 'react';

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
);

export default function About() {
  // === META UPDATE ===
  useEffect(() => {
    document.title = 'About Harbeni | 2030s Digital Agency';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Harbeni — where passive software dies and sophisticated intelligence begins. Philosophy, arsenal, and aesthetic of the next decade in digital creation.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 pb-24">
      {/* HERO */}
      <section className="pt-32 pb-16 border-b border-white/10">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-syne tracking-tighter mb-6">
              THE END OF PASSIVE SOFTWARE
            </h1>
            <p className="text-2xl text-zinc-400 max-w-2xl mx-auto">
              Harbeni is not another agency.<br />
              It is the operating system for 2030s digital intelligence.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-24">
        <Container>
          <div className="grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5">
              <div className="sticky top-8">
                <div className="inline-flex items-center gap-2 bg-white/5 text-sm px-4 py-2 rounded-3xl border border-white/10 mb-6">
                  <Brain className="w-4 h-4" />
                  PHILOSOPHY
                </div>
                <h2 className="text-5xl font-syne tracking-tighter leading-none">
                  Sophisticated Intelligence.<br />
                  Zero Friction.
                </h2>
              </div>
            </div>

            <div className="md:col-span-7 text-lg text-zinc-300 leading-relaxed space-y-8">
              <p>
                We believe the era of passive software is over. Interfaces should anticipate, adapt, and evolve.
              </p>
              <p>
                Every pixel, every micro-interaction, every line of logic is designed with one goal: 
                to make the impossible feel inevitable.
              </p>
              <div className="pt-8 border-t border-white/10 flex items-center gap-8 text-sm">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  <span>Anticipatory</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-purple-400" />
                  <span>Self-healing</span>
                </div>
                <div className="flex items-center gap-3">
                  <Rocket className="w-5 h-5 text-emerald-400" />
                  <span>Autonomous</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ARSENAL */}
      <section className="py-24 bg-white/5">
        <Container>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/5 text-sm px-4 py-2 rounded-3xl border border-white/10 mb-4">
              <Shield className="w-4 h-4" />
              ARSENAL
            </div>
            <h2 className="text-5xl font-syne tracking-tighter">Our Weapons of Choice</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: 'Gemini 2.5 Pro', desc: 'Multimodal reasoning at the speed of thought' },
              { icon: Rocket, title: 'Vercel + Edge', desc: 'Global deployment in 12ms' },
              { icon: Globe, title: 'Motion + React 19', desc: 'Fluid interfaces that feel alive' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl border border-white/10 hover:border-cyan-400/30 group"
              >
                <item.icon className="w-10 h-10 text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-medium mb-3">{item.title}</h3>
                <p className="text-zinc-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* AESTHETIC */}
      <section className="py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/5 text-sm px-4 py-2 rounded-3xl border border-white/10 mb-6">
              <Globe className="w-4 h-4" />
              AESTHETIC
            </div>
            <h2 className="text-5xl font-syne tracking-tighter mb-8">Our interfaces are unapologetically futuristic.</h2>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Glassmorphic depth. Cyber-minimal typography. Micro-animations that breathe. 
              Every detail engineered to make users feel they’ve stepped into 2032.
            </p>
          </div>
        </Container>
      </section>

      {/* JOURNEY */}
      <section className="py-24 bg-white/5">
        <Container>
          <h2 className="text-center text-5xl font-syne tracking-tighter mb-16">The Journey So Far</h2>
          <div className="max-w-2xl mx-auto space-y-12">
            <div className="flex gap-8">
              <div className="w-6 h-6 rounded-full bg-cyan-400 flex-shrink-0 mt-1"></div>
              <div>
                <div className="text-sm text-zinc-500">2024 — 2025</div>
                <h4 className="text-2xl font-medium">From concept to live AI portfolio</h4>
                <p className="text-zinc-400">Built Harbeni as the first fully autonomous 2030s showcase.</p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="w-6 h-6 rounded-full bg-purple-400 flex-shrink-0 mt-1"></div>
              <div>
                <div className="text-sm text-zinc-500">Now</div>
                <h4 className="text-2xl font-medium">Helping founders ship intelligent products</h4>
                <p className="text-zinc-400">Available for selective collaborations.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA — “Command Your Empire” button now links to Contact */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center py-16 border-t border-white/10"
      >
        <Container>
          <p className="text-3xl font-light mb-8">Ready to build the future?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-zinc-950 px-10 py-6 rounded-3xl text-xl font-medium hover:scale-105 active:scale-95 transition-transform group"
          >
            Command Your Empire
            <span className="text-2xl group-active:translate-x-1 transition-transform">→</span>
          </a>
        </Container>
      </motion.div>
    </div>
  );
}
