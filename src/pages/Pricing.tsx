import { motion } from 'framer-motion';
import { Check, Zap, Brain, Rocket, Shield, Star, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
);

const plans = [
  {
    name: "Starter",
    subtitle: "Digital Presence",
    price: "1,500",
    type: "one-time",
    description: "High-performance web presence that makes you look like the future.",
    icon: Rocket,
    features: [
      "Custom Landing Page",
      "Mobile Optimized",
      "SEO Foundation",
      "2 Revisions",
      "Deployed in 5 Days"
    ],
  },
  {
    name: "AI Integration",
    subtitle: "Chat & Voice",
    price: "400",
    type: "starts at",
    description: "Add intelligence to your existing platforms instantly.",
    icon: Brain,
    features: [
      "AI Chat Integration",
      "Inbound AI Voice Agent",
      "Outbound + CRM Integration"
    ],
  },
  {
    name: "Growth",
    subtitle: "Web Application",
    price: "4,000",
    retainer: "1,200/mo",
    type: "one-time",
    description: "Full-scale intelligent web app with built-in AI management.",
    icon: Zap,
    popular: true,
    features: [
      "Full Web Application",
      "AI Chat + Voice",
      "CMS + Blog",
      "Monthly Updates",
      "Priority Support"
    ],
  },
  {
    name: "Elite",
    subtitle: "Full Autopilot",
    price: "20,000",
    retainer: "2,000/mo",
    type: "one-time",
    description: "Enterprise-grade AI-first architecture that runs itself.",
    icon: Shield,
    features: [
      "Everything in Growth",
      "Advanced RAG AI",
      "CRM + Automation",
      "Dedicated Slack",
      "Weekly Reporting"
    ],
  },
];

export default function Pricing() {
  useEffect(() => {
    document.title = 'Pricing | Harbeni';
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 pb-24">
      <Container>
        <div className="text-center py-20">
          <h1 className="text-6xl font-syne tracking-tighter mb-6">Pricing</h1>
          <p className="text-zinc-400 text-xl">Choose the plan that fits your empire</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-cyan-400/30"
            >
              {plan.popular && (
                <div className="bg-cyan-400 text-zinc-950 text-xs font-bold px-4 py-1 rounded-3xl w-fit mb-4">
                  MOST POPULAR
                </div>
              )}
              <plan.icon className="w-10 h-10 mb-6" />
              <h3 className="text-3xl font-medium">{plan.name}</h3>
              <p className="text-zinc-400 text-sm mb-6">{plan.subtitle}</p>

              <div className="mb-8">
                <span className="text-6xl font-light">${plan.price}</span>
                {plan.retainer && <span className="text-zinc-400"> + {plan.retainer}</span>}
              </div>

              <ul className="space-y-4 mb-12">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cyan-400 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className="block text-center bg-white text-zinc-950 py-6 rounded-3xl font-medium"
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
