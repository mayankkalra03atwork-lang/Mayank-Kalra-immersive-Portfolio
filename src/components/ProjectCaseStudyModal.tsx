import React, { useEffect, useState } from 'react';
import { X, ExternalLink, ArrowRight, ShieldCheck, Sparkles, CheckCircle2, Layers, Cpu, Compass } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectCaseStudyModal({ project, onClose }: ProjectCaseStudyModalProps) {
  const [activeFigmaTab, setActiveFigmaTab] = useState<'flow' | 'system' | 'hifi' | 'reflection'>('system');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#121215] border border-white/20 rounded-xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#16161a] shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-mono-custom text-xs text-amber-400 font-bold">
              PROJECT {project.number}
            </span>
            <span className="text-zinc-600">/</span>
            <span className="font-mono-custom text-xs text-zinc-400 uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-custom text-black bg-white hover:bg-amber-400 font-medium rounded transition-colors"
              >
                <span>Live Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close case study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Title & Tagline */}
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                {project.title}
              </h2>
              {project.isRealClient ? (
                <span className="flex items-center gap-1 text-xs font-mono-custom text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Real Client Work</span>
                </span>
              ) : project.isPlaceholder ? (
                <span className="flex items-center gap-1 text-xs font-mono-custom text-amber-300 bg-amber-950/40 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Figma Study Template</span>
                </span>
              ) : (
                <span className="flex items-center gap-1 text-xs font-mono-custom text-zinc-300 bg-zinc-800/80 border border-white/15 px-2.5 py-0.5 rounded-full">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{project.typeBadge}</span>
                </span>
              )}
            </div>

            <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Large Visual Presentation */}
          <div className="relative rounded-xl overflow-hidden border border-white/10 bg-zinc-950 aspect-video">
            <img
              src={project.image}
              alt={`Full presentation of ${project.title}`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Metadata Grid: Role, Tools, Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-lg bg-zinc-900/50 border border-white/5 text-xs font-mono-custom">
            <div>
              <span className="text-zinc-500 block uppercase">Role & Responsibilities</span>
              <span className="text-zinc-200 text-sm font-medium mt-0.5 block">{project.role}</span>
            </div>
            <div>
              <span className="text-zinc-500 block uppercase">Timeline & Delivery</span>
              <span className="text-zinc-200 text-sm font-medium mt-0.5 block">{project.timeline}</span>
            </div>
            <div>
              <span className="text-zinc-500 block uppercase">Key Tools & Tech</span>
              <span className="text-zinc-200 text-sm font-medium mt-0.5 block">
                {project.tools.join(', ')}
              </span>
            </div>
          </div>

          {/* Real Client Project Workflow */}
          {project.workflow && (
            <div className="p-5 rounded-lg bg-zinc-900/60 border border-emerald-500/20">
              <div className="flex items-center justify-between text-xs font-mono-custom text-emerald-400 uppercase tracking-wider mb-3">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  Actual Client Delivery Workflow
                </span>
                <span className="text-zinc-500">Shipped to Production</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
                {project.workflow.map((step, idx) => (
                  <div key={step} className="p-2.5 rounded bg-black/40 border border-white/5 text-center">
                    <span className="text-[10px] text-zinc-500 block">STAGE 0{idx + 1}</span>
                    <span className="text-xs font-mono-custom text-zinc-200 font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Figma Case Study Architecture (Structured 01-07 Framework) */}
          {project.figmaStructure && (
            <div className="p-6 rounded-xl bg-zinc-900/70 border border-amber-400/20 space-y-6">
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs font-mono-custom text-amber-400 uppercase tracking-wider">
                  DESIGN EXPLORATION · FIGMA SPECIFICATION BLUEPRINT
                </span>
                <h3 className="text-xl font-display font-bold text-white mt-1">
                  Structured 7-Stage Case Study Architecture
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  This framework adheres to strict authenticity standards: no fabricated user stats or false testing personas. It will be swapped with my completed Figma project components and prototype.
                </p>
              </div>

              {/* Sub-tabs for previewing the blueprint */}
              <div className="flex flex-wrap items-center gap-2 border-b border-white/5 pb-3">
                <button
                  onClick={() => setActiveFigmaTab('system')}
                  className={`px-3 py-1.5 text-xs font-mono-custom rounded transition-colors ${
                    activeFigmaTab === 'system'
                      ? 'bg-amber-400 text-black font-semibold'
                      : 'text-zinc-400 hover:text-white bg-white/5'
                  }`}
                >
                  04 — Visual System
                </button>
                <button
                  onClick={() => setActiveFigmaTab('flow')}
                  className={`px-3 py-1.5 text-xs font-mono-custom rounded transition-colors ${
                    activeFigmaTab === 'flow'
                      ? 'bg-amber-400 text-black font-semibold'
                      : 'text-zinc-400 hover:text-white bg-white/5'
                  }`}
                >
                  02 — User Flow
                </button>
                <button
                  onClick={() => setActiveFigmaTab('hifi')}
                  className={`px-3 py-1.5 text-xs font-mono-custom rounded transition-colors ${
                    activeFigmaTab === 'hifi'
                      ? 'bg-amber-400 text-black font-semibold'
                      : 'text-zinc-400 hover:text-white bg-white/5'
                  }`}
                >
                  05 & 06 — Hi-Fi & Prototype
                </button>
                <button
                  onClick={() => setActiveFigmaTab('reflection')}
                  className={`px-3 py-1.5 text-xs font-mono-custom rounded transition-colors ${
                    activeFigmaTab === 'reflection'
                      ? 'bg-amber-400 text-black font-semibold'
                      : 'text-zinc-400 hover:text-white bg-white/5'
                  }`}
                >
                  07 — Reflection
                </button>
              </div>

              {activeFigmaTab === 'system' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded bg-black/40 border border-white/5">
                    <span className="font-mono-custom text-zinc-400 block mb-1">Typography System</span>
                    <p className="text-zinc-200">{project.figmaStructure.visualSystem.typography}</p>
                  </div>
                  <div className="p-3 rounded bg-black/40 border border-white/5">
                    <span className="font-mono-custom text-zinc-400 block mb-1">Color Palette Rule</span>
                    <p className="text-zinc-200">{project.figmaStructure.visualSystem.color}</p>
                  </div>
                  <div className="p-3 rounded bg-black/40 border border-white/5">
                    <span className="font-mono-custom text-zinc-400 block mb-1">Spatial Grid</span>
                    <p className="text-zinc-200">{project.figmaStructure.visualSystem.spacing}</p>
                  </div>
                  <div className="p-3 rounded bg-black/40 border border-white/5">
                    <span className="font-mono-custom text-zinc-400 block mb-1">Tokens & Components</span>
                    <p className="text-zinc-200">{project.figmaStructure.visualSystem.components}</p>
                  </div>
                </div>
              )}

              {activeFigmaTab === 'flow' && (
                <div className="p-4 rounded bg-black/40 border border-white/5">
                  <span className="font-mono-custom text-xs text-zinc-400 block mb-2">Linear Flow Journey</span>
                  <div className="flex flex-wrap items-center gap-2 font-mono-custom text-xs">
                    {project.figmaStructure.userFlow.map((step, idx) => (
                      <React.Fragment key={step}>
                        <span className="px-3 py-1.5 rounded bg-zinc-800 text-white font-medium">
                          {idx + 1}. {step}
                        </span>
                        {idx < (project.figmaStructure?.userFlow.length ?? 0) - 1 && (
                          <span className="text-amber-400 font-bold">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}

              {activeFigmaTab === 'hifi' && (
                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded bg-black/40 border border-white/5">
                    <span className="font-mono-custom text-zinc-400 block mb-1">05 — High-Fidelity UI Screens</span>
                    <p className="text-zinc-200">{project.figmaStructure.hiFi}</p>
                  </div>
                  <div className="p-3 rounded bg-black/40 border border-white/5">
                    <span className="font-mono-custom text-zinc-400 block mb-1">06 — Interactive Prototype</span>
                    <p className="text-zinc-200">{project.figmaStructure.prototype}</p>
                  </div>
                </div>
              )}

              {activeFigmaTab === 'reflection' && (
                <div className="p-4 rounded bg-black/40 border border-white/5 text-xs">
                  <span className="font-mono-custom text-zinc-400 block mb-1">07 — Design Reflection</span>
                  <p className="text-zinc-200 leading-relaxed">{project.figmaStructure.reflection}</p>
                </div>
              )}
            </div>
          )}

          {/* Editorial Case Study Content Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            {/* The Challenge */}
            <div className="p-5 rounded-xl bg-zinc-900/40 border border-white/5 space-y-2">
              <span className="text-xs font-mono-custom text-zinc-500 uppercase tracking-wider block">
                The Challenge
              </span>
              <p className="text-zinc-300 leading-relaxed">{project.challenge}</p>
            </div>

            {/* The Approach */}
            <div className="p-5 rounded-xl bg-zinc-900/40 border border-white/5 space-y-2">
              <span className="text-xs font-mono-custom text-zinc-500 uppercase tracking-wider block">
                The Approach
              </span>
              <p className="text-zinc-300 leading-relaxed">{project.approach}</p>
            </div>
          </div>

          {/* The Interface Highlights */}
          <div className="p-6 rounded-xl bg-zinc-900/40 border border-white/5 space-y-3">
            <span className="text-xs font-mono-custom text-zinc-500 uppercase tracking-wider block">
              The Interface & UX Decisions
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.interfaceHighlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <span className="text-amber-400 font-mono-custom">0{idx + 1}.</span>
                  <span className="leading-relaxed">{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* The Implementation Notes */}
          <div className="p-6 rounded-xl bg-zinc-900/40 border border-white/5 space-y-3">
            <span className="text-xs font-mono-custom text-zinc-500 uppercase tracking-wider block">
              The Frontend Implementation
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.implementationNotes.map((note, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <span className="text-emerald-400 font-mono-custom">✓</span>
                  <span className="leading-relaxed">{note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* The Result & The Learning */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="p-5 rounded-xl bg-zinc-900/40 border border-white/5 space-y-2">
              <span className="text-xs font-mono-custom text-zinc-500 uppercase tracking-wider block">
                The Result
              </span>
              <p className="text-zinc-300 leading-relaxed">{project.result}</p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/40 border border-white/5 space-y-2">
              <span className="text-xs font-mono-custom text-amber-400 uppercase tracking-wider block">
                The Learning
              </span>
              <p className="text-zinc-300 leading-relaxed">{project.learning}</p>
            </div>
          </div>

          {/* Footer Call to Action */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs text-zinc-500 font-mono-custom">
              Case Study curated by Mayank Kalra
            </span>

            <div className="flex items-center gap-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-black bg-white hover:bg-amber-400 rounded-md transition-colors"
                >
                  <span>VISIT LIVE DEPLOYMENT</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-zinc-300 border border-white/15 hover:bg-white/5 rounded-md transition-colors"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
