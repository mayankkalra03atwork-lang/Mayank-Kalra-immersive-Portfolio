import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function Footer() {
  const [delhiTime, setDelhiTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // IST is UTC+5:30
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setDelhiTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#070709] py-12 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8 text-xs font-mono-custom text-zinc-500">
        <div>
          <span className="font-display font-bold text-white text-base block tracking-tight">
            MAYANK KALRA
          </span>
          <span className="text-zinc-400 block mt-0.5">
            UI/UX DESIGNER × FRONTEND DEVELOPER
          </span>
          <span className="text-amber-400/90 italic block mt-1">
            "Design it. Build it. Test it. Improve it. Ship it."
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div>
            <span className="block text-[10px] uppercase text-zinc-600">Local Time</span>
            <span className="text-zinc-300 font-medium">{delhiTime} IST (Delhi, India)</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono-custom text-zinc-600">
        <div>© 2026 Mayank Kalra. Authentic portfolio & engineered experiences.</div>
        <div className="flex items-center gap-4">
          <a href="#work" className="hover:text-zinc-400 transition-colors">Work</a>
          <a href="#philosophy" className="hover:text-zinc-400 transition-colors">Philosophy</a>
          <a href="#process" className="hover:text-zinc-400 transition-colors">Process</a>
          <a href="#contact" className="hover:text-zinc-400 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
