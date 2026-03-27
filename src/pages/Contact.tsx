import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: 'AI System',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    document.title = 'Contact Harbeni — Let’s Build the Future';

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Ready to command your empire? Get in touch with Harbeni — 2030s digital intelligence architect.');
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('loading');

    try {
      await fetch('https://formspree.io/f/mnjoqzra', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus('success');
      setForm({ name: '', email: '', projectType: 'AI System', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="pt-32 pb-24">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-6 max-w-7xl mx-auto text-center mb-20"
      >
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-extrabold mb-6">
          Get in Touch
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
          Ready to architect your next system? Let's build something without limits.
        </p>
      </motion.section>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-10 rounded-3xl hover:border-accent-cyan/20 transition-all duration-500"
        >
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center h-full gap-6 py-16 text-center">
              <CheckCircle size={56} className="text-accent-cyan" />
              <h3 className="text-2xl font-syne font-bold text-white">Message Sent</h3>
              <p className="text-zinc-400 font-mono text-sm">
                We'll be in touch within 24 hours.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-4 text-xs font-mono text-zinc-500 hover:text-accent-cyan transition-colors uppercase tracking-widest"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-cyan focus:shadow-[0_0_15px_rgba(0,242,255,0.2)] hover:border-white/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-cyan focus:shadow-[0_0_15px_rgba(0,242,255,0.2)] hover:border-white/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-cyan focus:shadow-[0_0_15px_rgba(0,242,255,0.2)] hover:border-white/20 transition-all appearance-none"
                >
                  <option className="bg-zinc-900">AI System</option>
                  <option className="bg-zinc-900">Custom SaaS</option>
                  <option className="bg-zinc-900">Mobile App</option>
                  <option className="bg-zinc-900">Web App</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-cyan focus:shadow-[0_0_15px_rgba(0,242,255,0.2)] hover:border-white/20 transition-all"
                  placeholder="Tell us about your project..."
                />
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-xs font-mono uppercase tracking-widest">
                  Something went wrong. Try emailing us directly at info@harbeni.com
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 bg-accent-cyan text-zinc-950 font-bold rounded-xl hover:shadow-[0_0_25px_rgba(0,242,255,0.6)] hover:scale-[1.01] transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Calendly Booking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl"
          >
            <h3 className="text-xl font-bold mb-4">Book a Discovery Call</h3>
            <p className="text-zinc-400 text-sm mb-6">
              Let's discuss your project in a 30-minute call.
            </p>
            <a
              href="https://calendly.com/bharmanvir/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 bg-white text-zinc-950 font-bold rounded-xl text-center hover:bg-accent-cyan hover:text-zinc-950 transition-all"
            >
              Schedule 30 Min Call
            </a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl flex items-center gap-6"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent-cyan/10 text-accent-cyan flex items-center justify-center">
              <Mail size={28} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Email Us</p>
              <p className="text-xl font-display font-bold">info@harbeni.com</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass p-8 rounded-3xl flex items-center gap-6"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent-purple/10 text-accent-purple flex items-center justify-center">
              <Phone size={28} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Call Us</p>
              <p className="text-xl font-display font-bold">(437) 367-0727</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass p-8 rounded-3xl flex items-center gap-6"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent-cyan/10 text-accent-cyan flex items-center justify-center">
              <MapPin size={28} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Visit Us</p>
              <p className="text-xl font-display font-bold">Brampton, Ontario (GTA)</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
