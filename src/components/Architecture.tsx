import { motion, AnimatePresence } from 'motion/react';
import { Brain, Terminal, Database, Activity, Search, Globe, Cpu, Shield, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { FuturisticIcon } from './FuturisticIcon';

const AgentNode = ({ id, status, type }: { id: string; status: 'active' | 'idle'; type: 'brain' | 'terminal' | 'cpu' }) => {
  const icon = type === 'brain' ? Brain : type === 'terminal' ? Terminal : Cpu;
  
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="relative group cursor-pointer"
    >
      <div className={`absolute -inset-4 rounded-full blur-xl transition-opacity duration-500 ${
        status === 'active' ? 'bg-accent-cyan/20 opacity-100' : 'opacity-0'
      }`} />
      
      <div className={`relative w-16 h-16 rounded-full bg-[#040810] flex items-center justify-center border-2 transition-all duration-300 ${
        status === 'active' ? 'border-accent-cyan shadow-[0_0_15px_rgba(0,229,255,0.3)]' : 'border-white/10'
      }`}>
        <FuturisticIcon 
          icon={icon} 
          color={status === 'active' ? 'cyan' : 'white'} 
          size={20} 
          glow={status === 'active'} 
        />
        
        {status === 'active' && (
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full border border-accent-cyan"
          />
        )}
      </div>
      
      <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
        <p className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">{id}</p>
        <p className={`text-[8px] font-mono uppercase ${status === 'active' ? 'text-accent-cyan' : 'text-zinc-600'}`}>
          [{status}]
        </p>
      </div>
    </motion.div>
  );
};

const MemoryBlock = ({ title, description, tags }: { title: string; description: string; tags: string[] }) => (
  <motion.div
    whileHover={{ scale: 1.02, y: -2 }}
    className="bg-[#040810] p-6 rounded-[24px] border border-white/5 hover:border-accent-purple/30 transition-all w-full max-w-xs group shadow-xl"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="group-hover:scale-110 transition-transform duration-500">
        <FuturisticIcon icon={Database} color="purple" size={20} glow={true} />
      </div>
      <div>
        <h4 className="text-sm font-syne font-bold text-white">{title}</h4>
        <p className="text-[10px] font-mono text-accent-purple uppercase tracking-widest">RAG Source ID: {title.toLowerCase().replace(' ', '-')}</p>
      </div>
    </div>
    <p className="text-xs text-zinc-500 leading-relaxed mb-4 font-mono">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <span key={tag} className="px-2 py-0.5 rounded bg-white/5 text-[9px] font-mono text-zinc-400 uppercase tracking-wider border border-white/5">{tag}</span>
      ))}
    </div>
  </motion.div>
);

export const Architecture = () => {
  const [logs, setLogs] = useState<string[]>([
    "[14:21:03] Agent-314 [Active] -> RAG Source: Luxury Concierge v2.1: Retrieval complete (98% confidence).",
    "[14:21:05] Agent-701 [Active] -> Self-Correction: Gemini 1.5 Pro refined knowledge from client feedback.",
    "[14:21:11] Agent-314 [Active] -> Executed workflow: Sent client email.",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLogs = [
        `[${new Date().toLocaleTimeString()}] Agent-${Math.floor(Math.random() * 900) + 100} [Active] -> Processing RAG stream...`,
        `[${new Date().toLocaleTimeString()}] System -> Optimizing latency for SaaS Ops node...`,
        `[${new Date().toLocaleTimeString()}] Agent-314 -> Gemini 1.5 Pro update: refined user intent.`,
      ];
      setLogs(prev => [...prev.slice(-8), newLogs[Math.floor(Math.random() * newLogs.length)]]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="architecture" className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="grid grid-cols-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-white/10" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <FuturisticIcon icon={Activity} color="cyan" size={20} glow={true} />
              <h2 className="text-2xl md:text-3xl font-syne font-black tracking-tight text-white">
                Agent Cognitive Architecture Map
              </h2>
            </div>
            <p className="text-zinc-500 text-sm font-mono uppercase tracking-widest">Backend Operational View v4.0.2</p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
              <input 
                type="text" 
                placeholder="Search nodes..." 
                className="w-full md:w-64 bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm font-mono focus:outline-none focus:border-accent-cyan/50 transition-all"
              />
            </div>
            <div className="hidden lg:flex items-center gap-2 px-4 py-2 glass rounded-lg border border-white/10">
              <Globe size={14} className="text-accent-cyan" />
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Global Mesh: Active</span>
            </div>
          </div>
        </div>

        {/* Main Visualization Area */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Agent Pool */}
          <div className="lg:col-span-5">
            <h3 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
              <FuturisticIcon icon={Zap} color="cyan" size={12} /> Agent Pool
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-y-16 gap-x-8">
              <AgentNode id="Agent-314" status="active" type="brain" />
              <AgentNode id="Agent-701" status="active" type="terminal" />
              <AgentNode id="Agent-233" status="idle" type="cpu" />
              <AgentNode id="Agent-882" status="active" type="brain" />
              <AgentNode id="Agent-105" status="idle" type="terminal" />
              <AgentNode id="Agent-442" status="active" type="cpu" />
              <AgentNode id="Agent-551" status="active" type="brain" />
              <AgentNode id="Agent-909" status="idle" type="terminal" />
            </div>
          </div>

          {/* Memory Blocks / RAG Sources */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h3 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
              <FuturisticIcon icon={Database} color="purple" size={12} /> Memory Blocks (RAG)
            </h3>
            <MemoryBlock 
              title="Luxury Concierge" 
              description="Refined user intent for bespoke travel requests. Real-time indexing of global high-end inventory."
              tags={["Gemini 1.5 Pro", "Vector DB", "98% Conf"]}
            />
            <MemoryBlock 
              title="SaaS Operations" 
              description="Autonomous logistics management and self-correcting workflow execution for global platforms."
              tags={["Auto-Pilot", "Workflow Mesh", "0.8ms Latency"]}
            />
            <MemoryBlock 
              title="Client Profiles" 
              description="Secure, encrypted identity mapping for personalized anticipatory service delivery."
              tags={["Encrypted", "PII-Safe", "Dynamic"]}
            />
          </div>

          {/* System Health / Stats */}
          <div className="lg:col-span-3 space-y-8">
            <h3 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
              <FuturisticIcon icon={Shield} color="cyan" size={12} /> System Health
            </h3>
            
            <div className="glass p-6 rounded-xl border border-white/10">
              <div className="flex justify-between items-end mb-4">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Neural Throughput</span>
                <span className="text-xl font-display font-bold text-accent-cyan">94.2%</span>
              </div>
              <div className="h-12 flex items-end gap-1">
                {[40, 70, 45, 90, 65, 80, 50, 95, 75, 85, 60, 90].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.05, duration: 1 }}
                    className="flex-1 bg-accent-cyan/20 rounded-t-sm"
                  />
                ))}
              </div>
            </div>

            <div className="glass p-6 rounded-xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Active Nodes</span>
                <span className="text-sm font-mono text-accent-cyan">12 / 16</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Total RAG Queries</span>
                <span className="text-sm font-mono text-accent-purple">1.2M</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Self-Correction Rate</span>
                <span className="text-sm font-mono text-accent-cyan">99.9%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Audit Log */}
        <div className="glass rounded-xl border border-white/10 overflow-hidden">
          <div className="bg-white/5 px-6 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">Live Operational Audit Log</span>
            </div>
            <div className="flex gap-4">
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Status: Syncing</span>
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Buffer: 1024kb</span>
            </div>
          </div>
          <div className="p-6 h-48 overflow-y-auto font-mono text-[11px] leading-relaxed scrollbar-hide">
            <AnimatePresence mode="popLayout">
              {logs.map((log, i) => (
                <motion.p
                  key={log + i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-zinc-500 mb-1"
                >
                  <span className="text-accent-cyan">{log.split(' -> ')[0]}</span>
                  <span className="text-zinc-300">{" -> "}</span>
                  {log.split(' -> ')[1]}
                </motion.p>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
