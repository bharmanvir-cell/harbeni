import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { FuturisticIcon } from './FuturisticIcon';

export const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-[#040810]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-syne font-black mb-6 text-white">HARBENI<span className="text-accent-cyan">.</span></h2>
            <p className="text-zinc-500 max-w-md mb-8 font-mono text-sm leading-relaxed">
              Intelligent Systems. Sophisticated Design. Automating Excellence for businesses in the Greater Toronto Area and beyond.
            </p>
            <div className="flex gap-4">
              <a href="https://x.com/harbenihq" target="_blank" rel="noopener noreferrer" className="group">
                <FuturisticIcon icon={Twitter} color="cyan" size={18} />
              </a>
              <a href="https://linkedin.com/company/harbeni" target="_blank" rel="noopener noreferrer" className="group">
                <FuturisticIcon icon={Linkedin} color="purple" size={18} />
              </a>
              <a href="https://github.com/harbeni" target="_blank" rel="noopener noreferrer" className="group">
                <FuturisticIcon icon={Github} color="cyan" size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-mono font-bold mb-6 uppercase tracking-[0.2em] text-[10px] text-zinc-500">Expertise</h4>
            <ul className="space-y-4 text-xs font-mono text-zinc-400">
              <li><Link to="/expertise" className="hover:text-accent-cyan transition-all">Custom AI Agents</Link></li>
              <li><Link to="/expertise" className="hover:text-accent-cyan transition-all">High-Conversion Web Dev</Link></li>
              <li><Link to="/expertise" className="hover:text-accent-cyan transition-all">Workflow Automation</Link></li>
              <li><Link to="/expertise" className="hover:text-accent-cyan transition-all">SaaS Platforms</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono font-bold mb-6 uppercase tracking-[0.2em] text-[10px] text-zinc-500">Company</h4>
            <ul className="space-y-4 text-xs font-mono text-zinc-400">
              <li><Link to="/work" className="hover:text-accent-cyan transition-all">Our Work</Link></li>
              <li><Link to="/process" className="hover:text-accent-cyan transition-all">Process</Link></li>
              <li><Link to="/pricing" className="hover:text-accent-cyan transition-all">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-accent-cyan transition-all">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] font-mono text-zinc-600">
          <div className="flex flex-col gap-3 mb-4 md:mb-0">
            <p>© 2026 Harbeni. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 items-center">
              <span className="px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 font-bold uppercase tracking-tighter text-[9px]">
                AEO: Optimized for AI Search & Discovery
              </span>
              <span className="flex gap-3 text-zinc-500">
                <span>Privacy-First Data Protocols</span>
                <span className="w-1 h-1 rounded-full bg-zinc-800 self-center" />
                <span>Secure API Architectures</span>
              </span>
            </div>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-accent-cyan transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-accent-cyan transition-colors">Terms of Service</Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};
