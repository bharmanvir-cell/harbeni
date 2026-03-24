import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Expertise', path: '/expertise' },
    { name: 'Work', path: '/work' },
    { name: 'Process', path: '/process' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 md:py-6 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center glass px-4 md:px-6 py-3 rounded-2xl pointer-events-auto relative">
        <Link to="/" className="text-xl md:text-2xl font-display font-black tracking-tighter shrink-0">
          HARBENI<span className="text-accent-cyan">.</span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`relative text-sm font-medium transition-colors group ${
                location.pathname === link.path ? 'text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-accent-cyan transition-all duration-300 shadow-[0_0_8px_rgba(0,242,255,0.8)] ${
                location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden sm:block px-5 py-2 bg-white text-zinc-950 text-sm font-bold rounded-lg hover:bg-accent-cyan hover:shadow-[0_0_15px_rgba(0,242,255,0.6)] transition-all active:scale-95">
            Get in Touch
          </Link>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-zinc-200 hover:text-white transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="absolute top-full left-0 right-0 mt-4 bg-zinc-900/98 backdrop-blur-xl rounded-2xl p-6 border border-white/10 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link 
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-display font-bold transition-colors ${
                      location.pathname === link.path ? 'text-accent-cyan' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link 
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 bg-white text-zinc-950 text-center font-bold rounded-xl sm:hidden"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
