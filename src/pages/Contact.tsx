import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-32 pb-24">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-6 max-w-7xl mx-auto text-center mb-20"
      >
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-extrabold mb-6">Get in Touch</h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
          Ready to architect your next system? Let's build something without limits.
        </p>
      </motion.section>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-10 rounded-3xl hover:border-accent-cyan/20 transition-all duration-500"
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Full Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-cyan focus:shadow-[0_0_15px_rgba(0,242,255,0.2)] hover:border-white/20 transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email Address</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-cyan focus:shadow-[0_0_15px_rgba(0,242,255,0.2)] hover:border-white/20 transition-all" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Project Type</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-cyan focus:shadow-[0_0_15px_rgba(0,242,255,0.2)] hover:border-white/20 transition-all appearance-none">
                <option className="bg-zinc-900">AI System</option>
                <option className="bg-zinc-900">Custom SaaS</option>
                <option className="bg-zinc-900">Mobile App</option>
                <option className="bg-zinc-900">Web App</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Message</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-cyan focus:shadow-[0_0_15px_rgba(0,242,255,0.2)] hover:border-white/20 transition-all" placeholder="Tell us about your project..."></textarea>
            </div>
            <button className="w-full py-4 bg-accent-cyan text-zinc-950 font-bold rounded-xl hover:shadow-[0_0_25px_rgba(0,242,255,0.6)] hover:scale-[1.01] transition-all active:scale-95 flex items-center justify-center gap-2">
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>

        <div className="space-y-8">
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
              <p className="text-xl font-display font-bold">hello@harbeni.com</p>
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
              <p className="text-xl font-display font-bold">+1 (555) 000-0000</p>
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
              <p className="text-xl font-display font-bold">San Francisco, CA</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
