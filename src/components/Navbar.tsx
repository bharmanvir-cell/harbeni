import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center glass px-6 py-3 rounded-2xl pointer-events-auto">
        <Link to="/" className="text-2xl font-display font-black tracking-tighter">
          HARBENI<span className="text-accent-cyan">.</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/expertise" className="relative text-sm font-medium text-zinc-400 hover:text-white transition-colors group">
            Expertise
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-cyan transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(0,242,255,0.8)]" />
          </Link>
          <Link to="/work" className="relative text-sm font-medium text-zinc-400 hover:text-white transition-colors group">
            Work
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-cyan transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(0,242,255,0.8)]" />
          </Link>
          <Link to="/process" className="relative text-sm font-medium text-zinc-400 hover:text-white transition-colors group">
            Process
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-cyan transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(0,242,255,0.8)]" />
          </Link>
          <Link to="/contact" className="relative text-sm font-medium text-zinc-400 hover:text-white transition-colors group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-cyan transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(0,242,255,0.8)]" />
          </Link>
        </div>

        <Link to="/contact" className="px-5 py-2 bg-white text-zinc-950 text-sm font-bold rounded-lg hover:bg-accent-cyan hover:shadow-[0_0_15px_rgba(0,242,255,0.6)] transition-all active:scale-95">
          Get in Touch
        </Link>
      </div>
    </motion.nav>
  );
};
