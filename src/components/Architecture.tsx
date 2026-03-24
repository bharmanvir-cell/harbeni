import { motion } from 'motion/react';
import { Smartphone, Server, Database, Cloud } from 'lucide-react';

export const Architecture = () => {
  const layers = [
    { name: "Client Layer", icon: Smartphone, color: "text-accent-cyan", bg: "bg-accent-cyan/10" },
    { name: "Application Layer", icon: Server, color: "text-accent-purple", bg: "bg-accent-purple/10" },
    { name: "Data Layer", icon: Database, color: "text-accent-cyan", bg: "bg-accent-cyan/10" },
    { name: "Infrastructure", icon: Cloud, color: "text-accent-purple", bg: "bg-accent-purple/10" },
  ];

  return (
    <section className="py-24 px-6 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
            The Harbeni Stack
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            A multi-layered neural architecture designed for maximum throughput and zero-latency data flow.
          </p>
        </div>

        <div className="relative flex flex-col items-center gap-12">
          {layers.map((layer, i) => (
            <div key={i} className="relative w-full max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-2xl flex items-center justify-between group hover:border-accent-cyan/30 transition-all"
              >
                <div className="flex items-center gap-6">
                  <div className={`w-14 h-14 rounded-xl ${layer.bg} flex items-center justify-center ${layer.color}`}>
                    <layer.icon size={28} />
                  </div>
                  <h3 className="text-xl font-display font-bold">{layer.name}</h3>
                </div>
                <div className="hidden md:flex gap-2">
                  <div className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-mono uppercase tracking-widest text-zinc-500">Latency: 0.8ms</div>
                  <div className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-mono uppercase tracking-widest text-zinc-500">Edge-Ready</div>
                </div>
              </motion.div>

              {i < layers.length - 1 && (
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-px h-12 overflow-hidden">
                  <motion.div 
                    animate={{ y: [0, 48] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full bg-linear-to-b from-accent-cyan via-accent-purple to-transparent"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
