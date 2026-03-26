import { ShieldCheck, Zap, BarChart3 } from 'lucide-react';
import { motion } from 'motion/react';
import { FuturisticIcon } from './FuturisticIcon';

const features = [
  {
    title: "AI Security",
    description: "Military-grade encryption and SOC2 compliant data handling for all your AI interactions.",
    icon: ShieldCheck,
    color: 'cyan' as const
  },
  {
    title: "Neural Scalability",
    description: "Auto-scaling cloud architectures that handle massive AI inference loads seamlessly.",
    icon: Zap,
    color: 'purple' as const
  },
  {
    title: "Predictive Analytics",
    description: "Leverage built-in analytics to monitor and optimize your AI bot performance.",
    icon: BarChart3,
    color: 'cyan' as const
  }
];

export const EnterpriseFeatures = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 bg-[#040810] border border-white/5 rounded-[32px] group hover:border-white/20 transition-all duration-500"
          >
            <div className="mb-8 group-hover:scale-110 transition-transform duration-500">
              <FuturisticIcon 
                icon={feature.icon} 
                color={feature.color} 
                size={24} 
                glow={true}
              />
            </div>
            <h3 className="text-xl font-syne font-bold mb-4 text-white">{feature.title}</h3>
            <p className="text-zinc-500 leading-relaxed text-sm font-mono">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
