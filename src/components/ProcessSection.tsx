import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function ProcessSection() {
  const { process } = PORTFOLIO_DATA;

  return (
    <section id="process" className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="text-xs font-mono-custom text-amber-400 tracking-[0.2em] uppercase block mb-3">
            04 / Methodology
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight">
            HOW I WORK
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-xl font-light">
            A disciplined end-to-end framework from requirement discovery to production launch.
          </p>
        </div>

        <div className="text-xs font-mono-custom text-zinc-500 uppercase">
          Continuous Feedback & Quality Loops
        </div>
      </div>

      {/* 6 Step Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {process.map((p) => (
          <div
            key={p.step}
            className="p-6 sm:p-7 rounded-xl bg-[#121215] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="text-xs font-mono-custom text-amber-400 font-bold mb-4">
                STAGE {p.step}
              </div>

              <h3 className="text-2xl font-display font-bold text-white mb-4">
                {p.title}
              </h3>

              <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
                {p.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-zinc-600 mt-1">·</span>
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-custom text-zinc-500">
              <span>Standard of Care</span>
              <span className="text-zinc-400">Phase 0{p.step} Verified</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
