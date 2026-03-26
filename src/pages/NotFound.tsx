import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Home, Terminal } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Terminal block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#040810] border border-white/5 rounded-[32px] p-8 mb-12 text-left"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500/40" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
            <div className="w-3 h-3 rounded-full bg-green-500/40" />
            <span className="ml-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
              harbeni-router --resolve
            </span>
          </div>

          <div className="font-mono text-sm space-y-2">
            <p className="text-zinc-500">
              <span className="text-accent-cyan">$</span> GET {window.location.pathname}
            </p>
            <p className="text-red-400">
              Error: Route not found [404]
            </p>
            <p className="text-zinc-600">
              {"{"} status: 404, message: 'This node does not exist.' {"}"}
            </p>
            <motion.p
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-accent-cyan"
            >
              █
            </motion.p>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-7xl md:text-9xl font-syne font-black text-white mb-4 tracking-tighter"
        >
          4<span className="text-accent-cyan">0</span>4
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em] mb-12"
        >
          This node has been decommissioned or never existed.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link
            to="/"
            className="px-8 py-4 bg-accent-cyan text-zinc-950 font-syne font-bold rounded-xl hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:scale-[1.02] transition-all active:scale-95 flex items-center gap-2 uppercase tracking-widest text-xs"
          >
            <Home size={16} /> Back to Home
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 bg-white/5 border border-white/10 text-white font-syne font-bold rounded-xl hover:bg-white/10 hover:border-accent-cyan/50 hover:scale-[1.02] transition-all active:scale-95 flex items-center gap-2 uppercase tracking-widest text-xs"
          >
            <Terminal size={16} className="text-accent-cyan" /> Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
