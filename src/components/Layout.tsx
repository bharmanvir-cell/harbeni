import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ChatBot } from './ChatBot';

export const Layout = () => {
  return (
    <div className="min-h-screen bg-zinc-950 overflow-x-hidden">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};
