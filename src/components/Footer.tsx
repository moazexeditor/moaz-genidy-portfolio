import React from 'react';
import { Film, MessageCircle, Instagram, ArrowUp } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/videos';

interface FooterProps {
  lang?: 'ar' | 'en';
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-white/10 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center">
            <Film className="w-5 h-5 text-cyan-300" />
          </div>
          <div>
            <div className="font-extrabold text-white text-sm">
              Moaz Genidy | AI Video Creator
            </div>
            <p className="text-[11px] text-slate-500">
              Cinematic AI Video Generation
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-500 text-emerald-500" />
            <span>WhatsApp</span>
          </a>

          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors flex items-center gap-1.5"
          >
            <Instagram className="w-4 h-4 text-pink-500" />
            <span>Instagram</span>
          </a>
        </div>

        {/* Copyright & Back to top */}
        <div className="flex items-center gap-4">
          <span>© {new Date().getFullYear()} m0_e_x. All Rights Reserved.</span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-slate-900 border border-purple-500/30 text-purple-300 hover:text-white hover:border-cyan-400 transition-all shadow-md"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};

