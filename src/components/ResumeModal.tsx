import React, { useState } from 'react';
import { X, Printer, Download, Copy, Check, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white text-zinc-900 rounded-xl shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden when printing) */}
        <div className="no-print flex items-center justify-between px-6 py-4 border-b border-zinc-200 bg-zinc-50 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-zinc-700 uppercase tracking-wider">
              CURRICULUM VITAE · MAYANK KALRA
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-700 bg-white border border-zinc-300 rounded hover:bg-zinc-100 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Email' : 'Copy Email'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-zinc-900 hover:bg-black rounded transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-zinc-500 hover:text-zinc-900 rounded hover:bg-zinc-200 transition-colors"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-8 sm:p-12 overflow-y-auto font-sans leading-relaxed text-zinc-800 space-y-8 bg-white">
          {/* Header */}
          <div className="border-b-2 border-zinc-900 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 font-display">
                {PORTFOLIO_DATA.personal.name}
              </h1>
              <div className="text-sm font-semibold tracking-wide text-zinc-700">
                {PORTFOLIO_DATA.personal.role}
              </div>
            </div>

            <p className="text-sm text-zinc-600 mt-1">
              {PORTFOLIO_DATA.personal.headline}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-zinc-600">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-800" />
                <span>Delhi, India</span>
              </span>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="flex items-center gap-1.5 hover:text-black underline"
              >
                <Mail className="w-3.5 h-3.5 text-zinc-800" />
                <span>{PORTFOLIO_DATA.personal.email}</span>
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-black underline"
              >
                LinkedIn Profile
              </a>
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-black underline"
              >
                GitHub (CMD-Mayank)
              </a>
              <a
                href={PORTFOLIO_DATA.personal.portfolioUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-black underline font-semibold"
              >
                Online Portfolio
              </a>
            </div>
          </div>

          {/* Core Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 font-mono border-b border-zinc-200 pb-1">
              Professional Positioning
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              Product-focused builder combining UI/UX interface architecture with practical frontend engineering. Strong understanding of design hierarchy, user flows, responsive layouts, and how to execute ideas through modern web code and AI leverage. Seeking UI/UX Design, Product Design, and Frontend engineering internships and entry-level opportunities.
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 font-mono border-b border-zinc-200 pb-1">
              Work Experience
            </h2>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <span className="text-base font-bold text-zinc-950">
                  {PORTFOLIO_DATA.experience.role}
                </span>
                <span className="text-xs font-mono text-zinc-600">
                  {PORTFOLIO_DATA.experience.period} · Delhi, India
                </span>
              </div>
              <p className="text-xs text-zinc-600 mt-0.5">
                Client & Independent Web Development Practice
              </p>
              <ul className="mt-2 space-y-1.5 text-xs text-zinc-700 list-disc list-inside">
                {PORTFOLIO_DATA.experience.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 font-mono border-b border-zinc-200 pb-1">
              Featured Projects & Technical Works
            </h2>

            <div className="space-y-3.5">
              {/* Project 1 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="text-sm font-bold text-zinc-950">
                    AIIMS Haridwar — Client Website & Deployment (aiimsharidwar.com)
                  </span>
                  <span className="text-xs font-mono text-emerald-700 font-semibold">
                    Production Client Work
                  </span>
                </div>
                <p className="text-xs text-zinc-700 mt-1">
                  Designed and developed the official institutional website adhering to administrative requirements. Structured admissions, faculty departments, notices, and contact workflows. Handled cross-device responsive implementation, DNS configuration, and live SSL deployment.
                </p>
              </div>

              {/* Project 2 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="text-sm font-bold text-zinc-950">
                    Shraya Streams — Digital Streaming Product UI (shrayastreams.netlify.app)
                  </span>
                  <span className="text-xs font-mono text-zinc-600">
                    Product UI / UX Build
                  </span>
                </div>
                <p className="text-xs text-zinc-700 mt-1">
                  Engineered a media streaming discovery interface with focus on visual ergonomics, dark theme contrast, fluid category rows, and frictionless browsing across widescreen and mobile viewports.
                </p>
              </div>

              {/* Project 3 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="text-sm font-bold text-zinc-950">
                    Shraya.ai — Human-Centered AI Product Experience (shraya.netlify.app)
                  </span>
                  <span className="text-xs font-mono text-zinc-600">
                    AI Product & Frontend
                  </span>
                </div>
                <p className="text-xs text-zinc-700 mt-1">
                  Explored conversational and intent-based UX patterns to make generative AI approachable for non-technical users. Built responsive chat interfaces, query suggestion chips, and clear feedback states.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 font-mono border-b border-zinc-200 pb-1">
              Education
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
              <div>
                <span className="text-sm font-bold text-zinc-950">
                  {PORTFOLIO_DATA.education.institution}
                </span>
                <span className="text-xs text-zinc-600 block">
                  {PORTFOLIO_DATA.education.degree} — {PORTFOLIO_DATA.education.university}
                </span>
              </div>
              <span className="text-xs font-mono text-zinc-600">
                {PORTFOLIO_DATA.education.timeline}
              </span>
            </div>

            <div className="text-xs text-zinc-600">
              <strong>Coursework:</strong> {PORTFOLIO_DATA.education.coursework.join(', ')}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 font-mono border-b border-zinc-200 pb-1">
              Skills & Tooling
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-xs">
              <div>
                <strong className="text-zinc-950">Design & Prototyping:</strong> UI/UX, Visual Hierarchy, Responsive Layouts, Wireframing, Figma (developing proficiency)
              </div>
              <div>
                <strong className="text-zinc-950">Frontend Development:</strong> HTML5, CSS3, JavaScript (ES6+), React, Three.js / WebGL, Tailwind CSS
              </div>
              <div>
                <strong className="text-zinc-950">Backend & Fundamentals:</strong> Node.js, Express, REST APIs, SQL, Java, Data Structures
              </div>
              <div>
                <strong className="text-zinc-950">DevOps & Workflow:</strong> Git, GitHub, VS Code, Postman, DNS Configuration, SSL, Netlify
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
