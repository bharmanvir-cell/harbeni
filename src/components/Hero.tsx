import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, Terminal } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-cyan/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent-purple/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium text-accent-cyan mb-6">
            <Terminal size={14} />
            <span>v2.0.30 - Anticipatory Systems Active</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-extrabold tracking-tighter leading-[0.9] mb-8">
            Web Dev &<br />
            AI <span className="text-gradient">Integration.</span>
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            We build high-performance web applications and custom AI bots tailored for all business needs. Architecting the future of automation.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="px-8 py-4 bg-accent-cyan text-zinc-950 font-bold rounded-lg hover:shadow-[0_0_25px_rgba(0,242,255,0.6)] hover:scale-[1.02] transition-all active:scale-95 flex items-center gap-2">
              Start a Project <ChevronRight size={18} />
            </Link>
            <Link to="/work" className="px-8 py-4 glass text-white font-bold rounded-lg hover:bg-white/10 hover:border-accent-cyan/50 hover:shadow-[0_0_20px_rgba(0,242,255,0.2)] hover:scale-[1.02] transition-all active:scale-95">
              View Portfolio
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-square lg:aspect-auto lg:h-[600px] glass rounded-3xl p-8 flex flex-col gap-4 overflow-hidden"
        >
          {/* Neural Network / Code Compiling Visual */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
             <div className="grid grid-cols-10 h-full w-full">
                {Array.from({ length: 100 }).map((_, i) => (
                  <div key={i} className="border-[0.5px] border-white/10" />
                ))}
             </div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
            <span className="ml-2 text-xs font-mono text-zinc-500">harbeni-compiler --optimize</span>
          </div>

          <div className="flex-1 font-mono text-sm space-y-2 overflow-hidden">
            <motion.div 
              animate={{ y: [0, -200] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="space-y-2"
            >
              <p className="text-accent-cyan">Initializing neural architecture...</p>
              <p className="text-zinc-500">{"{ status: 'OK', latency: '1.2ms' }"}</p>
              <p className="text-accent-purple">Optimizing data paths for scale...</p>
              <p className="text-zinc-500">{"[####################] 100%"}</p>
              <p className="text-accent-cyan">Compiling edge-ready modules...</p>
              <p className="text-zinc-300">import {"{ Intelligence }"} from "@harbeni/core";</p>
              <p className="text-zinc-300">const app = new Intelligence({"{"} mode: 'anticipatory' {"}"});</p>
              <p className="text-zinc-500">{"// System ready for deployment"}</p>
              <p className="text-accent-cyan">Initializing neural architecture...</p>
              <p className="text-zinc-500">{"{ status: 'OK', latency: '1.2ms' }"}</p>
              <p className="text-accent-purple">Optimizing data paths for scale...</p>
              <p className="text-zinc-500">{"[####################] 100%"}</p>
              <p className="text-accent-cyan">Compiling edge-ready modules...</p>
              <p className="text-zinc-300">import {"{ Intelligence }"} from "@harbeni/core";</p>
              <p className="text-zinc-300">const app = new Intelligence({"{"} mode: 'anticipatory' {"}"});</p>
              <p className="text-zinc-500">{"// System ready for deployment"}</p>
            </motion.div>
          </div>

          {/* Floating Data Nodes */}
          <motion.div 
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-12 right-12 p-6 glass rounded-2xl shadow-2xl border-accent-cyan/20"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent-cyan/20 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-accent-cyan animate-pulse" />
              </div>
              <div>
                <p className="text-xs font-bold text-accent-cyan uppercase tracking-widest">Active Node</p>
                <p className="text-xl font-display font-bold">99.9% Uptime</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
