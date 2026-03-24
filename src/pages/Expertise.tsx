import { motion } from 'motion/react';
import { Services } from '../components/Services';
import { Architecture } from '../components/Architecture';

export const Expertise = () => {
  return (
    <div className="pt-32">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-6 max-w-7xl mx-auto text-center mb-20"
      >
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-extrabold mb-6">Our Expertise</h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
          We specialize in high-performance web development and deep AI integration, creating intelligent bots that transform how businesses operate.
        </p>
      </motion.section>
      <Services />
      <Architecture />
    </div>
  );
};
