import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
);

const projects = [
  {
    title: "Gemini 1.5 Pro RAG Integration for CRM",
    category: "AI Systems Architecture",
    description: "Deep-dive case study: Built a Retrieval-Augmented Generation system that lets a local service business answer complex client queries in real-time. Result: 40% increase in lead-to-booking conversion.",
    image: "https://picsum.photos/seed/rag/1200/800",
    link: "#",
  },
  {
    title: "GTA Grill Pros Website & Booking System",
    category: "Full-Stack Velocity",
    description: "Premium booking platform for a luxury grill cleaning business. Automated SMS reminders + live calendar reduced admin time by 80%.",
    image: "https://picsum.photos/seed/grill/1200/800",
    link: "#",
  },
  {
    title: "Aura Health AI",
    category: "Product Intelligence",
    description: "Intelligent health monitoring platform with predictive analytics and automated patient outreach systems.",
    image: "https://picsum.photos/seed/aura/1200/800",
    link: "#",
  },
  {
    title: "Quantum CRM",
    category: "Enterprise Systems",
    description: "Custom enterprise CRM featuring automated lead scoring, workflow orchestration, and self-healing architecture.",
    image: "https://picsum.photos/seed/quantum/1200/800",
    link: "#",
  },
];

export default function Work() {
  // === META UPDATE ===
  useEffect(() => {
    document.title = 'Work | Harbeni — Selected Projects';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Selected work from Harbeni — AI systems, full-stack platforms, and intelligent digital products built for 2030s impact.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 pb-24">
      {/* HERO */}
      <section className="pt-32 pb-20 border-b border-white/10">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/5 text-sm px-5 py-2.5 rounded-3xl border border-white/10 mb-6">
              <ExternalLink className="w-4 h-4" />
              SELECTED WORK
            </div>
            <h1 className="text-6xl md:text-7xl font-syne tracking-tighter leading-none mb-6">
              EMPIRES I’VE BUILT
            </h1>
            <p className="text-2xl text-zinc-400">
              Real projects. Real results.<br />
              From concept to autonomous systems.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* PROJECTS GRID */}
      <section className="py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group glass rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-6 left-6 bg-black/70 text-xs font-mono px-4 py-2 rounded-3xl">
                    {project.category}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-medium mb-4 leading-tight">{project.title}</h3>
                  <p className="text-zinc-400 leading-relaxed mb-8">{project.description}</p>

                  <a
                    href={project.link}
                    className="inline-flex items-center gap-3 text-cyan-400 hover:text-white transition-colors font-medium"
                  >
                    View Case Study
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center py-20 border-t border-white/10"
      >
        <Container>
          <p className="text-3xl font-light mb-8">Ready to build your own empire?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-4 bg-white text-zinc-950 px-12 py-7 rounded-3xl text-2xl font-medium hover:scale-105 active:scale-95 transition-transform group"
          >
            Command Your Empire
            <ArrowRight className="w-7 h-7 group-active:translate-x-1 transition-transform" />
          </a>
        </Container>
      </motion.div>
    </div>
  );
}
