import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { FuturisticIcon } from './FuturisticIcon';

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Most enterprise-grade systems are delivered within 2-16 weeks, depending on complexity and integration requirements."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes, we offer 24/7 technical support and maintenance packages to ensure your systems remain optimized and secure."
  },
  {
    question: "Can you integrate with our existing legacy systems?",
    answer: "Absolutely. Our architecture layer is designed specifically to bridge the gap between legacy data and modern cloud infrastructure."
  },
  {
    question: "What is your pricing model?",
    answer: "We offer both project-based and retainer-based models, tailored to the specific scale and duration of your initiative."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 max-w-3xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-syne font-black text-center mb-16 text-white"
      >
        Common Inquiries
      </motion.h2>
      
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-[#040810] border border-white/5 rounded-[24px] overflow-hidden hover:border-white/20 transition-all duration-500"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors group"
            >
              <span className="font-syne font-bold text-lg text-white">{faq.question}</span>
              <div className="transition-transform duration-300 group-hover:scale-110">
                <FuturisticIcon 
                  icon={openIndex === i ? Minus : Plus} 
                  color={openIndex === i ? 'cyan' : 'white'} 
                  size={16} 
                  glow={openIndex === i}
                />
              </div>
            </button>
            
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6 text-zinc-500 leading-relaxed font-mono text-sm">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
