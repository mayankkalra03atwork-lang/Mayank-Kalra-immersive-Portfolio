import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function SkillsSection() {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="text-xs font-mono-custom text-amber-400 tracking-[0.2em] uppercase block mb-3">
            05 / Technical & Creative Stack
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight">
            SKILLS & CAPABILITIES
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-xl font-light">
            An honest overview of technical breadth, interface fundamentals, and active areas of hands-on learning.
          </p>
        </div>

        <div className="text-xs font-mono-custom text-zinc-400 p-3 bg-zinc-900/60 rounded-lg border border-white/5 max-w-xs">
          <span className="text-amber-400 font-bold block mb-1">Authenticity Rule:</span>
          No inflated claims. Communicating genuine breadth and active, daily building.
        </div>
      </div>

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((category) => (
          <div
            key={category.title}
            className="p-6 sm:p-7 rounded-xl bg-[#121215] border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <h3 className="text-xl font-display font-bold text-white tracking-tight">
                  {category.title}
                </h3>
                <span className="text-[11px] font-mono-custom text-zinc-500">
                  {category.subtitle}
                </span>
              </div>

              {/* Skill list with honest notes */}
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between text-xs sm:text-sm"
                  >
                    <span className="text-zinc-200 font-medium">{skill.name}</span>
                    {skill.note && (
                      <span className="text-[11px] font-mono-custom text-zinc-500">
                        {skill.note}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-3 border-t border-white/5 text-[10px] font-mono-custom text-zinc-500 flex items-center justify-between">
              <span>Domain Verified</span>
              <span className="text-zinc-400">Practical Application</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
