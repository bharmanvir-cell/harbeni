import { motion } from 'motion/react';
import { X, Check, User, Bot, Zap, Clock, Calendar, AlertCircle, DollarSign } from 'lucide-react';

const StatRow = ({ 
  label, 
  value, 
  isAi, 
  delay 
}: { 
  label: string; 
  value: string; 
  isAi: boolean; 
  delay: number 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isAi ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, type: "spring" }}
      className={`flex items-center justify-between p-4 rounded-xl border ${
        isAi 
          ? 'bg-accent-cyan/5 border-accent-cyan/20 group-hover:border-accent-cyan/40' 
          : 'bg-red-500/5 border-red-500/20'
      } transition-all duration-300`}
    >
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg ${isAi ? 'bg-accent-cyan/10 text-accent-cyan' : 'bg-red-500/10 text-red-500'}`}>
          {isAi ? <Check size={16} /> : <X size={16} />}
        </div>
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{label}</span>
      </div>
      <span className={`font-syne font-bold ${isAi ? 'text-accent-cyan' : 'text-red-500'}`}>
        {value}
      </span>
    </motion.div>
  );
};

export const Comparison = () => {
  return (
    <section className="py-24 px-6 bg-harbeni-dark relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-syne font-black tracking-tight mb-4">
            The <span className="text-accent-cyan">Efficiency</span> Gap.
          </h2>
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">Human Limitations vs. Autonomous Intelligence</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">
          {/* Human Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 border-red-500/10 relative group"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500">
                <User size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-syne font-bold">Human Employee</h3>
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Standard Operational Unit</p>
              </div>
            </div>

            <div className="space-y-4">
              <StatRow label="Annual Salary" value="$95,000/yr" isAi={false} delay={0.1} />
              <StatRow label="Availability" value="8hr / Day" isAi={false} delay={0.2} />
              <StatRow label="Sick Days" value="15 Days / yr" isAi={false} delay={0.3} />
              <StatRow label="Training Time" value="90+ Days" isAi={false} delay={0.4} />
              <StatRow label="Error Rate" value="~12.5%" isAi={false} delay={0.5} />
            </div>

            <div className="mt-10 p-4 rounded-xl bg-red-500/5 border border-red-500/10 flex items-center gap-3">
              <AlertCircle className="text-red-500" size={18} />
              <p className="text-[10px] font-mono text-red-500/70 uppercase tracking-widest leading-relaxed">
                Subject to burnout, turnover, and cognitive fatigue.
              </p>
            </div>
          </motion.div>

          {/* VS Divider */}
          <div className="flex flex-col items-center gap-4 py-8 lg:py-0">
            <div className="w-px h-24 bg-linear-to-b from-transparent via-red-500/50 to-red-500" />
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 rounded-full glass border-accent-purple flex items-center justify-center relative"
            >
              <span className="font-syne font-black text-xl text-white relative z-10">VS</span>
              <motion.div
                animate={{ opacity: [0, 1, 0], scale: [0.8, 1.5, 0.8] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-accent-purple/20 blur-md"
              />
              {/* Electric Sparks */}
              <motion.div
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1.2, 0],
                  x: [0, 20, -20, 0],
                  y: [0, -20, 20, 0]
                }}
                transition={{ duration: 0.2, repeat: Infinity }}
                className="absolute text-accent-cyan"
              >
                <Zap size={24} />
              </motion.div>
            </motion.div>
            <div className="w-px h-24 bg-linear-to-b from-accent-cyan via-accent-cyan/50 to-transparent" />
          </div>

          {/* AI Agent Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              boxShadow: ["0 0 0px rgba(157,78,221,0)", "0 0 50px rgba(157,78,221,0.2)", "0 0 0px rgba(157,78,221,0)"]
            }}
            viewport={{ once: true }}
            transition={{ 
              opacity: { delay: 0.6 },
              y: { delay: 0.6 },
              boxShadow: { delay: 1.2, duration: 2, repeat: Infinity }
            }}
            className="glass rounded-3xl p-8 border-accent-cyan/20 relative group overflow-hidden"
          >
            {/* Purple Pulse Background */}
            <motion.div 
              animate={{ opacity: [0.05, 0.15, 0.05] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-accent-purple/5 pointer-events-none"
            />

            <div className="flex items-center gap-4 mb-10 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan shadow-[0_0_20px_rgba(0,229,255,0.3)]">
                <Bot size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-syne font-bold">Harbeni AI Agent</h3>
                <p className="text-xs font-mono text-accent-cyan uppercase tracking-widest">Autonomous Intelligence Unit</p>
              </div>
            </div>

            <div className="space-y-4 relative z-10">
              <StatRow label="Annual Salary" value="$0 (Retainer)" isAi={true} delay={0.8} />
              <StatRow label="Availability" value="24/7/365" isAi={true} delay={0.9} />
              <StatRow label="Sick Days" value="Zero" isAi={true} delay={1.0} />
              <StatRow label="Training Time" value="Instant" isAi={true} delay={1.1} />
              <StatRow label="Error Rate" value="< 0.01%" isAi={true} delay={1.2} />
            </div>

            <div className="mt-10 p-4 rounded-xl bg-accent-cyan/5 border border-accent-cyan/10 flex items-center gap-3 relative z-10">
              <Zap className="text-accent-cyan" size={18} />
              <p className="text-[10px] font-mono text-accent-cyan/70 uppercase tracking-widest leading-relaxed">
                Infinite scalability. Zero fatigue. Self-correcting logic.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-20 text-center"
        >
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em] mb-8">Ready to upgrade your workforce?</p>
          <button className="px-10 py-5 bg-accent-purple text-white font-syne font-black text-xl rounded-2xl hover:shadow-[0_0_30px_rgba(157,78,221,0.5)] hover:scale-105 transition-all active:scale-95">
            DEPLOY YOUR FIRST AGENT
          </button>
        </motion.div>
      </div>
    </section>
  );
};
