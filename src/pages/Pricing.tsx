import { motion } from 'motion/react';
import { Check, Zap, Brain, Rocket, Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FuturisticIcon } from '../components/FuturisticIcon';
import { useEffect } from 'react';

interface Plan {
  name: string;
  subtitle: string;
  price: string;
  type: string;
  description: string;
  icon: any;
  features: string[];
  accent: string;
  retainer?: string;
  popular?: boolean;
}

const plans: Plan[] = [
  {
    name: "Starter",
    subtitle: "Digital Presence",
    price: "1,500",
    type: "one-time",
    description: "Perfect for businesses looking for a high-performance web presence.",
    icon: Rocket,
    features: [
      "Custom Landing Page",
      "Mobile Optimized",
      "SEO Foundation",
      "2 Revisions",
      "Deployed in 5 Days"
    ],
    accent: "#00e5ff"
  },
  {
    name: "AI Integration",
    subtitle: "Chat & Voice",
    price: "400",
    type: "starts at",
    description: "Add intelligence to your existing platforms with custom AI solutions.",
    icon: Brain,
    features: [
      "AI Chat Integration — starts at $400",
      "Inbound AI Voice Agent — $1,500–$9,000",
      "Outbound + Inbound with CRM — $12,000–$20,000"
    ],
    accent: "#9d4edd"
  },
  {
    name: "Growth",
    subtitle: "Web Application",
    price: "4,000",
    retainer: "1,200",
    type: "one-time",
    description: "Full-scale web application with integrated AI management.",
    icon: Zap,
    popular: true,
    features: [
      "Full Web Application",
      "AI Chat Integration",
      "CMS Blog Setup",
      "Monthly Updates",
      "Priority Support"
    ],
    accent: "#00e5ff"
  },
  {
    name: "Elite",
    subtitle: "Full Autopilot",
    price: "20,000",
    retainer: "2,000",
    type: "one-time",
    description: "The ultimate AI-first architecture for enterprise-grade automation.",
    icon: Shield,
    features: [
      "Everything in Growth",
      "AI Voice Agent",
      "RAG-powered Custom AI",
      "CRM Integration",
      "Dedicated Slack Channel",
      "Weekly Reporting"
    ],
    accent: "#9d4edd"
  }
];

const PricingCard: React.FC<{ plan: Plan; index: number }> = ({ plan, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative group bg-[#040810] p-8 rounded-[32px] border transition-all duration-500 flex flex-col h-full ${
        plan.popular
          ? 'border-[#00e5ff]/30 shadow-[0_0_40px_rgba(0,229,255,0.1)] z-10'
          : 'border-white/5 hover:border-white/20'
      }`}
    >
      {plan.popular && (
        <>
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-[#00e5ff] to-[#9d4edd] text-zinc-950 text-[10px] font-black uppercase tracking-[0.2em] rounded-full z-20 shadow-[0_0_20px_rgba(0,229,255,0.4)]">
            Most Popular
          </div>
          <motion.div
            className="absolute inset-0 rounded-[32px] border-2 border-transparent bg-gradient-to-r from-[#00e5ff]/20 to-[#9d4edd]/20 pointer-events-none"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </>
      )}

      <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <FuturisticIcon
            icon={plan.icon}
            color={plan.accent === '#00e5ff' ? 'cyan' : 'purple'}
            size={24}
            glow={plan.popular}
          />
          <div>
            <h3 className="text-xl font-syne font-bold text-white">{plan.name}</h3>
            <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">{plan.subtitle}</p>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-syne font-black text-white">
              ${plan.price}
            </span>
            <span className="text-zinc-500 text-xs font-mono uppercase tracking-tighter">
              {plan.type}
            </span>
          </div>
          {plan.retainer && (
            <div className="mt-1 flex items-center gap-2">
              <span className="text-lg font-syne font-bold text-[#9d4edd]">+ ${plan.retainer}</span>
              <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-tighter">/mo retainer</span>
            </div>
          )}
        </div>

        <p className="text-zinc-400 text-sm mb-8 font-mono leading-relaxed min-h-[60px]">
          {plan.description}
        </p>

        <div className="space-y-4 mb-10 flex-1">
          {plan.features.map((feature) => (
            <div key={feature} className="flex items-start gap-3 text-xs text-zinc-300 font-mono">
              <div className="mt-1 w-4 h-4 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                <Check size={10} style={{ color: plan.accent }} />
              </div>
              <span className="leading-tight">{feature}</span>
            </div>
          ))}
        </div>

        <Link
          to="/contact"
          className={`w-full py-4 rounded-2xl font-syne font-bold text-xs uppercase tracking-widest transition-all text-center block ${
            plan.popular
              ? 'bg-[#00e5ff] text-zinc-950 hover:shadow-[0_0_30px_rgba(0,229,255,0.5)]'
              : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
          }`}
        >
          Get Started
        </Link>
      </div>
    </motion.div>
  );
};

export const Pricing = () => {
  useEffect(() => {
    document.title = 'Pricing — Build Your Empire';

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Transparent pricing for 2030s digital empires. From starter presence to full AI autopilot systems.');
    }
  }, []);

  return (
    <div className="pt-32 pb-24 bg-[#040810] min-h-screen">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-6 max-w-7xl mx-auto text-center mb-24"
      >
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-syne font-black mb-8 tracking-tighter text-white">
          Investment <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#9d4edd]">Plans.</span>
        </h1>
        <p className="text-zinc-500 font-mono text-sm md:text-base max-w-2xl mx-auto uppercase tracking-widest">
          Transparent pricing for high-performance web development and deep AI integration.
        </p>
      </motion.section>

      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
        {plans.map((plan, index) => (
          <PricingCard key={plan.name} plan={plan} index={index} />
        ))}
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-20 text-center"
      >
        <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
          Not sure? <Link to="/contact" className="text-[#00e5ff] hover:underline underline-offset-4 transition-all">Book a free 15-min call</Link>
        </p>
      </motion.div>
    </div>
  );
};
