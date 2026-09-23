import React, { useState } from 'react';
import { PenTool, Code, CheckCircle, Rocket, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function DesignerWhoCanBuild() {
  const [activeStage, setActiveStage] = useState(0);

  const stageIcons = [PenTool, Code, CheckCircle, Rocket];

  return (
    <section id="philosophy" className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="max-w-4xl">
        <span className="text-xs font-mono-custom text-amber-400 tracking-[0.2em] uppercase block mb-3">
          02 / The Builder Difference
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.05]">
          I DON'T JUST DESIGN INTERFACES.
          <br />
          <span className="text-zinc-400">I THINK ABOUT WHAT HAPPENS AFTER THE DESIGN.</span>
        </h2>
        <p className="mt-6 text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-2xl">
          Static mockups cannot represent how a layout behaves when real content stretches, when network latency delays an API, or when a user touches a button on mobile. Because I write code, I design with reality in mind.
        </p>
      </div>

      {/* 4 Interactive Stages */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-4">
        {PORTFOLIO_DATA.builderStages.map((stage, idx) => {
          const Icon = stageIcons[idx];
          const isSelected = activeStage === idx;
          return (
            <div
              key={stage.number}
              onClick={() => setActiveStage(idx)}
              className={`p-6 sm:p-7 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#18181c] border-amber-400/40 shadow-lg shadow-amber-400/5'
                  : 'bg-[#121215] border-white/10 hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono-custom mb-6">
                  <span className={isSelected ? 'text-amber-400 font-bold' : 'text-zinc-500'}>
                    STAGE {stage.number}
                  </span>
                  <Icon
                    className={`w-4 h-4 ${
                      isSelected ? 'text-amber-400' : 'text-zinc-500'
                    }`}
                  />
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  {stage.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                  {stage.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono-custom">
                <span className={isSelected ? 'text-amber-400' : 'text-zinc-500'}>
                  {isSelected ? 'Active Focus' : 'Explore stage'}
                </span>
                <span className="text-zinc-600">→</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Deep-Dive Stage Expansion Banner */}
      <div className="mt-8 p-6 sm:p-8 rounded-xl bg-[#141418] border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono-custom text-amber-400 mb-1">
            <span>STAGE {PORTFOLIO_DATA.builderStages[activeStage].number} DEEP DIVE</span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-300">{PORTFOLIO_DATA.builderStages[activeStage].title}</span>
          </div>
          <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
            {PORTFOLIO_DATA.builderStages[activeStage].details}
          </p>
        </div>

        <div className="shrink-0 font-mono-custom text-xs text-zinc-400 bg-black/40 px-4 py-3 rounded-lg border border-white/5">
          <span className="text-zinc-500 block text-[10px] uppercase mb-1">The Hand-off Reality</span>
          <span className="text-emerald-400 font-medium">Zero Designer-Developer Friction</span>
        </div>
      </div>
    </section>
  );
}
