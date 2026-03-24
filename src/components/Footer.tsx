import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-zinc-950">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-display font-black mb-6">HARBENI<span className="text-accent-cyan">.</span></h2>
            <p className="text-zinc-500 max-w-md mb-8">
              Architecting the next generation of web applications and AI-driven automation. Specialized in deep AI integration and custom bot development.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-accent-cyan transition-colors"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-accent-cyan transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-accent-cyan transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-accent-cyan transition-colors"><Github size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold mb-6 uppercase tracking-widest text-xs text-zinc-500">Expertise</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><Link to="/expertise" className="hover:text-accent-cyan hover:shadow-[0_0_10px_rgba(0,242,255,0.3)] transition-all">AI Integration</Link></li>
              <li><Link to="/expertise" className="hover:text-accent-cyan hover:shadow-[0_0_10px_rgba(0,242,255,0.3)] transition-all">Custom AI Bots</Link></li>
              <li><Link to="/expertise" className="hover:text-accent-cyan hover:shadow-[0_0_10px_rgba(0,242,255,0.3)] transition-all">Web Development</Link></li>
              <li><Link to="/expertise" className="hover:text-accent-cyan hover:shadow-[0_0_10px_rgba(0,242,255,0.3)] transition-all">SaaS Platforms</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-6 uppercase tracking-widest text-xs text-zinc-500">Company</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><Link to="/expertise" className="hover:text-accent-cyan hover:shadow-[0_0_10px_rgba(0,242,255,0.3)] transition-all">About Us</Link></li>
              <li><Link to="/work" className="hover:text-accent-cyan hover:shadow-[0_0_10px_rgba(0,242,255,0.3)] transition-all">Our Work</Link></li>
              <li><Link to="/process" className="hover:text-accent-cyan hover:shadow-[0_0_10px_rgba(0,242,255,0.3)] transition-all">Process</Link></li>
              <li><Link to="/pricing" className="hover:text-accent-cyan hover:shadow-[0_0_10px_rgba(0,242,255,0.3)] transition-all">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-accent-cyan hover:shadow-[0_0_10px_rgba(0,242,255,0.3)] transition-all">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-zinc-600">
          <p>© 2026 Harbeni. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-accent-cyan transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-accent-cyan transition-colors">Terms of Service</Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};
