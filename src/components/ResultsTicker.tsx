import { motion } from 'motion/react';
import { Building2, Rocket, Stethoscope, ShoppingBag, Scale, ShieldCheck, Truck, Target } from 'lucide-react';

const resultsRow1 = [
  { icon: Building2, text: "Luxury RE firm — ", result: "40% fewer missed leads" },
  { icon: Rocket, text: "SaaS startup — ", result: "onboarding automated in 3 days" },
  { icon: Stethoscope, text: "Med spa chain — ", result: "AI receptionist handling 200 calls/week" },
  { icon: ShoppingBag, text: "E-com brand — ", result: "24/7 support for 50k monthly users" },
];

const resultsRow2 = [
  { icon: Scale, text: "Legal firm — ", result: "Document analysis time cut by 80%" },
  { icon: ShieldCheck, text: "Fintech — ", result: "Fraud detection accuracy at 99.99%" },
  { icon: Truck, text: "Logistics — ", result: "Route optimization saving $12k/month" },
  { icon: Target, text: "Agency — ", result: "Lead qualification on autopilot" },
];

const ResultItem = ({ item }: { item: { icon: any, text: string, result: string } }) => (
  <div className="flex items-center gap-4 px-6 py-4 glass rounded-2xl border-white/5 mx-4 whitespace-nowrap group hover:border-accent-cyan/30 transition-all duration-300">
    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent-purple group-hover:text-accent-cyan transition-colors">
      <item.icon size={20} />
    </div>
    <p className="font-syne font-bold text-sm text-zinc-400">
      {item.text}
      <span className="text-accent-cyan font-mono font-medium uppercase tracking-widest text-xs">
        {item.result}
      </span>
    </p>
  </div>
);

export const ResultsTicker = () => {
  return (
    <section className="py-24 bg-harbeni-dark overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-[0.3em] mb-2">Social Proof</h2>
        <p className="text-2xl font-syne font-bold text-white">Proven Results Across Industries.</p>
      </div>

      <div className="space-y-8">
        {/* Row 1: Left to Right */}
        <div className="flex overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1920] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex items-center hover:[animation-play-state:paused]"
          >
            {[...resultsRow1, ...resultsRow1, ...resultsRow1, ...resultsRow1].map((item, i) => (
              <div key={i}>
                <ResultItem item={item} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex overflow-hidden">
          <motion.div 
            animate={{ x: [-1920, 0] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex items-center hover:[animation-play-state:paused]"
          >
            {[...resultsRow2, ...resultsRow2, ...resultsRow2, ...resultsRow2].map((item, i) => (
              <div key={i}>
                <ResultItem item={item} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
