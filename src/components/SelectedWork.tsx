import React from 'react';
import { ProjectCard } from './ProjectCard';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

interface SelectedWorkProps {
  onOpenCaseStudy: (project: Project) => void;
}

export function SelectedWork({ onOpenCaseStudy }: SelectedWorkProps) {
  return (
    <section id="work" className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="text-xs font-mono-custom text-amber-400 tracking-[0.2em] uppercase block mb-3">
            01 / Curated Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight">
            SELECTED WORK
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-xl font-light">
            A selection of interfaces, products and websites I've designed and built.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs font-mono-custom text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-zinc-300">1 Real Client Site Live</span>
          </div>
          <span className="text-zinc-600 hidden sm:inline">·</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-zinc-300">2 Product Builds</span>
          </div>
          <span className="text-zinc-600 hidden sm:inline">·</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="text-zinc-300">1 Figma Framework</span>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
        {PORTFOLIO_DATA.projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenCaseStudy={onOpenCaseStudy}
          />
        ))}
      </div>
    </section>
  );
}
