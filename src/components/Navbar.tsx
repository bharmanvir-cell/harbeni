import { Link } from 'react-router-dom'; // we will add this later if needed, but for now using simple <a>

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-2xl font-syne tracking-tighter">
            Harbeni
          </a>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="/" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="/about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="/expertise" className="hover:text-cyan-400 transition-colors">Expertise</a>
            <a href="/work" className="hover:text-cyan-400 transition-colors">Work</a>
            <a href="/pricing" className="hover:text-cyan-400 transition-colors">Pricing</a>
            <a href="/process" className="hover:text-cyan-400 transition-colors">Process</a>
          </div>

          <a
            href="/contact"
            className="px-6 py-3 bg-white text-zinc-950 rounded-3xl text-sm font-medium hover:scale-105 transition-transform"
          >
            Command Your Empire
          </a>
        </div>
      </div>
    </nav>
  );
}
