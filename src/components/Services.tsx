import { motion } from 'motion/react';
import { Brain, Database, Smartphone, Globe, Layers, Cpu, Sparkles, Code, Workflow, Terminal } from 'lucide-react';
import { FuturisticIcon } from './FuturisticIcon';

const services = [
  {
    title: "Custom AI Agents",
    description: "24/7 smart AI integration for all communication methods. Intelligent, autonomous agents designed to handle your business interactions with precision.",
    icon: Brain,
    size: "lg:col-span-2",
    color: "cyan" as const
  },
  {
    title: "High-Conversion Web Dev",
    description: "Performance-optimized, SEO-ready websites built on Next.js. High-performance, fluid web interfaces optimized for maximum conversion.",
    icon: Code,
    size: "lg:col-span-1",
    color: "purple" as const
  },
  {
    title: "Workflow Automation",
    description: "Connecting your tools (CRM, Calendar, Email) to run your business on autopilot. Seamless API integrations for modular excellence.",
    icon: Workflow,
    size: "lg:col-span-1",
    color: "cyan" as const
  },
  {
    title: "SaaS Platforms",
    description: "Scalable multi-tenant platforms with anticipatory UI and robust AI-driven backends for enterprise-grade performance.",
    icon: Database,
    size: "lg:col-span-1",
    color: "purple" as const
  },
  {
    title: "System Architecture",
    description: "Designing the neural logic and mapping the UI for complex business processes with custom-built AI solutions.",
    icon: Terminal,
    size: "lg:col-span-1",
    color: "cyan" as const
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
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-syne font-black tracking-tighter mb-4 text-white">
          Intelligent Systems.<br />
          <span className="text-zinc-500">Sophisticated Design.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className={`group relative p-10 bg-[#040810] border border-white/5 rounded-[40px] overflow-hidden transition-all hover:border-accent-cyan/30 ${service.size}`}
          >
            {/* Background Glow */}
            <div className={`absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 ${service.color === 'cyan' ? 'bg-[#00e5ff]' : 'bg-[#9d4edd]'}`} />
            
            <div className="relative z-10">
              <div className="mb-8">
                <FuturisticIcon icon={service.icon} color={service.color} size={28} />
              </div>
              <h3 className="text-2xl font-syne font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed font-mono text-sm">
                {service.description}
              </p>
            </div>

            {/* Large Background Icon */}
            <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
               <service.icon size={200} className={service.color === 'cyan' ? 'text-[#00e5ff]' : 'text-[#9d4edd]'} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
