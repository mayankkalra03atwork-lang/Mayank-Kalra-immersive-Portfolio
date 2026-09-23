import React from 'react';
import { ExternalLink, ArrowRight, ShieldCheck, Sparkles, Layers } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export function ProjectCard({ project, onOpenCaseStudy }: ProjectCardProps) {
  return (
    <article
      data-cursor="view"
      className="group relative bg-[#121215] border border-white/10 hover:border-white/25 rounded-xl overflow-hidden transition-all duration-300 flex flex-col justify-between"
    >
      {/* Visual Media Showcase with responsive aspect ratio */}
      <div
        onClick={() => onOpenCaseStudy(project)}
        className="relative aspect-video sm:aspect-[16/10] overflow-hidden bg-zinc-900 cursor-pointer"
      >
        <img
          src={project.image}
          alt={`Interface preview of ${project.title}`}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-transparent to-black/20 opacity-80" />

        {/* Top-Right Badge: Authentic Project Type (Unboxed text with border or clean indicator) */}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
          {project.isRealClient ? (
            <span className="flex items-center gap-1.5 px-3 py-1 bg-black/80 backdrop-blur-md border border-emerald-500/30 text-emerald-400 font-mono-custom text-xs rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>REAL CLIENT PROJECT</span>
            </span>
          ) : project.isPlaceholder ? (
            <span className="flex items-center gap-1.5 px-3 py-1 bg-black/80 backdrop-blur-md border border-amber-400/30 text-amber-300 font-mono-custom text-xs rounded-full">
              <Layers className="w-3.5 h-3.5" />
              <span>CASE STUDY BLUEPRINT</span>
            </span>
          ) : (
            <span className="flex items-center gap-1.5 px-3 py-1 bg-black/80 backdrop-blur-md border border-white/20 text-zinc-300 font-mono-custom text-xs rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{project.typeBadge}</span>
            </span>
          )}
        </div>

        {/* Number identifier */}
        <div className="absolute top-4 left-4 font-mono-custom text-xs text-zinc-400 font-bold tracking-widest bg-black/70 px-2 py-0.5 rounded">
          {project.number}
        </div>
      </div>

      {/* Content Block */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
        <div>
          {/* Category as unboxed text */}
          <div className="text-xs font-mono-custom text-amber-400/90 tracking-wider mb-2">
            {project.category}
          </div>

          <h3
            onClick={() => onOpenCaseStudy(project)}
            className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-amber-300 transition-colors cursor-pointer"
          >
            {project.title}
          </h3>

          <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
            {project.tagline}
          </p>

          {/* Real Client Workflow Strip if available */}
          {project.workflow && (
            <div className="mt-5 p-3 rounded-lg bg-zinc-900/60 border border-white/5">
              <div className="text-[11px] font-mono-custom text-zinc-500 uppercase tracking-wider mb-1.5">
                Client Delivery Lifecycle
              </div>
              <div className="flex flex-wrap items-center gap-1 text-[11px] font-mono-custom text-zinc-300">
                {project.workflow.map((step, idx) => (
                  <React.Fragment key={step}>
                    <span className="hover:text-amber-400 transition-colors">{step}</span>
                    {idx < (project.workflow?.length ?? 0) - 1 && (
                      <span className="text-zinc-600 px-0.5">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {/* Explored Points for Product Projects */}
          {project.exploredPoints && (
            <div className="mt-5 p-3 rounded-lg bg-zinc-900/60 border border-white/5">
              <div className="text-[11px] font-mono-custom text-zinc-500 uppercase tracking-wider mb-1.5">
                Key Design Decisions Explored
              </div>
              <ul className="text-xs text-zinc-400 space-y-1">
                {project.exploredPoints.slice(0, 3).map((pt) => (
                  <li key={pt} className="flex items-start gap-1.5">
                    <span className="text-amber-400 leading-none">·</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Figma Case Study Blueprint Highlights */}
          {project.figmaStructure && (
            <div className="mt-5 p-3 rounded-lg bg-zinc-900/60 border border-amber-400/20">
              <div className="flex items-center justify-between text-[11px] font-mono-custom text-amber-300 uppercase tracking-wider mb-1.5">
                <span>Authentic Placeholder</span>
                <span className="text-zinc-500">01 to 07 Framework</span>
              </div>
              <p className="text-xs text-zinc-400">
                Structured into Problem, User Flow, Wireframes, Visual Tokens, Hi-Fi UI, Prototype, and Reflection. Ready for replacement with upcoming Figma project.
              </p>
            </div>
          )}

          {/* Metadata: Role & Tools */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-y-2 text-xs text-zinc-400 font-mono-custom">
            <div>
              <span className="text-zinc-500">Role: </span>
              <span className="text-zinc-200">{project.role}</span>
            </div>
            <div>
              <span className="text-zinc-500">Status: </span>
              <span className="text-zinc-300">{project.timeline}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between gap-3">
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="inline-flex items-center gap-2 text-xs font-semibold text-white group-hover:text-amber-400 transition-colors"
          >
            <span>EXPLORE CASE STUDY</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>

          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-custom text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <span>Live Website</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          ) : (
            <span className="text-xs font-mono-custom text-zinc-500">
              Design Architecture
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
