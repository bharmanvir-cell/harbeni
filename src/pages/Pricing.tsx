import { motion } from 'motion/react';
import { Check, Zap, Brain, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: "Starter",
    price: "4,999",
    description: "Perfect for businesses looking for a high-performance web presence.",
    icon: Rocket,
    features: [
      "Custom React Web Application",
      "High-Performance Optimization",
      "Mobile-First Responsive Design",
      "SEO & Analytics Integration",
      "Standard Support",
      "Cloud Deployment Setup"
    ],
    accent: "accent-cyan"
  },
  {
    name: "Growth",
    price: "9,999",
    description: "Ideal for companies ready to integrate AI into their core workflows.",
    icon: Brain,
    popular: true,
    features: [
      "Everything in Starter",
      "Custom AI Chatbot Integration",
      "LLM Workflow Automation",
      "Advanced Data Visualization",
      "Priority Support",
      "API Development & Integration"
    ],
    accent: "accent-purple"
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Full-scale AI systems and custom bot architectures for large organizations.",
    icon: Zap,
    features: [
      "Everything in Growth",
      "Custom Neural Architectures",
      "Autonomous AI Agents",
      "Dedicated Project Manager",
      "24/7 Technical Support",
      "SOC2 Compliant Data Handling"
    ],
    accent: "accent-cyan"
  }
];

export const Pricing = () => {
  return (
    <div className="pt-32 pb-24">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-6 max-w-7xl mx-auto text-center mb-20"
      >
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-extrabold mb-6">Investment <span className="text-gradient">Plans.</span></h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
          Transparent pricing for high-performance web development and deep AI integration.
        </p>
      </motion.section>

      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative glass p-8 rounded-3xl border border-white/5 flex flex-col ${
              plan.popular ? 'border-accent-purple/30 shadow-[0_0_30px_rgba(168,85,247,0.1)]' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-purple text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                Most Popular
              </div>
            )}

            <div className={`w-12 h-12 rounded-2xl bg-${plan.accent}/10 flex items-center justify-center text-${plan.accent} mb-6`}>
              <plan.icon size={24} />
            </div>

            <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-4xl font-display font-black">
                {plan.price === "Custom" ? "" : "$"}
                {plan.price}
              </span>
              {plan.price !== "Custom" && <span className="text-zinc-500 text-sm">/project</span>}
            </div>
            <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
              {plan.description}
            </p>

            <div className="space-y-4 mb-10 flex-1">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-sm text-zinc-300">
                  <div className={`w-5 h-5 rounded-full bg-${plan.accent}/10 flex items-center justify-center text-${plan.accent} shrink-0`}>
                    <Check size={12} />
                  </div>
                  {feature}
                </div>
              ))}
            </div>

            <Link 
              to="/contact" 
              className={`w-full py-4 rounded-xl font-bold text-sm transition-all text-center ${
                plan.popular 
                  ? 'bg-accent-purple text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]' 
                  : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              Start Project
            </Link>
          </motion.div>
        ))}
      </section>

      <section className="mt-24 px-6 max-w-4xl mx-auto text-center">
        <div className="glass p-12 rounded-[40px] border border-white/5">
          <h2 className="text-3xl font-display font-bold mb-6">Need a custom solution?</h2>
          <p className="text-zinc-400 mb-10 leading-relaxed">
            We understand that every business has unique requirements. If our standard plans don't fit your vision, let's architect a custom strategy together.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex px-8 py-4 bg-accent-cyan text-zinc-950 font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all"
          >
            Schedule a Strategy Call
          </Link>
        </div>
      </section>
    </div>
  );
};
