import { motion } from 'motion/react';

export const AboutHero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Neon Nodes */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full opacity-30" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Data Nodes and Connections */}
          {[...Array(15)].map((_, i) => (
            <motion.circle
              key={`node-${i}`}
              cx={Math.random() * 1000}
              cy={Math.random() * 1000}
              r={2 + Math.random() * 3}
              fill={i % 2 === 0 ? "#00e5ff" : "#9d4edd"}
              filter="url(#glow)"
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
          
          {/* Connections */}
          {[...Array(10)].map((_, i) => (
            <motion.line
              key={`line-${i}`}
              x1={Math.random() * 1000}
              y1={Math.random() * 1000}
              x2={Math.random() * 1000}
              y2={Math.random() * 1000}
              stroke={i % 2 === 0 ? "#00e5ff" : "#9d4edd"}
              strokeWidth="0.5"
              strokeDasharray="5,5"
              animate={{
                opacity: [0.1, 0.3, 0.1],
                strokeDashoffset: [0, 50],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-syne font-black text-white mb-6 tracking-tight"
        >
          The Intelligence Behind <br />
          <span className="text-accent-cyan">the Autopilot.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl font-mono text-zinc-400 uppercase tracking-widest"
        >
          We don’t just write code. We engineer operational advantage.
        </motion.p>
      </div>
    </section>
  );
};
