import { motion } from 'motion/react';

export const Marquee = () => {
  const industries = [
    "AI Integration", "Web Development", "AI Bots", "Automation", 
    "SaaS Platforms", "Neural Networks", "LLM Integration", "Enterprise AI",
    "AI Integration", "Web Development", "AI Bots", "Automation", 
    "SaaS Platforms", "Neural Networks", "LLM Integration", "Enterprise AI"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="w-full py-12 overflow-hidden border-y border-white/5 bg-zinc-950"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {industries.map((industry, i) => (
          <div key={i} className="flex items-center mx-8">
            <span className="text-4xl md:text-6xl font-display font-black text-zinc-800 hover:text-white transition-colors cursor-default uppercase tracking-tighter">
              {industry}
            </span>
            <div className="w-3 h-3 rounded-full bg-accent-cyan ml-16" />
          </div>
        ))}
      </div>
    </motion.div>
  );
};
