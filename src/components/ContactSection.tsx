import React, { useState } from 'react';
import { MessageCircle, Instagram, ArrowUpRight, Check, Copy, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/videos';
import { RESUME_DATA } from '../data/resume';
import { Reveal } from './Reveal';

export const ContactSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('201080453968');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F7F4EE] border-t border-[#E8DFD1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <Reveal distance={24} duration={850} className="space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8DFD1]/80 text-[#1F2430] text-xs font-semibold uppercase tracking-wider">
            <span>Direct Communication</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2430] tracking-tight">
            Start a Commercial Collaboration
          </h2>

          <p className="text-sm sm:text-base text-[#1F2430]/70 max-w-xl mx-auto leading-relaxed">
            Open for brand campaigns, agency contracts, in-house creative roles, and luxury visual storytelling worldwide.
          </p>
        </Reveal>

        {/* Contact Cards (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          {/* Email Card (Corporate / Official) */}
          <Reveal delay={100} distance={28} duration={850} direction="up">
            <div className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-7 border border-[#E8DFD1] hover:border-[#1F2430]/30 shadow-xs hover:shadow-md transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 flex flex-col justify-between space-y-6 h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#1F2430] text-[#E8DFD1] flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#E8DFD1] text-[#1F2430]">
                    Official Email
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#1F2430] mb-1">
                  Email Inquiry
                </h3>
                <p className="text-xs text-[#1F2430]/70 font-mono break-all">
                  {RESUME_DATA.email}
                </p>
              </div>

              <div className="space-y-2.5">
                <a
                  href={`mailto:${RESUME_DATA.email}?subject=Commercial%20Video%20Inquiry%20-%20Moaz%20Badawi`}
                  className="btn-interaction w-full py-3 px-4 rounded-xl bg-[#1F2430] hover:bg-[#2B3242] text-[#E8DFD1] font-semibold text-xs flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Send Email</span>
                  <ArrowUpRight className="w-4 h-4 opacity-80" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="btn-interaction w-full py-2.5 px-3 rounded-xl bg-[#E8DFD1]/50 hover:bg-[#E8DFD1] text-[#1F2430] font-medium text-xs flex items-center justify-center gap-2"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#1F2430]" />
                      <span>Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 opacity-60" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </Reveal>

          {/* WhatsApp Card */}
          <Reveal delay={200} distance={28} duration={850} direction="up">
            <div className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-7 border border-[#E8DFD1] hover:border-[#1F2430]/30 shadow-xs hover:shadow-md transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 flex flex-col justify-between space-y-6 h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#1F2430] text-[#E8DFD1] flex items-center justify-center">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#E8DFD1] text-[#1F2430]">
                    Direct Chat
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#1F2430] mb-1">
                  WhatsApp
                </h3>
                <p className="text-xs text-[#1F2430]/70 font-mono">
                  +20 108 045 3968
                </p>
              </div>

              <div className="space-y-2.5">
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-interaction w-full py-3 px-4 rounded-xl bg-[#1F2430] hover:bg-[#2B3242] text-[#E8DFD1] font-semibold text-xs flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Open WhatsApp Chat</span>
                  <ArrowUpRight className="w-4 h-4 opacity-80" />
                </a>

                <button
                  onClick={handleCopyPhone}
                  className="btn-interaction w-full py-2.5 px-3 rounded-xl bg-[#E8DFD1]/50 hover:bg-[#E8DFD1] text-[#1F2430] font-medium text-xs flex items-center justify-center gap-2"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#1F2430]" />
                      <span>Number Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 opacity-60" />
                      <span>Copy Phone Number</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </Reveal>

          {/* Instagram Card */}
          <Reveal delay={300} distance={28} duration={850} direction="up">
            <div className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-7 border border-[#E8DFD1] hover:border-[#1F2430]/30 shadow-xs hover:shadow-md transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 flex flex-col justify-between space-y-6 h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#E8DFD1] text-[#1F2430] flex items-center justify-center">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#E8DFD1] text-[#1F2430]">
                    Social
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#1F2430] mb-1">
                  Instagram
                </h3>
                <p className="text-xs text-[#1F2430]/70 font-mono">
                  @m0_e_x
                </p>
              </div>

              <div className="space-y-2.5">
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-interaction w-full py-3 px-4 rounded-xl bg-[#1F2430] hover:bg-[#2B3242] text-[#E8DFD1] font-semibold text-xs flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Follow @m0_e_x</span>
                  <ArrowUpRight className="w-4 h-4 opacity-80" />
                </a>

                <div className="text-center py-2 text-[11px] text-[#1F2430]/60 font-medium">
                  Latest updates & creative experiments
                </div>
              </div>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
};

