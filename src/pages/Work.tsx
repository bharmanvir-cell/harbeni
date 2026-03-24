import { motion } from 'motion/react';

const projects = [
  { title: "Aura Health AI", category: "AI Systems", image: "https://picsum.photos/seed/aura/800/600" },
  { title: "Stellar Finance", category: "FinTech", image: "https://picsum.photos/seed/stellar/800/600" },
  { title: "Nexus Logistics", category: "SaaS", image: "https://picsum.photos/seed/nexus/800/600" },
  { title: "Quantum CRM", category: "Enterprise", image: "https://picsum.photos/seed/quantum/800/600" },
];

export const Work = () => {
  return (
    <div className="pt-32 pb-24">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-6 max-w-7xl mx-auto text-center mb-20"
      >
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-extrabold mb-6">Selected Work</h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
          Explore our portfolio of high-conversion digital products and enterprise-grade systems.
        </p>
      </motion.section>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group glass rounded-3xl overflow-hidden cursor-pointer hover:border-accent-cyan/50 hover:shadow-[0_0_30px_rgba(0,242,255,0.15)] transition-all duration-500"
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8">
              <p className="text-accent-cyan text-xs font-bold uppercase tracking-widest mb-2">{project.category}</p>
              <h3 className="text-2xl font-display font-bold">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
