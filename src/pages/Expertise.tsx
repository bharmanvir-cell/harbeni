import { motion } from 'motion/react';
import { Services } from '../components/Services';
import { Architecture } from '../components/Architecture';
import { useEffect } from 'react';

export const Expertise = () => {
  useEffect(() => {
    document.title = 'Expertise — AI Systems & Futuristic Design';

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Harbeni’s core expertise: AI Systems Architecture, Cyber-Futuristic Design, Full-Stack Velocity, and Product Intelligence Strategy.');
    }
  }, []);

  return (
    <div className="pt-32">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-6 max-w-7xl mx-auto text-center mb-20"
      >
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-extrabold mb-6">Our Expertise</h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
          We specialize in custom AI agents, high-conversion web development on Next.js, and workflow automation that puts your business on autopilot.
        </p>
      </motion.section>

      <Services />
      <Architecture />
    </div>
  );
};
