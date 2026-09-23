import React from 'react';
import { Briefcase, GraduationCap, MapPin, CheckCircle, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenResume: () => void;
}

export function AboutSection({ onOpenResume }: AboutSectionProps) {
  const { experience, education } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
        {/* Left Column: Portrait & Quick Facts */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-square max-w-md bg-zinc-900">
            <img
              src="/src/assets/images/mayank_portrait_1790162642678.jpg"
              alt="Editorial portrait of Mayank Kalra"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono-custom text-white">
              <div>
                <span className="font-semibold block text-sm">Mayank Kalra</span>
                <span className="text-zinc-400">Delhi, India</span>
              </div>
              <span className="px-2.5 py-1 rounded bg-black/60 border border-white/20 text-emerald-400 text-[11px]">
                Active Builder
              </span>
            </div>
          </div>

          {/* Quick Context Card */}
          <div className="p-5 rounded-xl bg-[#121215] border border-white/10 space-y-3 text-xs font-mono-custom">
            <div className="flex items-center justify-between text-zinc-400 border-b border-white/5 pb-2">
              <span>Location</span>
              <span className="text-white">Delhi, India (IST / UTC+5:30)</span>
            </div>
            <div className="flex items-center justify-between text-zinc-400 border-b border-white/5 pb-2">
              <span>Degree</span>
              <span className="text-white">BCA, JIMS Rohini (GGSIPU)</span>
            </div>
            <div className="flex items-center justify-between text-zinc-400 border-b border-white/5 pb-2">
              <span>Target Roles</span>
              <span className="text-amber-400">UI/UX · Product Design · Frontend</span>
            </div>
            <div className="flex items-center justify-between text-zinc-400 pt-1">
              <span>Availability</span>
              <span className="text-emerald-400">Internships & Entry Roles</span>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Bio, Experience & Education */}
        <div className="lg:col-span-7 space-y-12">
          {/* Editorial Story */}
          <div className="space-y-6">
            <span className="text-xs font-mono-custom text-amber-400 tracking-[0.2em] uppercase block">
              06 / Profile & Background
            </span>

            <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              A LITTLE ABOUT ME
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
              <p>
                I'm <strong className="font-semibold text-white">Mayank</strong>, a BCA student and builder from Delhi interested in the intersection of design, technology and AI.
              </p>
              <p>
                I enjoy turning ideas into interfaces that people can actually use — from client websites to experimental products and AI-focused experiences.
              </p>
              <p>
                My development background gives me a different perspective on design. I think about not only how an interface looks, but how it will behave, respond, scale and eventually be built.
              </p>
              <p className="text-zinc-400 text-sm sm:text-base">
                I'm currently developing deeper expertise in UI/UX and Figma while continuing to build with frontend technologies and AI.
              </p>
            </div>
          </div>

          {/* Real Work Experience */}
          <div className="space-y-4 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono-custom text-amber-400 uppercase tracking-wider">
              <Briefcase className="w-4 h-4" />
              <span>Direct Client Experience</span>
            </div>

            <div className="p-6 rounded-xl bg-[#121215] border border-white/10 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="text-xl font-display font-bold text-white">
                    {experience.role}
                  </h3>
                  <div className="text-xs font-mono-custom text-zinc-400">
                    {experience.type}
                  </div>
                </div>
                <span className="text-xs font-mono-custom text-amber-400">
                  {experience.period}
                </span>
              </div>

              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                {experience.description}
              </p>

              <div className="pt-2 border-t border-white/5 space-y-2">
                <div className="text-[11px] font-mono-custom text-zinc-500 uppercase">
                  Core Responsibilities Executed:
                </div>
                <div className="grid grid-cols-1 gap-2 text-xs text-zinc-300">
                  {experience.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold leading-none">·</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono-custom text-amber-400 uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </div>

            <div className="p-6 rounded-xl bg-[#121215] border border-white/10 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="text-lg font-display font-bold text-white">
                    {education.institution}
                  </h3>
                  <div className="text-xs text-zinc-400">
                    {education.university} · {education.degree}
                  </div>
                </div>
                <span className="text-xs font-mono-custom text-zinc-400">
                  {education.timeline}
                </span>
              </div>

              <div className="pt-2 border-t border-white/5">
                <div className="text-[11px] font-mono-custom text-zinc-500 uppercase mb-2">
                  Relevant Coursework:
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-mono-custom text-zinc-300">
                  {education.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-1 rounded bg-black/40 border border-white/5 text-zinc-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Resume CTA */}
          <div className="pt-4 flex items-center gap-4">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-black bg-white hover:bg-amber-400 rounded-md transition-colors"
            >
              <span>VIEW COMPLETE RESUME</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
