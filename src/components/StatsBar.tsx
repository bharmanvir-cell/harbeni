import { motion } from 'motion/react';
import { CountUp } from './CountUp';

export const StatsBar = () => {
  const stats = [
    { label: "Admin Time Reduced", value: 80, suffix: "%" },
    { label: "AI Agents Deployed", value: 50, suffix: "+" },
    { label: "Conversion Lift", value: 45, suffix: "%" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full py-12 glass border-x-0"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center md:items-start">
              <div className="text-4xl md:text-5xl font-display font-extrabold text-white mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-zinc-500 font-medium uppercase tracking-widest text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
