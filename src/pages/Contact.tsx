import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useEffect, useState } from 'react';

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // === META UPDATE ===
  useEffect(() => {
    document.title = 'Contact Harbeni | Let’s Build the Future';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Ready to command your empire? Get in touch with Harbeni — 2030s digital intelligence architect.'
      );
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with your actual form backend (EmailJS, Resend, etc.)
    alert('🚀 Message received. I will reply within 12 hours.');
    setFormData({ name: '', email: '', message: '' });
  };

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
              <Mail className="w-4 h-4" />
              LET’S CONNECT
            </div>
            <h1 className="text-6xl md:text-7xl font-syne tracking-tighter leading-none mb-6">
              COMMAND YOUR EMPIRE
            </h1>
            <p className="text-2xl text-zinc-400">
              The future doesn’t wait. Neither do I.<br />
              Tell me your vision — I’ll make it inevitable.
            </p>
          </motion.div>
        </Container>
      </section>

      <div className="grid lg:grid-cols-12 gap-16 py-24">
        {/* FORM */}
        <div className="lg:col-span-7">
          <Container>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-mono text-zinc-400 mb-2">YOUR NAME</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="glass w-full px-6 py-5 rounded-3xl border border-white/10 focus:border-cyan-400 outline-none text-lg placeholder:text-zinc-500"
                    placeholder="Harman Sarabha"
                  />
                </div>
                <div>
                  <label className="block text-sm font-mono text-zinc-400 mb-2">YOUR EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="glass w-full px-6 py-5 rounded-3xl border border-white/10 focus:border-cyan-400 outline-none text-lg placeholder:text-zinc-500"
                    placeholder="you@empire.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-mono text-zinc-400 mb-2">YOUR VISION</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="glass w-full px-6 py-5 rounded-3xl border border-white/10 focus:border-cyan-400 outline-none text-lg placeholder:text-zinc-500 resize-none"
                  placeholder="Describe the empire you want to build..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full bg-white text-zinc-950 py-7 rounded-3xl text-2xl font-medium flex items-center justify-center gap-4 hover:bg-cyan-300 transition-colors group"
              >
                SEND TRANSMISSION
                <Send className="w-6 h-6 group-active:rotate-45 transition-transform" />
              </motion.button>
            </form>
          </Container>
        </div>

        {/* DIRECT CONTACT */}
        <div className="lg:col-span-5">
          <Container>
            <div className="glass p-10 rounded-3xl border border-white/10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-medium mb-8">Direct Transmission Lines</h3>
                
                <div className="space-y-8">
                  <a href="mailto:harman@harbeni.com" className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-400 transition-colors">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-mono text-zinc-400">EMAIL</div>
                      <div className="text-xl">harman@harbeni.com</div>
                    </div>
                  </a>

                  <a href="https://x.com/SarabhaHarman" target="_blank" className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-400 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25l-7.165 8.159L3.75 2.25H0L9.69 13.5 0 21.75h3.75l7.165-8.159 7.165 8.159H24L14.31 13.5 24 2.25z"/></svg>
                    </div>
                    <div>
                      <div className="text-sm font-mono text-zinc-400">X / TWITTER</div>
                      <div className="text-xl">@SarabhaHarman</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-mono text-zinc-400">LOCATION</div>
                      <div className="text-xl">Brampton, Ontario • Earth 2026</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-12 border-t border-white/10 text-sm text-zinc-400">
                Response time: <span className="text-cyan-400 font-medium">Under 12 hours</span><br />
                I reply to every serious empire builder.
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
