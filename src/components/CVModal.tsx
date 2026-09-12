import React, { useState } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Calendar, Check, Copy, ExternalLink, Briefcase, GraduationCap, Cpu, Award } from 'lucide-react';
import { RESUME_DATA } from '../data/resume';
import { SOCIAL_LINKS } from '../data/videos';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(RESUME_DATA.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1F2430]/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      
      {/* Click outside backdrop */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      {/* Main Modal Window */}
      <div className="relative w-full max-w-4xl bg-[#FFFFFF] rounded-3xl shadow-2xl border border-[#DDD3C3] overflow-hidden my-auto flex flex-col max-h-[92vh]">
        
        {/* Top Control Bar (Non-printable) */}
        <div className="no-print bg-[#FAF7F2] px-6 py-4 border-b border-[#E8DFD1] flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#1F2430]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#1F2430]">
              Official Curriculum Vitae
            </span>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#E8DFD1] text-[#1F2430] font-semibold">
              Ready for Print & PDF
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Print / Save PDF button */}
            <button
              onClick={handlePrint}
              className="btn-interaction inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F2430] text-[#E8DFD1] text-xs font-semibold shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="btn-interaction p-2 rounded-full bg-[#E8DFD1]/60 hover:bg-[#E8DFD1] text-[#1F2430]"
              aria-label="Close CV Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Container */}
        <div className="overflow-y-auto p-6 sm:p-10 text-[#1F2430] space-y-8 cv-printable-document bg-white">
          
          {/* Document Header */}
          <div className="border-b-2 border-[#1F2430] pb-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1F2430]">
                  {RESUME_DATA.fullName}
                </h1>
                <p className="text-base sm:text-lg font-medium text-[#1F2430]/80 mt-1">
                  {RESUME_DATA.professionalTitle}
                </p>
              </div>
              <div className="text-xs sm:text-right font-medium text-[#1F2430]/70 space-y-1">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{RESUME_DATA.location}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Born: {RESUME_DATA.birthDate}</span>
                </div>
              </div>
            </div>

            {/* Contact Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-medium">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF7F2] border border-[#DDD3C3] hover:bg-[#E8DFD1]/50 text-[#1F2430]"
                title="Click to copy email"
              >
                <Mail className="w-3.5 h-3.5 text-[#1F2430]/70" />
                <span>{RESUME_DATA.email}</span>
                {copiedEmail ? (
                  <Check className="w-3 h-3 text-[#1F2430]" />
                ) : (
                  <Copy className="w-3 h-3 opacity-50" />
                )}
              </button>

              <button
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF7F2] border border-[#DDD3C3] hover:bg-[#E8DFD1]/50 text-[#1F2430]"
                title="Click to copy phone number"
              >
                <Phone className="w-3.5 h-3.5 text-[#1F2430]/70" />
                <span>{RESUME_DATA.phone}</span>
                {copiedPhone ? (
                  <Check className="w-3 h-3 text-[#1F2430]" />
                ) : (
                  <Copy className="w-3 h-3 opacity-50" />
                )}
              </button>

              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="no-print inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1F2430] text-[#E8DFD1] hover:bg-[#2B3242]"
              >
                <span>WhatsApp Chat</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#1F2430]/60 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#1F2430]" />
              <span>Professional Summary</span>
            </h2>
            <p className="text-sm leading-relaxed text-[#1F2430]/85 bg-[#FAF7F2] p-4 rounded-xl border border-[#E8DFD1]">
              {RESUME_DATA.summary}
            </p>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#1F2430]/60 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#1F2430]" />
              <span>Professional Experience</span>
            </h2>

            {RESUME_DATA.experience.map((exp, idx) => (
              <div key={idx} className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-[#E8DFD1] pb-2">
                  <div>
                    <h3 className="text-base font-bold text-[#1F2430]">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-semibold text-[#1F2430]/75">
                      {exp.type}
                    </span>
                  </div>
                  <div className="text-xs text-[#1F2430]/70 font-mono sm:text-right mt-1 sm:mt-0">
                    <div>{exp.period}</div>
                    <div className="text-[11px] text-[#1F2430]/50">{exp.location}</div>
                  </div>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-[#1F2430]/85 pl-4 list-disc">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="leading-relaxed">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Two-Column: Education & AI Tool Ecosystem */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#1F2430]/60 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#1F2430]" />
                <span>Education</span>
              </h2>
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFD1] space-y-1">
                <h3 className="text-sm font-bold text-[#1F2430]">
                  {RESUME_DATA.education.degree}
                </h3>
                <div className="text-xs font-medium text-[#1F2430]/80">
                  {RESUME_DATA.education.institution}
                </div>
                <div className="text-xs font-mono text-[#1F2430]/60 flex justify-between pt-1">
                  <span>{RESUME_DATA.education.period}</span>
                  <span>{RESUME_DATA.education.location}</span>
                </div>
              </div>
            </div>

            {/* AI Stack */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#1F2430]/60 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#1F2430]" />
                <span>Generative AI Tool Stack</span>
              </h2>
              <div className="flex flex-wrap gap-1.5 p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFD1]">
                {RESUME_DATA.aiTools.map((tool, tIdx) => (
                  <span
                    key={tIdx}
                    className={`text-xs px-2.5 py-1 rounded-md font-medium border ${
                      tool.highlight
                        ? 'bg-[#1F2430] text-[#E8DFD1] border-[#1F2430]'
                        : 'bg-[#FFFFFF] text-[#1F2430] border-[#DDD3C3]'
                    }`}
                  >
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Core Competencies */}
          <div className="space-y-3 pt-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#1F2430]/60">
              Core Competencies & Capabilities
            </h2>
            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="text-xs px-3 py-1.5 rounded-full bg-[#E8DFD1]/70 border border-[#DDD3C3] font-semibold text-[#1F2430]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Footer note inside CV */}
          <div className="pt-6 border-t border-[#E8DFD1] text-[11px] text-[#1F2430]/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              Moaz Badawi Genidy — Verified Portfolio: 23+ Commercials
            </div>
            <div>
              Direct Contact: {RESUME_DATA.email} | {RESUME_DATA.phone}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
