import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { StatsBar } from '../components/StatsBar';
import { Services } from '../components/Services';
import { Architecture } from '../components/Architecture';
import { Marquee } from '../components/Marquee';
import { EnterpriseFeatures } from '../components/EnterpriseFeatures';
import { FAQ } from '../components/FAQ';
import { ROICalculator } from '../components/ROICalculator';
import { Comparison } from '../components/Comparison';
import { ResultsTicker } from '../components/ResultsTicker';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

export const Home = () => {
  // === META UPDATE ===
  useEffect(() => {
    document.title = 'Harbeni | 2030s Digital Intelligence Agency';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Harbeni — The operating system for 2030s digital empires. AI-first design, autonomous systems, and interfaces that feel alive.'
      );
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-zinc-950 text-zinc-100"
    >
      <Hero />
      <StatsBar />
      <Services />
      <ROICalculator />
      <Comparison />
      <Architecture />
      <ResultsTicker />
      <Marquee />
      <EnterpriseFeatures />
      <FAQ />

      {/* FINAL CTA — exactly like the other polished pages */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center py-20 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-3xl font-light mb-8">Ready to command your empire?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-4 bg-white text-zinc-950 px-12 py-7 rounded-3xl text-2xl font-medium hover:scale-105 active:scale-95 transition-transform group"
          >
            Command Your Empire
            <ArrowRight className="w-7 h-7 group-active:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};
