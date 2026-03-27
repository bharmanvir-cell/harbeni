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
    accent: "cyan",
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
    accent: "purple",
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
    accent: "cyan",
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
    accent: "purple",
  },
];

export default function Pricing() {
  useEffect(() => {
    document.title = 'Pricing | Harbeni — 2030s Digital Intelligence';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Transparent pricing for 2030s digital empires. From Starter presence to full AI Autopilot systems.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 pb-24">
      {/* HERO */}
      <section className="pt-32 pb-20 border-b border-white/10">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/5 text-sm px-5 py-2.5 rounded-3xl border border-white/10 mb-6">
              <Star className="w-4 h-4" />
              PRICING
            </div>
            <h1 className="text-6xl md:text-7xl font-syne tracking-tighter leading-none mb-6">
              BUILD YOUR EMPIRE
            </h1>
            <p className="text-2xl text-zinc-400">
              Transparent. Future-proof.<br />
              No hidden fees. Ever.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* PLANS */}
      <section className="py-24">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`glass relative rounded-3xl border border-white/10 hover:border-cyan-400/40 p-8 flex flex-col transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 right-6 bg-cyan-400 text-zinc-950 text-xs font-bold px-6 py-1 rounded-3xl flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    MOST POPULAR
                  </div>
                )}

                <plan.icon className={`w-10 h-10 mb-6 text-${plan.accent}-400`} />

                <h3 className="text-3xl font-medium mb-1">{plan.name}</h3>
                <p className="text-zinc-400 text-sm mb-6">{plan.subtitle}</p>

                <div className="mb-8">
                  <span className="text-6xl font-light">${plan.price}</span>
                  {plan.retainer && (
                    <span className="text-zinc-400 text-xl"> + {plan.retainer}</span>
                  )}
                  <span className="block text-xs font-mono text-zinc-500 mt-1">
                    {plan.type}
                  </span>
                </div>

                <p className="text-zinc-300 mb-10 flex-1">{plan.description}</p>

                <ul className="space-y-4 mb-12 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="mt-auto block text-center bg-white text-zinc-950 py-6 rounded-3xl text-xl font-medium hover:scale-105 active:scale-95 transition-transform"
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center py-20 border-t border-white/10"
      >
        <Container>
          <p className="text-3xl font-light mb-8">Not sure which empire to build?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-4 bg-white text-zinc-950 px-12 py-7 rounded-3xl text-2xl font-medium hover:scale-105 active:scale-95 transition-transform group"
          >
            Let’s Command It Together
            <ArrowRight className="w-7 h-7 group-active:translate-x-1 transition-transform" />
          </a>
        </Container>
      </motion.div>
    </div>
  );
}
