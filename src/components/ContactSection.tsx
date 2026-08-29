import React, { useState } from 'react';
import { MessageCircle, Instagram, ArrowUpRight, Check, Copy } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/videos';
import { Reveal } from './Reveal';

export const ContactSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('201080453968');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F7F4EE] border-t border-[#E8DFD1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <Reveal distance={20} duration={650} className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8DFD1]/80 text-[#1F2430] text-xs font-semibold uppercase tracking-wider">
            <span>Get in Touch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2430] tracking-tight">
            Start a Commercial Project
          </h2>

          <p className="text-sm sm:text-base text-[#1F2430]/70 max-w-xl mx-auto leading-relaxed">
            Available for brand campaigns, commercial videos, luxury product showcases, and creative consultations worldwide.
          </p>
        </Reveal>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
          
          {/* WhatsApp Card */}
          <Reveal delay={100} distance={28} duration={650} direction="up">
            <div className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-7 border border-[#E8DFD1] hover:border-[#1F2430]/30 shadow-sm hover:shadow-md transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 flex flex-col justify-between space-y-6 h-full">
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
                <p className="text-sm text-[#1F2430]/70 font-mono">
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
          <Reveal delay={200} distance={28} duration={650} direction="up">
            <div className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-7 border border-[#E8DFD1] hover:border-[#1F2430]/30 shadow-sm hover:shadow-md transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 flex flex-col justify-between space-y-6 h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#E8DFD1] text-[#1F2430] flex items-center justify-center">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#E8DFD1] text-[#1F2430]">
                    Social Profile
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#1F2430] mb-1">
                  Instagram
                </h3>
                <p className="text-sm text-[#1F2430]/70 font-mono">
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
                  Latest updates & behind-the-scenes
                </div>
              </div>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
};

