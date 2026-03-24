import { motion } from 'motion/react';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
  { title: "Discover", desc: "We analyze your business needs and identify high-impact AI opportunities.", icon: Search },
  { title: "Architect", desc: "We design fluid web interfaces and robust neural data paths for your bots.", icon: PenTool },
  { title: "Integrate", desc: "We build high-performance systems with seamless AI and API integration.", icon: Code },
  { title: "Deploy", desc: "We launch edge-ready solutions with guaranteed 99.9% uptime and monitoring.", icon: Rocket },
];

export const Process = () => {
  return (
    <div className="pt-32 pb-24">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-6 max-w-7xl mx-auto text-center mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6">Our Process</h1>
        <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
          A systematic approach to building intelligent web applications and custom AI bots.
        </p>
      </motion.section>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 glass rounded-3xl text-center group hover:border-accent-cyan/30 hover:shadow-[0_0_20px_rgba(0,242,255,0.1)] transition-all duration-500"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent-cyan/10 text-accent-cyan flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-cyan group-hover:text-zinc-950 transition-colors">
              <step.icon size={32} />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">{step.title}</h3>
            <p className="text-zinc-500 leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
