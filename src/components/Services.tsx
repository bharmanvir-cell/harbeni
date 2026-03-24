import { motion } from 'motion/react';
import { Brain, Database, Smartphone, Globe, Layers, Cpu } from 'lucide-react';

const services = [
  {
    title: "AI Integration",
    description: "Seamlessly integrate advanced LLMs and neural architectures into your existing business workflows.",
    icon: Brain,
    size: "lg:col-span-2",
    color: "from-accent-cyan/20 to-transparent"
  },
  {
    title: "Custom AI Bots",
    description: "Intelligent, autonomous bots designed to handle customer support, data analysis, and business automation.",
    icon: Cpu,
    size: "lg:col-span-1",
    color: "from-accent-purple/20 to-transparent"
  },
  {
    title: "Web Development",
    description: "High-performance, fluid web interfaces built with modern frameworks and optimized for conversion.",
    icon: Globe,
    size: "lg:col-span-1",
    color: "from-accent-cyan/20 to-transparent"
  },
  {
    title: "SaaS Platforms",
    description: "Scalable multi-tenant platforms with anticipatory UI and robust AI-driven backends.",
    icon: Database,
    size: "lg:col-span-1",
    color: "from-accent-purple/20 to-transparent"
  },
  {
    title: "System Automation",
    description: "Automate complex business processes with custom-built AI solutions and seamless API integrations.",
    icon: Layers,
    size: "lg:col-span-1",
    color: "from-accent-cyan/20 to-transparent"
  }
];

export const Services = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
          Modular Solutions.<br />
          <span className="text-zinc-500">Architected for the Future.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className={`group relative p-8 glass rounded-3xl overflow-hidden transition-all hover:border-accent-cyan/50 ${service.size}`}
          >
            <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent-cyan group-hover:text-zinc-950 transition-colors">
                <service.icon size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="absolute bottom-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <service.icon size={120} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
