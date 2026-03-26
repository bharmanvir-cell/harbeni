import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Loader2, Calendar, Bot, User } from 'lucide-react';
// Remove this:
import { GoogleGenAI } from "@google/genai";

// Add this (Mistral uses plain fetch):
// No import needed

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: number;
  isBooking?: boolean;
}

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load history from session storage
  useEffect(() => {
    const savedMessages = sessionStorage.getItem('harbeni_chat_history');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      // First message after 8 seconds if no history
      const timer = setTimeout(() => {
        const firstMsg: Message = {
          id: 'first-msg',
          text: "Hey — looking to automate your business or build something? I can help you figure out what you need.",
          sender: 'bot',
          timestamp: Date.now(),
        };
        setMessages([firstMsg]);
        setIsOpen(true);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Save history to session storage
  useEffect(() => {
    if (messages.length > 0) {
      sessionStorage.setItem('harbeni_chat_history', JSON.stringify(messages));
    }
  }, [messages]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = async () => {
    const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${process.env.MISTRAL_API_KEY}`,
  },
  body: JSON.stringify({
    model: "mistral-small-latest",
    messages: [
      {
        role: "system",
        content: `You are the Harbeni AI Assistant. Harbeni is a high-end AI automation and web development agency based in Toronto. Services: Custom AI Agents, High-Conversion Web Dev, Workflow Automation, SaaS Platforms. Pricing: Launch $4,999, Growth $1,499/month, Enterprise custom. Tone: sophisticated, minimalist. Keep responses concise.`
      },
      ...messages.map(m => ({
        role: m.sender === "user" ? "user" : "assistant",
        content: m.text,
      })),
      { role: "user", content: inputValue },
    ],
    max_tokens: 300,
  }),
});

const data = await response.json();
const text = data.choices?.[0]?.message?.content;
    if (!inputValue.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Intent detection
    const highIntentPhrases = ["pricing", "hire", "how much", "start", "ready", "book", "cost", "quote"];
    const hasHighIntent = highIntentPhrases.some(phrase => inputValue.toLowerCase().includes(phrase));

    if (hasHighIntent) {
      setTimeout(() => {
        const botMsg: Message = {
          id: (Date.now() + 1).toString(),
          text: "Sounds like you're ready to move. Want to grab a free 15-min call with our team? Takes 30 seconds to book:",
          sender: 'bot',
          timestamp: Date.now(),
          isBooking: true,
        };
        setMessages(prev => [...prev, botMsg]);
        setIsTyping(false);
      }, 1500);
      return;
    }

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const response = await ai.models.generateContent({ 
        model: "gemini-2.0-flash",
        config: {
          systemInstruction: `You are the Harbeni AI Assistant. Harbeni is a high-end AI automation and web development agency based in Toronto.
          
          Services:
          - Custom AI Agents: Autonomous agents for lead capture and customer support.
          - High-Conversion Web Dev: Next.js based high-performance applications.
          - Workflow Automation: Connecting tools (CRM, Calendar, Email) to run businesses on autopilot.
          - SaaS Platforms: Building full-scale software solutions.
          
          Pricing:
          - Launch Plan: $4,999 (Flat fee for high-end web design).
          - Growth Plan: $1,499/month (AI management and automation hosting).
          - Enterprise Plan: Custom quotes for bespoke solutions.
          
          Tone: Sophisticated, intelligent, minimalist, and helpful. Use "we" when referring to Harbeni.
          Keep responses concise and professional.
          
          If the user seems ready to book or asks about hiring/pricing/starting, encourage them to book a call.`,
        },
        contents: messages.map(m => ({
          role: m.sender === 'user' ? 'user' : 'model',
          parts: [{ text: m.text }]
        })).concat([{ role: 'user', parts: [{ text: inputValue }] }])
      });

      const text = response.text;

      const botMsg: Message = {
        id: Date.now().toString(),
        text: text || "I'm sorry, I couldn't process that. How else can I help you?",
        sender: 'bot',
        timestamp: Date.now(),
      };

      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error("AI Error:", error);
      const errorMsg: Message = {
        id: Date.now().toString(),
        text: "I'm having a bit of trouble connecting right now. Feel free to reach out via our contact page!",
        sender: 'bot',
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-mono">
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 rounded-full bg-[#00e5ff] text-[#040810] flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.4)] overflow-visible"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageSquare size={24} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Neural Pulse Animation */}
        {!isOpen && (
          <>
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#00e5ff]"
              animate={{
                scale: [1, 1.5, 2],
                opacity: [0.5, 0.2, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#9d4edd]"
              animate={{
                scale: [1, 1.8, 2.5],
                opacity: [0.3, 0.1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeOut",
                delay: 0.5,
              }}
            />
          </>
        )}
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] max-h-[600px] h-[80vh] bg-[#040810] border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 bg-gradient-to-r from-[#00e5ff]/10 to-[#9d4edd]/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse" />
                <span className="font-syne font-bold text-sm uppercase tracking-widest text-white">Harbeni Intelligence</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide bg-[#040810]/50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-[#9d4edd] text-white rounded-tr-none shadow-[0_0_15px_rgba(157,78,221,0.2)]' 
                      : 'bg-white/5 border border-white/10 text-zinc-300 rounded-tl-none'
                  }`}>
                    {msg.text}
                    
                    {msg.isBooking && (
                      <div className="mt-4 w-full h-[350px] rounded-xl overflow-hidden border border-white/10 bg-black/40 shadow-inner">
                        <iframe
                          src="https://cal.com/harbeni/15min?embed=true"
                          width="100%"
                          height="100%"
                          frameBorder="0"
                          className="rounded-xl"
                          title="Booking Calendar"
                        ></iframe>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none flex gap-1.5 items-center">
                    <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]" />
                    <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]" />
                    <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/5 bg-[#040810]">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about our services..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-4 pr-12 text-sm focus:outline-none focus:border-[#00e5ff]/50 transition-all text-white placeholder:text-zinc-600 font-mono"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute right-2 p-2 text-[#00e5ff] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isTyping ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
