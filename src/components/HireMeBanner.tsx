import React, { useState } from 'react';
import { ShieldCheck, Zap, Code, Sparkles, Check, Copy, Calendar, Mail, FileText, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HireMeBannerProps {
  onOpenResume: () => void;
  onOpenRecruiter: () => void;
}

export function HireMeBanner({ onOpenResume, onOpenRecruiter }: HireMeBannerProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const hirePillars = [
    {
      title: 'Zero Handoff Friction',
      desc: 'Designs are engineered with HTML/CSS/React feasibility in mind. No impossible Figma designs that break in production.',
      icon: Code,
    },
    {
      title: 'Real Client Delivery',
      desc: 'Successfully delivered and deployed live client work (aiimsharidwar.com) managing DNS, SSL certificates, and client feedback.',
      icon: ShieldCheck,
    },
    {
      title: '3D & Modern WebGL Skills',
      desc: 'Builds interactive Three.js 3D spatial viewports, modern animations, and immersive product interfaces beyond static pages.',
      icon: Sparkles,
    },
    {
      title: 'AI Native Builder',
      desc: 'Leverages AI workflows to scaffold prototypes, test edge cases, and ship functional MVPs at 3x typical speed.',
      icon: Zap,
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="relative rounded-2xl bg-gradient-to-br from-[#16161c] via-[#121216] to-[#0c0c0e] border border-amber-400/30 p-8 sm:p-12 shadow-2xl overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          {/* Pitch */}
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-mono-custom text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>ACTIVELY INTERVIEWING FOR INTERNSHIPS & JUNIOR ROLES</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.05]">
              WHY HIRE MAYANK?
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
              Most candidates either design in Figma without knowing how code works, or write code without visual taste. I bridge both worlds — designing thoughtful experiences and shipping them as responsive, performant products.
            </p>

            {/* Modality & Terms */}
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono-custom text-zinc-400">
              <span className="flex items-center gap-1.5 text-zinc-200">
                <Check className="w-3.5 h-3.5 text-amber-400" />
                <span>Remote or Delhi On-site</span>
              </span>
              <span className="flex items-center gap-1.5 text-zinc-200">
                <Check className="w-3.5 h-3.5 text-amber-400" />
                <span>Full-time / Part-time internship</span>
              </span>
              <span className="flex items-center gap-1.5 text-zinc-200">
                <Check className="w-3.5 h-3.5 text-amber-400" />
                <span>Available Immediately</span>
              </span>
            </div>
          </div>

          {/* Action Card */}
          <div className="p-6 rounded-xl bg-[#09090b]/90 border border-white/15 space-y-4 shrink-0 lg:w-80 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono-custom text-amber-400 uppercase tracking-wider block">
                Direct Recruiter Connect
              </span>
              <div className="text-base font-bold text-white mt-1">
                Let's set up a conversation
              </div>
              <p className="text-xs text-zinc-400 mt-1">
                I reply to emails within 2-4 hours.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}?subject=Interview%20Invitation%20-%20UI/UX%20%26%20Frontend%20Role`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-black bg-amber-400 hover:bg-amber-300 rounded-md transition-colors shadow-md"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>INVITE TO INTERVIEW</span>
              </a>

              <button
                onClick={onOpenResume}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-medium text-white bg-white/10 hover:bg-white/15 rounded-md border border-white/10 transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Curriculum Vitae</span>
              </button>

              <button
                onClick={onOpenRecruiter}
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 text-xs font-mono-custom text-zinc-400 hover:text-white transition-colors"
              >
                <span>30-Second Snapshot</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {hirePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="p-4 rounded-lg bg-black/40 border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono-custom text-amber-400">
                  <Icon className="w-3.5 h-3.5" />
                  <span className="font-semibold">{pillar.title}</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
