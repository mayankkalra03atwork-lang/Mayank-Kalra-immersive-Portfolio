import React from 'react';
import { ArrowDown, ArrowUpRight, Zap, Code2, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Hero3DCanvas } from './3d/Hero3DCanvas';

interface HeroProps {
  onOpenRecruiter: () => void;
}

export function Hero({ onOpenRecruiter }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-12 px-6 sm:px-8 max-w-7xl mx-auto"
    >
      {/* Top Meta Line: Location & Availability (clean unboxed text, no pills) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-400 font-mono-custom border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-zinc-200 tracking-wide">{PORTFOLIO_DATA.personal.availability}</span>
          <span className="text-zinc-600">·</span>
          <span>Delhi, India</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenRecruiter}
            className="flex items-center gap-1.5 text-zinc-300 hover:text-amber-400 transition-colors"
          >
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span className="underline underline-offset-4 decoration-amber-400/50">Recruiter 30s Snapshot</span>
          </button>
        </div>
      </div>

      {/* Main Hero Split: Editorial Typography on Left, 3D Spatial Geometry on Right */}
      <div className="my-auto py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 max-w-3xl">
          <span className="block text-xs sm:text-sm font-mono-custom tracking-[0.2em] text-zinc-500 uppercase mb-4">
            Personal Portfolio & Selected Works
          </span>

          <h1 className="font-display font-extrabold text-[12vw] sm:text-[8vw] lg:text-[6.5rem] leading-[0.92] tracking-[-0.04em] text-white">
            MAYANK
            <br />
            <span className="text-zinc-400">KALRA</span>
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-xl sm:text-2xl lg:text-3xl font-display font-semibold tracking-tight text-white">
            <span className="text-white">UI/UX DESIGNER</span>
            <span className="text-amber-400">×</span>
            <span className="text-zinc-300">FRONTEND DEVELOPER</span>
          </div>

          <p className="mt-5 text-base sm:text-lg text-zinc-300 max-w-xl font-light leading-relaxed">
            {PORTFOLIO_DATA.personal.subHeadline}
          </p>

          <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-xl font-light">
            {PORTFOLIO_DATA.personal.locationStatement}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-black bg-white rounded-md hover:bg-amber-400 hover:text-black transition-all duration-200 shadow-md group"
            >
              <span>VIEW SELECTED WORK</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-medium text-white border border-white/20 rounded-md hover:border-white hover:bg-white/5 transition-colors"
            >
              <span>CONTACT ME</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenRecruiter}
              className="inline-flex items-center gap-2 px-4 py-3.5 text-xs sm:text-sm font-mono-custom text-amber-400 hover:text-amber-300 underline underline-offset-4 transition-colors"
            >
              <span>Why Hire Me?</span>
            </button>
          </div>
        </div>

        {/* Right Column: Interactive 3D Spatial Geometry Canvas */}
        <div className="lg:col-span-5 w-full">
          <Hero3DCanvas />
        </div>
      </div>

      {/* Bottom Editorial Strip: The Mindset & Scroll Indicator */}
      <div className="border-t border-white/10 pt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-end text-xs text-zinc-400">
        <div className="md:col-span-4">
          <div className="text-zinc-500 font-mono-custom uppercase tracking-wider mb-1">Core Perspective</div>
          <p className="text-zinc-300 text-sm leading-snug">
            "Mayank doesn't just design interfaces. He understands the interface, the product, the implementation, and what happens after the design."
          </p>
        </div>

        <div className="md:col-span-5 font-mono-custom">
          <div className="text-zinc-500 uppercase tracking-wider mb-1">Execution Pipeline</div>
          <div className="flex items-center gap-2 text-zinc-300">
            <span>DESIGN</span>
            <span className="text-zinc-600">→</span>
            <span>BUILD</span>
            <span className="text-zinc-600">→</span>
            <span>TEST</span>
            <span className="text-zinc-600">→</span>
            <span>IMPROVE</span>
            <span className="text-zinc-600">→</span>
            <span className="text-amber-400">SHIP</span>
          </div>
        </div>

        <div className="md:col-span-3 flex md:justify-end">
          <a
            href="#work"
            className="inline-flex items-center gap-2 font-mono-custom text-zinc-400 hover:text-white transition-colors"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
