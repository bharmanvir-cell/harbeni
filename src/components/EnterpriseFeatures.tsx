import { ShieldCheck, Zap, BarChart3 } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    title: "AI Security",
    description: "Military-grade encryption and SOC2 compliant data handling for all your AI interactions.",
    icon: ShieldCheck
  },
  {
    title: "Neural Scalability",
    description: "Auto-scaling cloud architectures that handle massive AI inference loads seamlessly.",
    icon: Zap
  },
  {
    title: "Predictive Analytics",
    description: "Leverage built-in analytics to monitor and optimize your AI bot performance.",
    icon: BarChart3
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
            className="p-8 glass rounded-3xl group"
          >
            <div className="w-12 h-12 rounded-2xl bg-accent-cyan/10 text-accent-cyan flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <feature.icon size={24} />
            </div>
            <h3 className="text-xl font-display font-bold mb-3">{feature.title}</h3>
            <p className="text-zinc-500 leading-relaxed text-sm">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
