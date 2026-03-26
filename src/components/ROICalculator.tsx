import { useState, useEffect } from 'react';
import { motion, useSpring, useTransform, animate } from 'motion/react';
import { AlertCircle, ArrowRight, TrendingDown } from 'lucide-react';

const painPoints = [
  { id: 'data-entry', label: 'Manual Data Entry', hoursPerEmp: 4 },
  { id: 'support', label: 'Customer Support', hoursPerEmp: 6 },
  { id: 'leads', label: 'Lead Follow-up', hoursPerEmp: 5 },
  { id: 'reporting', label: 'Reporting', hoursPerEmp: 3 },
];

const Counter = ({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(displayValue, value, {
      duration: 1.5,
      onUpdate: (latest) => setDisplayValue(latest),
    });
    return () => controls.stop();
  }, [value]);

  return (
    <span>
      {prefix}{Math.floor(displayValue).toLocaleString()}{suffix}
    </span>
  );
};

export const ROICalculator = () => {
  const [employees, setEmployees] = useState(50);
  const [painPoint, setPainPoint] = useState(painPoints[0]);
  const [isRevealed, setIsRevealed] = useState(false);

  const hourlyRate = 65;
  const annualHoursWasted = employees * painPoint.hoursPerEmp * 52;
  const annualCost = annualHoursWasted * hourlyRate;
  
  // Harbeni estimate: $15k base + $100 per employee
  const harbeniCost = 15000 + (employees * 100);
  const roiWeeks = Math.max(1, Math.round((harbeniCost / annualCost) * 52));

  return (
    <section className="py-24 px-6 bg-harbeni-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan rounded-full blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-red-500/30 text-red-400 text-xs font-mono mb-6"
          >
            <TrendingDown size={14} />
            <span>OPERATIONAL INEFFICIENCY AUDIT</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-syne font-extrabold tracking-tight mb-4">
            What you're <span className="text-red-500">bleeding</span> without us.
          </h2>
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">Calculate the true cost of manual operations.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-12">
            {/* Employee Slider */}
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <label className="text-lg font-syne font-bold text-zinc-300">Company Size</label>
                <span className="text-3xl font-mono text-accent-cyan">{employees} <span className="text-sm text-zinc-500">Employees</span></span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="500" 
                value={employees}
                onChange={(e) => setEmployees(parseInt(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-accent-cyan"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <span>1 Emp</span>
                <span>500 Emp</span>
              </div>
            </div>

            {/* Pain Point Dropdown */}
            <div className="space-y-6">
              <label className="text-lg font-syne font-bold text-zinc-300">Biggest Pain Point</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {painPoints.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPainPoint(p)}
                    className={`p-4 rounded-xl border transition-all text-left group ${
                      painPoint.id === p.id 
                        ? 'bg-accent-purple/10 border-accent-purple text-white' 
                        : 'bg-white/5 border-white/10 text-zinc-500 hover:border-white/20'
                    }`}
                  >
                    <p className="text-sm font-syne font-bold mb-1">{p.label}</p>
                    <p className="text-[10px] font-mono opacity-60 uppercase tracking-widest">
                      ~{p.hoursPerEmp}h / week / 10 emp
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={() => setIsRevealed(true)}
              className="w-full py-5 bg-white text-harbeni-dark font-syne font-black text-xl rounded-2xl hover:bg-accent-cyan transition-all flex items-center justify-center gap-3 group"
            >
              RUN AUDIT <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="relative">
            <div className={`glass rounded-3xl p-8 border-white/10 transition-all duration-700 ${isRevealed ? 'opacity-100 scale-100' : 'opacity-40 scale-95 blur-sm'}`}>
              <div className="space-y-8">
                <div>
                  <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-2">Annual Hours Wasted</p>
                  <p className="text-5xl font-syne font-black text-white">
                    <Counter value={annualHoursWasted} suffix="h" />
                  </p>
                </div>

                <div className="h-px bg-white/10" />

                <div className="relative">
                  <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-2">Financial Leakage</p>
                  <motion.div 
                    animate={isRevealed ? { 
                      scale: [1, 1.02, 1],
                      textShadow: ["0 0 0px rgba(239,68,68,0)", "0 0 20px rgba(239,68,68,0.5)", "0 0 0px rgba(239,68,68,0)"]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`text-6xl font-syne font-black transition-colors duration-500 ${isRevealed ? 'text-red-500' : 'text-zinc-700'}`}
                  >
                    <Counter value={annualCost} prefix="$" />
                  </motion.div>
                  
                  {isRevealed && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute -top-4 -right-4 bg-red-500 text-white text-[10px] font-mono font-bold px-3 py-1 rounded-full animate-bounce"
                    >
                      BLEEDING
                    </motion.div>
                  )}
                </div>

                {isRevealed && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="pt-8 space-y-4"
                  >
                    <div className="p-6 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/30">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-accent-cyan font-syne font-bold">Harbeni Solution</span>
                        <span className="text-white font-mono text-sm">${harbeniCost.toLocaleString()}</span>
                      </div>
                      <p className="text-xs text-zinc-400 font-mono mb-4">One-time implementation + 1yr license</p>
                      <div className="flex items-center gap-2 text-white font-syne font-black text-2xl">
                        ROI IN <span className="text-accent-cyan">{roiWeeks} WEEKS</span>
                      </div>
                    </div>
                    
                    <p className="text-center text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                      *Based on $65/hr average employee cost
                    </p>
                  </motion.div>
                )}
              </div>
            </div>

            {!isRevealed && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8 bg-harbeni-dark/80 backdrop-blur-sm rounded-2xl border border-white/10">
                  <AlertCircle className="mx-auto text-accent-cyan mb-4" size={32} />
                  <p className="font-syne font-bold text-white mb-2">Audit Pending</p>
                  <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest">Adjust inputs and run audit</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
