import React, { useState } from 'react';
import { FileText, Printer, Mail, Check, Copy, Briefcase, GraduationCap, Cpu, CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';
import { RESUME_DATA } from '../data/resume';
import { SOCIAL_LINKS } from '../data/videos';
import { Reveal } from './Reveal';

interface ResumeSectionProps {
  onOpenCVModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenCVModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handlePrint = () => {
    onOpenCVModal();
    // Allow modal to render before triggering print
    setTimeout(() => {
      window.print();
    }, 400);
  };

  return (
    <section id="resume" className="py-20 md:py-28 border-t border-[#E8DFD1] bg-[#FAF7F2]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal distance={24} duration={850} className="space-y-4 text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8DFD1]/80 text-[#1F2430] text-xs font-semibold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae & Qualifications</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1F2430]">
            Executive Profile & Career Record
          </h2>

          <p className="text-sm sm:text-base text-[#1F2430]/75 leading-relaxed">
            Prompt architecture, commercial filmmaking, and end-to-end generative AI production structured to deliver measurable value for creative agencies, brands, and enterprise clients worldwide.
          </p>

          {/* Quick Action Bar for Recruiters and Clients */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenCVModal}
              className="btn-interaction inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1F2430] hover:bg-[#2B3242] text-[#E8DFD1] font-semibold text-xs shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>View Full-Screen CV</span>
            </button>

            <button
              onClick={handlePrint}
              className="btn-interaction inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FFFFFF] hover:bg-[#E8DFD1]/60 text-[#1F2430] font-semibold text-xs border border-[#DDD3C3] shadow-xs"
            >
              <Printer className="w-4 h-4 text-[#1F2430]/70" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleCopyEmail}
              className="btn-interaction inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FFFFFF] hover:bg-[#E8DFD1]/60 text-[#1F2430] font-medium text-xs border border-[#DDD3C3] shadow-xs"
            >
              <Mail className="w-4 h-4 text-[#1F2430]/70" />
              <span>{copiedEmail ? 'Email Copied!' : RESUME_DATA.email}</span>
              {copiedEmail ? (
                <Check className="w-3.5 h-3.5 text-[#1F2430]" />
              ) : (
                <Copy className="w-3.5 h-3.5 opacity-50" />
              )}
            </button>

            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-interaction inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#E8DFD1]/70 hover:bg-[#E8DFD1] text-[#1F2430] font-medium text-xs"
            >
              <span>WhatsApp Direct</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
        </Reveal>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (7 cols): Experience & Education */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Experience Card */}
            <Reveal delay={120} distance={28} duration={850}>
              <div className="bg-[#FFFFFF] rounded-2xl border border-[#DDD3C3] p-6 sm:p-8 shadow-xs space-y-6">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#E8DFD1] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1F2430] text-[#E8DFD1] flex items-center justify-center">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1F2430]">
                        Professional Experience
                      </h3>
                      <p className="text-xs text-[#1F2430]/65">
                        Commercial Video & Generative Production
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#E8DFD1] text-[#1F2430]">
                    Verified
                  </span>
                </div>

                {/* Experience Item */}
                {RESUME_DATA.experience.map((exp, index) => (
                  <div key={index} className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <div>
                        <h4 className="text-base font-bold text-[#1F2430]">
                          {exp.role}
                        </h4>
                        <span className="text-xs font-semibold text-[#1F2430]/80">
                          {exp.type}
                        </span>
                      </div>
                      <div className="text-xs font-mono font-medium text-[#1F2430]/70">
                        {exp.period} • {exp.location}
                      </div>
                    </div>

                    <ul className="space-y-2.5 text-xs sm:text-sm text-[#1F2430]/80 leading-relaxed pl-1">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1F2430] shrink-0 mt-2" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

              </div>
            </Reveal>

            {/* Education Card */}
            <Reveal delay={200} distance={28} duration={850}>
              <div className="bg-[#FFFFFF] rounded-2xl border border-[#DDD3C3] p-6 sm:p-7 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#E8DFD1] text-[#1F2430] flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[#1F2430]/60 uppercase tracking-wider block">
                      Academic Foundation
                    </span>
                    <h4 className="text-base font-bold text-[#1F2430]">
                      {RESUME_DATA.education.degree}
                    </h4>
                    <p className="text-xs text-[#1F2430]/75">
                      {RESUME_DATA.education.institution} • {RESUME_DATA.education.location}
                    </p>
                  </div>
                </div>

                <div className="text-right sm:border-l sm:border-[#E8DFD1] sm:pl-6">
                  <div className="text-xs font-mono font-bold text-[#1F2430]">
                    {RESUME_DATA.education.period}
                  </div>
                  <div className="text-[11px] text-[#1F2430]/60">
                    Expected Completion
                  </div>
                </div>
              </div>
            </Reveal>

          </div>

          {/* Right Column (5 cols): Recruiter Value, AI Tools & Skills */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Why Hire Moaz / HR Value Props */}
            <Reveal delay={160} distance={28} duration={850}>
              <div className="bg-[#1F2430] text-[#E8DFD1] rounded-2xl p-6 sm:p-7 shadow-md space-y-5">
                <div className="flex items-center gap-2.5 border-b border-[#E8DFD1]/20 pb-3">
                  <Sparkles className="w-4 h-4 text-[#E8DFD1]" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#E8DFD1]">
                    Agency & HR Value Proposition
                  </h3>
                </div>

                <div className="space-y-4">
                  {RESUME_DATA.hrHighlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="space-y-1">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#E8DFD1]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E8DFD1]/80 shrink-0" />
                        <span>{highlight.title}</span>
                      </div>
                      <p className="text-xs text-[#E8DFD1]/75 leading-relaxed pl-5.5">
                        {highlight.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Generative Tooling Stack */}
            <Reveal delay={240} distance={28} duration={850}>
              <div className="bg-[#FFFFFF] rounded-2xl border border-[#DDD3C3] p-6 shadow-xs space-y-4">
                <div className="flex items-center gap-2.5">
                  <Cpu className="w-4 h-4 text-[#1F2430]" />
                  <h3 className="text-sm font-bold text-[#1F2430] uppercase tracking-wider">
                    Generative Production Stack
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {RESUME_DATA.aiTools.map((tool, tIdx) => (
                    <div
                      key={tIdx}
                      className={`p-2.5 rounded-xl border text-xs flex flex-col justify-between ${
                        tool.highlight
                          ? 'bg-[#FAF7F2] border-[#1F2430]/30 font-semibold text-[#1F2430]'
                          : 'bg-[#FFFFFF] border-[#E8DFD1] font-medium text-[#1F2430]/80'
                      }`}
                    >
                      <span>{tool.name}</span>
                      <span className="text-[10px] text-[#1F2430]/50 font-normal">
                        {tool.category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Core Competencies Badges */}
            <Reveal delay={300} distance={28} duration={850}>
              <div className="bg-[#FFFFFF] rounded-2xl border border-[#DDD3C3] p-6 shadow-xs space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#1F2430]/70">
                  Core Competencies
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {RESUME_DATA.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs px-2.5 py-1 rounded-lg bg-[#FAF7F2] border border-[#DDD3C3] text-[#1F2430] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

          </div>

        </div>

      </div>
    </section>
  );
};
