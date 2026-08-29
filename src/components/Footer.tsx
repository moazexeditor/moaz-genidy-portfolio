import React from 'react';
import { MessageCircle, Instagram, ArrowUp } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/videos';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1F2430] text-[#E8DFD1] py-12 text-xs border-t border-[#1F2430]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3 text-center md:text-left">
          <div className="w-8 h-8 rounded-full bg-[#E8DFD1] text-[#1F2430] flex items-center justify-center font-bold text-[10px]">
            MG
          </div>
          <div>
            <div className="font-bold text-sm text-[#E8DFD1]">
              Moaz Genidy
            </div>
            <p className="text-[11px] text-[#E8DFD1]/70">
              Commercial AI Video Creator & Director
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E8DFD1]/80 hover:text-[#E8DFD1] transition-colors flex items-center gap-1.5 font-medium"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E8DFD1]/80 hover:text-[#E8DFD1] transition-colors flex items-center gap-1.5 font-medium"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>Instagram</span>
          </a>
        </div>

        {/* Copyright & Back to top */}
        <div className="flex items-center gap-4 text-[#E8DFD1]/70">
          <span>© {new Date().getFullYear()} Moaz Genidy. All rights reserved.</span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-[#E8DFD1]/10 hover:bg-[#E8DFD1]/20 text-[#E8DFD1] transition-colors"
            title="Back to Top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
