import { motion } from 'framer-motion';
import ChatBot from '../components/ChatBot';
import { useEffect } from 'react';

export function Home() {
  useEffect(() => {
    document.title = 'Harbeni | 2030s Digital Intelligence';
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* HERO */}
      <section className="pt-32 pb-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-6xl md:text-7xl font-syne tracking-tighter leading-none mb-6">
                  THE END OF<br />PASSIVE SOFTWARE
                </h1>
                <p className="text-2xl text-zinc-400 max-w-lg">
                  Harbeni builds autonomous digital empires.<br />
                  Interfaces that anticipate. Systems that evolve.
                </p>
                <div className="flex gap-4 mt-10">
                  <a
                    href="/work"
                    className="px-8 py-6 bg-white text-zinc-950 rounded-3xl text-xl font-medium"
                  >
                    See the Work
                  </a>
                  <a
                    href="/contact"
                    className="px-8 py-6 border border-white/30 rounded-3xl text-xl font-medium"
                  >
                    Command Your Empire
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Chatbot Preview */}
            <div className="lg:col-span-5">
              <div className="glass rounded-3xl p-6">
                <ChatBot />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your original sections will still be here if you had components, but keeping it simple for now */}
      <div className="py-24 text-center text-zinc-400">
        <p>Your original Home sections (StatsBar, Services, etc.) can be added back later if needed.</p>
      </div>
    </div>
  );
}
