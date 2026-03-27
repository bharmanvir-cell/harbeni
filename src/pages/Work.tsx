import { motion } from 'motion/react';
import { useEffect } from 'react';

const projects = [
  {
    title: "Gemini 1.5 Pro RAG Integration for CRM",
    category: "Technical Expertise / AI Systems",
    description: "Deep-dive case study: Integrating Gemini 1.5 Pro API into a local service business CRM. We architected a 'Retrieval-Augmented Generation' (RAG) setup that allows the AI to answer complex queries about grill cleaning pricing and availability in real-time. This implementation resulted in a 40% increase in lead-to-booking conversion by providing instant, accurate responses to potential clients.",
    image: "https://picsum.photos/seed/rag/800/600"
  },
  {
    title: "GTA Grill Pros Website & Booking System",
    category: "Service Industry / Local SEO",
    description: "A premium service platform for a luxury grill cleaning business. Integrated automated SMS reminders and a live booking calendar, reducing admin time by 80%.",
    image: "https://picsum.photos/seed/grill/800/600"
  },
  {
    title: "Aura Health AI",
    category: "AI Systems",
    description: "Intelligent health monitoring system with predictive analytics and automated patient outreach.",
    image: "https://picsum.photos/seed/aura/800/600"
  },
  {
    title: "Quantum CRM",
    category: "Enterprise",
    description: "Custom enterprise CRM with automated lead scoring and workflow orchestration.",
    image: "https://picsum.photos/seed/quantum/800/600"
  },
];

export const Work = () => {
  useEffect(() => {
    document.title = 'Work — Selected Digital Empires';

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Selected case studies and projects by Harbeni — real results from AI-powered platforms and intelligent digital experiences.');
    }
  }, []);

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
              <h3 className="text-2xl font-display font-bold mb-3">{project.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
