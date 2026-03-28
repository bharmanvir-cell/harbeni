import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, Terminal, Activity, Cpu } from 'lucide-react';
import { FuturisticIcon } from './FuturisticIcon';

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
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass text-xs font-mono font-bold text-accent-cyan mb-8 border border-accent-cyan/20">
            <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
            <span>v2.0.30 - Anticipatory Systems Active</span>
          </div>
          
          {/* Removed text-white to let the theme dictate the color */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-syne font-black tracking-tighter leading-[0.85] mb-8">
            Intelligent Systems.<br />
            Sophisticated <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#9d4edd]">Design.</span>
          </h1>
          
          {/* Replaced text-zinc-400 with opacity-70 for natural theme blending */}
          <p className="opacity-70 text-base sm:text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-mono">
            Automating Excellence. We build high-performance web applications and custom AI agents that run your business on autopilot.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="px-8 py-4 bg-[#00e5ff] text-zinc-950 font-syne font-bold rounded-xl hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:scale-[1.02] transition-all active:scale-95 flex items-center gap-2 uppercase tracking-widest text-xs">
              Book a Discovery Call <ChevronRight size={18} />
            </Link>
            {/* Changed white transparency to neutral zinc transparency */}
            <button 
              onClick={() => document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-zinc-500/10 border border-zinc-500/20 font-syne font-bold rounded-xl hover:bg-zinc-500/20 hover:border-accent-cyan/50 hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:scale-[1.02] transition-all active:scale-95 flex items-center gap-2 uppercase tracking-widest text-xs"
            >
              Backend View <Terminal size={18} className="text-accent-cyan" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-square lg:aspect-auto lg:h-[600px] bg-[#040810] border border-white/5 rounded-[40px] p-8 flex flex-col gap-4 overflow-hidden shadow-2xl"
        >
          {/* Terminal grid and inner text kept exactly the same so it stays a cool dark terminal! */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <div className="grid grid-cols-10 h-full w-full">
                {Array.from({ length: 100 }).map((_, i) => (
                  <div key={i} className="border-[0.5px] border-white/10" />
                ))}
             </div>
          </div>

          <div className="flex items-center gap-2 mb-4 relative z-10">
            <div className="w-3 h-3 rounded-full bg-red-500/30" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
            <div className="w-3 h-3 rounded-full bg-green-500/30" />
            <span className="ml-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">harbeni-compiler --optimize</span>
          </div>

          <div className="flex-1 font-mono text-xs space-y-2 overflow-hidden relative z-10">
            <motion.div 
              animate={{ y: [0, -200] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="space-y-3"
            >
              <p className="text-accent-cyan">Initializing neural architecture...</p>
              <p className="text-zinc-600">{"{ status: 'OK', latency: '1.2ms' }"}</p>
              <p className="text-accent-purple">Optimizing data paths for scale...</p>
              <p className="text-zinc-600">{"[####################] 100%"}</p>
              <p className="text-accent-cyan">Compiling edge-ready modules...</p>
              <p className="text-zinc-400">import {"{ Intelligence }"} from "@harbeni/core";</p>
              <p className="text-zinc-400">const app = new Intelligence({"{"} mode: 'anticipatory' {"}"});</p>
              <p className="text-zinc-600">{"// System ready for deployment"}</p>
              <p className="text-accent-cyan">Initializing neural architecture...</p>
              <p className="text-zinc-600">{"{ status: 'OK', latency: '1.2ms' }"}</p>
              <p className="text-accent-purple">Optimizing data paths for scale...</p>
              <p className="text-zinc-600">{"[####################] 100%"}</p>
              <p className="text-accent-cyan">Compiling edge-ready modules...</p>
              <p className="text-zinc-400">import {"{ Intelligence }"} from "@harbeni/core";</p>
              <p className="text-zinc-400">const app = new Intelligence({"{"} mode: 'anticipatory' {"}"});</p>
              <p className="text-zinc-600">{"// System ready for deployment"}</p>
            </motion.div>
          </div>

          {/* Floating Data Node 1 - Updated colors to neutral zinc */}
          <motion.div 
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 2, 0]
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-12 right-12 p-6 bg-zinc-500/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-zinc-500/20 z-20"
          >
            <div className="flex items-center gap-5">
              <FuturisticIcon icon={Activity} color="cyan" size={24} />
              <div>
                <p className="text-[10px] font-mono font-bold text-accent-cyan uppercase tracking-[0.2em]">Active Node</p>
                {/* Removed text-white */}
                <p className="text-2xl font-syne font-black">99.9% Uptime</p>
              </div>
            </div>
          </motion.div>

          {/* Floating Data Node 2 - Updated colors to neutral zinc */}
          <motion.div 
            animate={{ 
              y: [0, 10, 0],
              rotate: [0, -2, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            className="absolute top-24 right-12 p-4 bg-zinc-500/10 backdrop-blur-xl rounded-2xl shadow-xl border border-zinc-500/20 z-20"
          >
            <div className="flex items-center gap-4">
              <FuturisticIcon icon={Cpu} color="purple" size={18} />
              <div>
                <p className="text-[8px] font-mono font-bold text-accent-purple uppercase tracking-[0.2em]">Neural Engine</p>
                {/* Removed text-white */}
                <p className="text-lg font-syne font-black">Optimized</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
