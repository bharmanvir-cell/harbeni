import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useEffect } from 'react';

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
);

const projects = [
  {
    title: "Gemini 1.5 Pro RAG Integration",
    category: "AI Systems",
    description: "Built a Retrieval-Augmented Generation system for a local service business.",
    image: "https://picsum.photos/seed/rag/1200/800",
  },
  {
    title: "GTA Grill Pros Booking System",
    category: "Full-Stack",
    description: "Premium booking platform with automated SMS reminders and live calendar.",
    image: "https://picsum.photos/seed/grill/1200/800",
  },
  {
    title: "Aura Health AI Platform",
    category: "Product Intelligence",
    description: "Intelligent health monitoring with predictive analytics.",
    image: "https://picsum.photos/seed/aura/1200/800",
  },
];

export function Work() {
  useEffect(() => {
    document.title = 'Work | Harbeni';
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 pb-24">
      <Container>
        <div className="text-center py-20">
          <h1 className="text-6xl font-syne tracking-tighter mb-6">Selected Work</h1>
          <p className="text-zinc-400 text-xl">Empires I've helped build</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-400/30"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="text-xs font-mono text-cyan-400 mb-2">{project.category}</div>
                <h3 className="text-2xl font-medium mb-3">{project.title}</h3>
                <p className="text-zinc-400 text-sm mb-8">{project.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-white"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center py-12 border-t border-white/10 mt-16">
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-zinc-950 px-10 py-6 rounded-3xl text-xl font-medium"
          >
            Let's Build Yours →
          </a>
        </div>
      </Container>
    </div>
  );
}
