import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import ThemeToggle from './components/ThemeToggle';
import { About } from './pages/About';
import { Expertise } from './pages/Expertise';
import { Work } from './pages/Work';
import { Process } from './pages/Process';
import { Pricing } from './pages/Pricing';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="expertise" element={<Expertise />} />
          <Route path="work" element={<Work />} />
          <Route path="process" element={<Process />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
