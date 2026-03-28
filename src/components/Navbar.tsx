import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ModeToggle } from './mode-toggle'; // Ensure path is correct

const navLinks = [
  { name: 'ABOUT', path: '/about' },
  { name: 'EXPERTISE', path: '/expertise' },
  { name: 'WORK', path: '/work' },
  { name: 'PROCESS', path: '/process' },
  { name: 'PRICING', path: '/pricing' },
  { name: 'CONTACT', path: '/contact' },
];
const toggleTheme = () => {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-zinc-950/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-[#00FF41] rounded-sm flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">
              <Terminal size={18} className="text-black" />
            </div>
            <span className="text-xl font-bold tracking-tighter text-white">HARBENI.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-bold tracking-widest transition-all duration-300 hover:text-[#00FF41] relative group ${
                  location.pathname === link.path ? 'text-[#00FF41]' : 'text-zinc-400'
                }`}
              >
                {/* Glitch effect now only active on hover for better readability */}
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 text-[#00FF41] opacity-0 group-hover:opacity-50 group-hover:animate-pulse blur-[2px] transition-opacity">
                  {link.name}
                </span>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#00FF41]"
                  />
                )}
              </Link>
            ))}
            
            {/* Theme Toggle & CTA */}
            <div className="flex items-center gap-4 ml-4">
              <ModeToggle />
              <Link
                to="/contact"
                className="px-6 py-2 bg-[#00FF41] text-black text-xs font-bold tracking-widest rounded-sm hover:bg-[#00FF41]/90 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(0,255,65,0.3)]"
              >
                BOOK NOW
              </Link>
            </div>
          </div>
<button 
  onClick={toggleTheme}
  className="p-2 border border-zinc-800 rounded-sm text-[#00FF41] hover:bg-zinc-900 transition-colors"
>
  🌓
</button>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:text-[#00FF41] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950 border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 text-sm font-bold tracking-widest ${
                    location.pathname === link.path ? 'text-[#00FF41]' : 'text-zinc-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-4 bg-[#00FF41] text-black text-center text-sm font-bold tracking-widest rounded-sm"
                >
                  BOOK NOW
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
