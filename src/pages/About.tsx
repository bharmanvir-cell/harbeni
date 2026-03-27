import { motion } from 'motion/react';
import { AboutHero } from '../components/AboutHero';
import { Zap, Brain, Cpu, Globe, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

const PhilosophySection = () => (
  <section className="py-24 px-6 bg-[#050505] border-y border-white/5">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-xs font-mono font-bold text-accent-cyan uppercase tracking-[0.3em] mb-4">Our Philosophy</h2>
        <h3 className="text-4xl md:text-6xl font-syne font-black text-white mb-8 tracking-tight">
          The End of <span className="text-accent-purple">Passive Software.</span>
        </h3>
        <div className="space-y-6 text-lg text-zinc-400 font-sans leading-relaxed">
          <p>
            For too long, businesses have been forced to adapt to their software. Dashboards sit static, waiting for human input. Data is siloed, requiring manual translation into action.
          </p>
          <p>
            Harbeni was founded in Toronto to shatter this paradigm. We believe that in the modern landscape, software that requires you to manage it is already obsolete.
          </p>
          <p>
            We architect living, breathing operational extensions designed to eliminate the friction between data and execution. We build systems that think, anticipate, and act—so you can focus on commanding your empire, not running its machinery.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative aspect-square glass rounded-3xl border-white/10 flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-br from-accent-cyan/10 via-transparent to-accent-purple/10" />
        <div className="relative z-10 p-12 text-center">
          <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-8 border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.05)]">
            <Zap className="text-accent-cyan" size={48} />
          </div>
          <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Autonomous Systems</p>
          <p className="text-4xl font-syne font-black text-white mt-4">Zero Friction.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

const ArsenalSection = () => (
  <section className="py-24 px-6 bg-harbeni-dark">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-xs font-mono font-bold text-accent-purple uppercase tracking-[0.3em] mb-4">The Harbeni Arsenal</h2>
        <h3 className="text-4xl md:text-6xl font-syne font-black text-white tracking-tight">
          Bleeding-Edge <span className="text-accent-cyan">Capability.</span>
        </h3>
        <p className="mt-6 text-zinc-500 font-mono text-sm uppercase tracking-widest max-w-2xl mx-auto">
          We operate where high-end web architecture meets autonomous intelligence.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Proprietary RAG Architectures",
            icon: Cpu,
            desc: "We build bespoke Retrieval-Augmented Generation systems that connect directly to your proprietary data, creating an infallible, private knowledge core for your business."
          },
          {
            title: "State-of-the-Art Cognition",
            icon: Brain,
            desc: "Powered by advanced models like Gemini 1.5 Pro, our custom AI agents possess deep contextual awareness. They don't just retrieve answers; they reason through complex workflows."
          },
          {
            title: "High-Density Performance",
            icon: Zap,
            desc: "We engineer ultra-fast, infinitely scalable web applications capable of handling massive computational loads without ever compromising on speed or stability."
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="glass p-8 rounded-3xl border-white/5 hover:border-accent-cyan/30 transition-all group"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-accent-cyan/10 transition-colors">
              <item.icon className="text-accent-cyan" size={28} />
            </div>
            <h4 className="text-xl font-syne font-bold text-white mb-4">{item.title}</h4>
            <p className="text-zinc-400 text-sm leading-relaxed font-sans">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const AestheticSection = () => (
  <section className="py-24 px-6 bg-[#050505] border-y border-white/5">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="order-2 lg:order-1 relative aspect-video glass rounded-3xl border-white/10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-tr from-accent-purple/20 via-transparent to-accent-cyan/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-6 gap-2 opacity-20">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-8 h-8 rounded-sm bg-white" />
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-8">
          <p className="font-mono text-[10px] text-accent-cyan uppercase tracking-[0.3em]">Visual Language v2.0</p>
          <p className="text-2xl font-syne font-black text-white">Sophisticated Intelligence.</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="order-1 lg:order-2"
      >
        <h2 className="text-xs font-mono font-bold text-accent-purple uppercase tracking-[0.3em] mb-4">Uncompromising Aesthetic</h2>
        <h3 className="text-4xl md:text-6xl font-syne font-black text-white mb-8 tracking-tight">
          Sophisticated <span className="text-accent-cyan">Intelligence.</span>
        </h3>
        <div className="space-y-6 text-lg text-zinc-400 font-sans leading-relaxed">
          <p>
            Power without control is useless. That is why our technical mastery is matched only by our dedication to design.
          </p>
          <p>
            We pioneered the "Sophisticated Intelligence" aesthetic. Our interfaces are unapologetically minimalist, utilizing deep dark modes accented by neon cyan and purple.
          </p>
          <p>
            We specialize in high-density technical data displays that surface exactly what you need to know, eliminating visual noise while maintaining an elite, premium feel.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

const PartnersSection = () => (
  <section className="py-24 px-6 bg-harbeni-dark">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xs font-mono font-bold text-accent-cyan uppercase tracking-[0.3em] mb-4">Our Partners</h2>
        <div className="flex items-center justify-center gap-2 mb-8">
          <Globe className="text-accent-cyan" size={20} />
          <p className="text-xl font-syne font-bold text-white tracking-tight">Headquartered in Toronto</p>
        </div>
        <p className="text-2xl md:text-3xl font-syne font-bold text-zinc-300 leading-snug mb-12">
          Harbeni is the silent, elite partner to the world's most ambitious luxury brands and high-growth SaaS platforms.
        </p>
        <p className="text-lg text-zinc-500 font-sans max-w-2xl mx-auto mb-16">
          Our clients refuse to settle for friction. They demand bespoke, autonomous ecosystems that elevate their user experience and run their operations on autopilot.
        </p>
       
        <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent mb-16" />
       
        <h3 className="text-4xl md:text-6xl font-syne font-black text-white tracking-tight mb-8">
          Welcome to the new <br />
          <span className="text-accent-cyan">standard of operations.</span>
        </h3>
       
        {/* Fixed Functional Button */}
        <a
          href="/contact"
          className="group relative inline-flex px-12 py-6 bg-white text-harbeni-dark font-syne font-black text-xl rounded-2xl hover:bg-accent-cyan transition-all overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-3">
            COMMAND YOUR EMPIRE 
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </span>
        </a>
      </motion.div>
    </div>
  </section>
);

export const About = () => {
  useEffect(() => {
    document.title = 'About Harbeni — The End of Passive Software';

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Discover Harbeni’s philosophy: where passive software dies and sophisticated, self-evolving digital intelligence begins.');
    }
  }, []);

  return (
    <div className="bg-[#050505]">
      <AboutHero />
      <PhilosophySection />
      <ArsenalSection />
      <AestheticSection />
      <PartnersSection />
    </div>
  );
};
