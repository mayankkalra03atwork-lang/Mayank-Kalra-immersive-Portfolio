import React, { useState } from 'react';
import { X, Check, Copy, ExternalLink, ArrowRight, FileText, Mail, ShieldCheck, Sparkles, Code, Layout } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface RecruiterSnapshotModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onSelectProject: (projectId: string) => void;
}

export function RecruiterSnapshotModal({
  isOpen,
  onClose,
  onOpenResume,
  onSelectProject,
}: RecruiterSnapshotModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const recruiterPoints = [
    {
      num: '01',
      title: 'Who & What',
      desc: 'Mayank Kalra — UI/UX Designer × Frontend Developer based in Delhi, India. BCA student at JIMS Rohini (GGSIPU, class of 2028).',
      icon: Layout,
    },
    {
      num: '02',
      title: 'Real Shipped Work',
      desc: 'Designed and deployed AIIMS Haridwar (aiimsharidwar.com) for real institutional client requirements, including DNS, domain, SSL & responsive UI.',
      icon: ShieldCheck,
      action: () => onSelectProject('aiims-haridwar'),
      actionLabel: 'View AIIMS Haridwar',
    },
    {
      num: '03',
      title: 'Product UI & Discovery',
      desc: 'Built Shraya Streams — a digital streaming product exploring visual hierarchy, content discovery patterns, and responsive media cards.',
      icon: Layout,
      action: () => onSelectProject('shraya-streams'),
      actionLabel: 'View Shraya Streams',
    },
    {
      num: '04',
      title: 'AI-Native Product Builder',
      desc: 'Built Shraya.ai — presenting intelligent systems through clean, human-centered UI rather than raw backend endpoints.',
      icon: Sparkles,
      action: () => onSelectProject('shraya-ai'),
      actionLabel: 'View Shraya.ai',
    },
    {
      num: '05',
      title: 'Bridges Design & Frontend',
      desc: 'Writes real semantic HTML, CSS, JavaScript & React. Designs interfaces knowing how the DOM, flexbox/grid, and API responses work in production.',
      icon: Code,
    },
    {
      num: '06',
      title: 'Authenticity Guarantee',
      desc: 'Zero fabricated metrics, zero fake testimonials, zero invented awards. Honest execution and continuous hands-on learning.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#121215] border border-white/15 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#16161a]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-custom text-amber-400 uppercase tracking-wider">
              <span>Recruiter & Hiring Manager Fast-Track</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400">20-Second Overview</span>
            </div>
            <h2 className="text-lg sm:text-xl font-display font-bold text-white mt-1">
              Mayank Kalra — Quick Evaluation Snapshot
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* Key Positioning Callout */}
          <div className="p-4 bg-zinc-900/80 border border-amber-400/20 rounded-lg">
            <div className="text-xs font-mono-custom text-zinc-400 uppercase">Core Differentiation</div>
            <p className="text-base text-zinc-100 font-medium mt-1">
              "Mayank doesn't just design interfaces in Figma. He understands the interface, the product, the implementation, and what happens after the design."
            </p>
            <div className="mt-2 text-xs text-zinc-400">
              Ideal for: UI/UX Design Internships, Product Design, Frontend Development, and AI Product Prototyping teams.
            </div>
          </div>

          {/* 6 Key Takeaways Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recruiterPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.num}
                  className="p-4 rounded-lg bg-zinc-900/40 border border-white/5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono-custom text-zinc-500 mb-2">
                      <span>POINT {point.num}</span>
                      <Icon className="w-3.5 h-3.5 text-zinc-400" />
                    </div>
                    <div className="font-semibold text-zinc-200 text-sm mb-1">{point.title}</div>
                    <p className="text-xs text-zinc-400 leading-relaxed">{point.desc}</p>
                  </div>
                  {point.action && (
                    <button
                      onClick={() => {
                        point.action?.();
                        onClose();
                      }}
                      className="mt-3 inline-flex items-center gap-1 text-xs font-mono-custom text-amber-400 hover:underline pt-2 border-t border-white/5"
                    >
                      <span>{point.actionLabel}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Contact & Resume Action Bar */}
          <div className="p-4 bg-[#18181c] rounded-lg border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono-custom text-zinc-400">Direct Contact</div>
              <div className="font-mono-custom text-zinc-200 text-xs sm:text-sm mt-0.5">
                {PORTFOLIO_DATA.personal.email}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Email'}</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenResume();
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-black bg-white hover:bg-zinc-200 rounded-md transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Resume</span>
              </button>

              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md transition-colors"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
