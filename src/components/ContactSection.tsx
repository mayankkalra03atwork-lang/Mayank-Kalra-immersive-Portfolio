import React, { useState } from 'react';
import { Mail, ExternalLink, Copy, Check, FileText, ArrowUpRight, Send, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export function ContactSection({ onOpenResume }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('Product / Design Opportunity');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Resume Interlude Banner */}
      <div className="mb-24 p-8 sm:p-12 rounded-2xl bg-[#121215] border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="space-y-2 max-w-xl">
          <span className="text-xs font-mono-custom text-amber-400 uppercase tracking-widest block">
            Executive Summary
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
            WANT THE SHORT VERSION?
          </h3>
          <p className="text-sm sm:text-base text-zinc-300 font-light">
            Review my complete, print-ready curriculum vitae with verified education, freelance client history, and technical competencies.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-black bg-white hover:bg-amber-400 rounded-md transition-colors shadow-md"
          >
            <FileText className="w-4 h-4" />
            <span>VIEW RESUME</span>
          </button>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-medium text-white border border-white/20 hover:bg-white/10 rounded-md transition-colors"
          >
            <span>DOWNLOAD / PRINT</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
        {/* Left Column: Big Headline & Direct Channels */}
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-mono-custom text-amber-400 tracking-[0.2em] uppercase block">
            07 / Next Step
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.02]">
            LET'S BUILD
            <br />
            SOMETHING USEFUL.
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-lg">
            Open to UI/UX, frontend, product and AI-focused opportunities. Whether you have an internship role, an entry-level position, or a product in need of building — let's connect.
          </p>

          <div className="pt-4 space-y-3">
            {/* Email Bar */}
            <div className="p-4 rounded-xl bg-[#121215] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-mono-custom text-zinc-500 block uppercase">
                  Primary Inbox
                </span>
                <span className="text-sm font-mono-custom text-zinc-200">
                  {PORTFOLIO_DATA.personal.email}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>

                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-black bg-white hover:bg-amber-400 rounded transition-colors"
                >
                  <span>Email</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Social Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono-custom">
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-[#121215] border border-white/10 hover:border-white/25 flex items-center justify-between text-zinc-300 hover:text-white transition-colors"
              >
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-[#121215] border border-white/10 hover:border-white/25 flex items-center justify-between text-zinc-300 hover:text-white transition-colors"
              >
                <span>GitHub (CMD-Mayank)</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Quick Email Composer Form */}
        <div className="lg:col-span-6 bg-[#121215] border border-white/10 rounded-2xl p-6 sm:p-8">
          <div className="border-b border-white/10 pb-4 mb-6">
            <span className="text-xs font-mono-custom text-zinc-400 uppercase tracking-wider block">
              Quick Outreach Dispatcher
            </span>
            <h3 className="text-lg font-display font-bold text-white mt-1">
              Send a note directly to my inbox
            </h3>
          </div>

          <form onSubmit={handleSendEmail} className="space-y-4 text-xs font-mono-custom">
            <div>
              <label className="block text-zinc-400 uppercase mb-1.5 text-[11px]">
                Opportunity Type / Subject
              </label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-[#18181c] border border-white/10 rounded-lg px-3.5 py-2.5 text-zinc-200 text-xs focus:outline-none focus:border-amber-400"
              >
                <option value="UI/UX Designer Internship Opportunity">UI/UX Designer Internship</option>
                <option value="Product Designer / Entry Role Opportunity">Product Design Role</option>
                <option value="Frontend Developer Opportunity">Frontend Development Role</option>
                <option value="AI Product Project Collaboration">AI Product Collaboration</option>
                <option value="General Conversation / Portfolio Inquiry">General Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-zinc-400 uppercase mb-1.5 text-[11px]">
                Your Message / Project Details
              </label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi Mayank, I came across your portfolio and wanted to discuss..."
                className="w-full bg-[#18181c] border border-white/10 rounded-lg p-3.5 text-zinc-200 text-xs placeholder:text-zinc-600 focus:outline-none focus:border-amber-400"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-black bg-white hover:bg-amber-400 rounded-md transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>LAUNCH EMAIL CLIENT</span>
            </button>

            <p className="text-[11px] text-zinc-500 text-center">
              Pre-fills your default email client with your message for immediate delivery.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
