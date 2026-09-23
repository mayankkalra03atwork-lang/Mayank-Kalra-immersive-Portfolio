import React from 'react';
import { Sparkles, Terminal, ArrowRight, Check, Compass, Cpu, Zap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function AiLeverageSection() {
  const { aiWorkflow } = PORTFOLIO_DATA;

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Editorial Narrative */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs font-mono-custom text-amber-400 tracking-[0.2em] uppercase block">
            03 / Modern Velocity
          </span>

          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.05]">
            {aiWorkflow.headline}
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            {aiWorkflow.subheadline}
          </p>

          <blockquote className="p-4 rounded-lg bg-zinc-900/80 border-l-2 border-amber-400 text-sm text-zinc-200 font-medium italic">
            "{aiWorkflow.quote}"
          </blockquote>

          <div className="pt-2 text-xs font-mono-custom text-zinc-400 space-y-2">
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Rapid boilerplate & interactive prototype scaffolding</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Prompt ergonomics & conversational UX design</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Intentional human curation over layout and typography</span>
            </div>
          </div>
        </div>

        {/* Right Workflow Pipeline */}
        <div className="lg:col-span-7 bg-[#121215] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="text-xs font-mono-custom text-zinc-400 uppercase tracking-wider">
              The AI-Assisted Builder Pipeline
            </div>
            <span className="text-[11px] font-mono-custom text-amber-400">
              High Velocity · High Intent
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aiWorkflow.steps.map((step) => (
              <div
                key={step.step}
                className="p-4 rounded-lg bg-zinc-900/50 border border-white/5 hover:border-white/15 transition-colors"
              >
                <div className="flex items-center justify-between text-xs font-mono-custom text-zinc-500 mb-2">
                  <span>STEP {step.step}</span>
                  <span className="text-amber-400/80 font-bold">{step.name}</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between text-xs font-mono-custom text-zinc-400">
            <span>Resulting outcome:</span>
            <span className="text-zinc-200">From concept to functional, responsive product in days, not months.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
