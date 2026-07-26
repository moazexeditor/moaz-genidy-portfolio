import React, { useState } from 'react';
import { MessageCircle, Instagram, Menu, X, Film } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/videos';

interface HeaderProps {
  lang?: 'ar' | 'en';
  setLang?: (lang: 'ar' | 'en') => void;
  videoCount: number;
}

export const CosmicHeader: React.FC<HeaderProps> = ({ videoCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-2xl bg-black/70 border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div 
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-500 p-[1px] shadow-lg shadow-purple-900/30 group-hover:shadow-cyan-500/30 transition-all duration-300">
            <div className="w-full h-full bg-black rounded-[11px] flex items-center justify-center relative overflow-hidden">
              <Film className="w-5 h-5 text-purple-300 group-hover:text-cyan-300 group-hover:scale-110 transition-all duration-300" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-cyan-300">
                Moaz Genidy
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-purple-950/80 text-cyan-400 border border-cyan-500/30">
                AI CREATOR
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              AI Video Creator
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <button
            onClick={() => scrollToSection('gallery')}
            className="hover:text-cyan-300 transition-colors flex items-center gap-1.5 py-1"
          >
            <span>Videos</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-purple-900/60 text-purple-200 border border-purple-500/30">
              {videoCount}
            </span>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-cyan-300 transition-colors py-1"
          >
            Contact
          </button>
        </nav>

        {/* Right CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* WhatsApp Direct Header Button */}
          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-semibold text-xs shadow-lg shadow-emerald-950/50 hover:shadow-emerald-500/30 hover:scale-[1.03] transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp</span>
          </a>

          {/* Instagram Header Button */}
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:opacity-95 text-white font-semibold text-xs shadow-lg shadow-purple-950/50 hover:scale-[1.03] transition-all"
          >
            <Instagram className="w-4 h-4" />
            <span>Instagram</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-900 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-purple-900/40 px-4 py-6 space-y-4 animate-in slide-in-from-top-4 duration-300">
          <button
            onClick={() => scrollToSection('gallery')}
            className="w-full text-start py-2.5 px-4 rounded-xl bg-slate-900/80 text-purple-200 border border-purple-500/20 font-medium flex items-center justify-between"
          >
            <span>Videos</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30">
              {videoCount}
            </span>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="w-full text-start py-2 px-4 text-slate-300 hover:text-white font-medium"
          >
            Contact
          </button>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>WhatsApp</span>
            </a>

            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-purple-950/50"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

