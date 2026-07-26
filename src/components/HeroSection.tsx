import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/videos';

interface HeroSectionProps {
  lang: 'ar' | 'en';
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      
      {/* Background Decorative Cosmic Flare */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-purple-600/20 via-indigo-600/10 to-cyan-500/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          
          {/* Main Cosmic Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
            AI Video Creator
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300">
              Moaz Genidy
            </span>
          </h1>

          {/* Direct Contact Buttons (WhatsApp & Instagram) */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            
            {/* WhatsApp CTA */}
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-sm shadow-xl shadow-emerald-950/60 hover:shadow-emerald-500/40 hover:scale-[1.03] transition-all duration-300 overflow-hidden"
            >
              <MessageCircle className="w-5 h-5 fill-white text-emerald-600 group-hover:scale-110 transition-transform" />
              <div className="text-start">
                <span className="block text-xs font-normal opacity-90">WhatsApp</span>
                <span className="block text-base leading-tight font-extrabold">+20 108 045 3968</span>
              </div>
            </a>

            {/* Instagram CTA */}
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:opacity-95 text-white font-bold text-sm shadow-xl shadow-purple-950/60 hover:shadow-purple-500/40 hover:scale-[1.03] transition-all duration-300"
            >
              <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <div className="text-start">
                <span className="block text-xs font-normal opacity-90">Instagram</span>
                <span className="block text-base leading-tight font-extrabold">@m0_e_x</span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

