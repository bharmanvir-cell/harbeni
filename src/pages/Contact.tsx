import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { useEffect } from 'react';

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
);

export function Contact() {
  useEffect(() => {
    document.title = 'Contact | Harbeni | 2030s Digital Design Agency'; 
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 pb-24">
      <Container>
        <div className="text-center py-20">
          <h1 className="text-6xl font-syne tracking-tighter mb-6">Get In Touch</h1>
          <p className="text-zinc-400 text-xl max-w-md mx-auto">
            Ready to build your empire? Let's make it happen.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-mono mb-2">YOUR NAME</label>
                  <input
                    type="text"
                    className="glass w-full px-6 py-5 rounded-3xl border border-white/10 focus:border-cyan-400 outline-none"
                    placeholder="Harman Sarabha"
                  />
                </div>
                <div>
                  <label className="block text-sm font-mono mb-2">YOUR EMAIL</label>
                  <input
                    type="email"
                    className="glass w-full px-6 py-5 rounded-3xl border border-white/10 focus:border-cyan-400 outline-none"
                    placeholder="you@empire.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-mono mb-2">YOUR MESSAGE</label>
                <textarea
                  rows={6}
                  className="glass w-full px-6 py-5 rounded-3xl border border-white/10 focus:border-cyan-400 outline-none resize-none"
                  placeholder="Tell me about your vision..."
                />
              </div>

              <button
                type="button"
                className="w-full bg-white text-zinc-950 py-7 rounded-3xl text-xl font-medium"
              >
                Send Transmission
              </button>
            </form>
          </div>

          {/* Direct Contact */}
          <div className="lg:col-span-5">
            <div className="glass p-10 rounded-3xl h-full">
              <h3 className="text-3xl font-medium mb-8">Direct Lines</h3>
              
              <div className="space-y-8">
                <a href="mailto:harman@harbeni.com" className="flex items-center gap-6">
                  <Mail className="w-6 h-6" />
                  <div>
                    <div className="text-sm font-mono text-zinc-400">EMAIL</div>
                    <div className="text-xl">harman@harbeni.com</div>
                  </div>
                </a>

                <a href="https://x.com/SarabhaHarman" target="_blank" className="flex items-center gap-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25l-7.165 8.159L3.75 2.25H0L9.69 13.5 0 21.75h3.75l7.165-8.159 7.165 8.159H24L14.31 13.5 24 2.25z"/>
                  </svg>
                  <div>
                    <div className="text-sm font-mono text-zinc-400">X / TWITTER</div>
                    <div className="text-xl">@SarabhaHarman</div>
                  </div>
                </a>

                <div className="flex items-center gap-6">
                  <MapPin className="w-6 h-6" />
                  <div>
                    <div className="text-sm font-mono text-zinc-400">LOCATION</div>
                    <div className="text-xl">Brampton, Ontario</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
