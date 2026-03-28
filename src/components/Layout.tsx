import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ChatBot } from './ChatBot';
import ThemeToggle from './ThemeToggle';

export const Layout = () => {
  return (
    <div className="min-h-screen overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ChatBot />
      
      {/* Floating Theme Toggle - Placed bottom-left to avoid the ChatBot & Navbar */}
      <div className="fixed bottom-6 left-6 z-[999]">
        <ThemeToggle />
      </div>
    </div>
  );
};
