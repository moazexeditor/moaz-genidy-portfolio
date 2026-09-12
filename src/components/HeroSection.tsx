import React from 'react';
import { MessageCircle, Instagram, ArrowDown, ArrowUpRight, FileText } from 'lucide-react';
import profilePhoto from '../assets/profile-photo.png';
import { SOCIAL_LINKS } from '../data/videos';

interface HeroSectionProps {
  onExploreClick: () => void;
  onOpenCV?: () => void;
  videoCount: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onOpenCV, videoCount }) => {
  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Call to Action (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left order-2 lg:order-1">
            
            {/* Category Tag / Subhead (350ms) */}
            <div className="animate-hero-badge">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8DFD1]/70 border border-[#DDD3C3] text-xs font-semibold tracking-wider text-[#1F2430] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1F2430]" />
                <span>Commercial AI Video Creator</span>
              </div>
            </div>

            {/* Headline with Strong Name Entrance (450ms) */}
            <div className="space-y-3">
              <div className="overflow-hidden py-1">
                <h1 className="animate-hero-name text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1F2430] leading-[1.1]">
                  Moaz Genidy
                </h1>
              </div>
              <div className="animate-hero-bio">
                <p className="font-serif-title italic text-xl sm:text-2xl text-[#1F2430]/80">
                  Cinematic commercials & generative video direction.
                </p>
              </div>
            </div>

            {/* Editorial Bio / Description (550ms) */}
            <div className="animate-hero-bio">
              <p className="text-base sm:text-lg text-[#1F2430]/75 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Crafting premium advertisements, luxury product showcases, and dynamic brand campaigns using advanced generative workflows. Designed for brands that value aesthetic precision and visual impact.
              </p>
            </div>

            {/* Action Buttons (700ms) */}
            <div className="animate-hero-cta pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              
              {/* Primary WhatsApp Action */}
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group btn-interaction inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-[#1F2430] text-[#E8DFD1] hover:bg-[#2B3242] font-semibold text-sm shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* View Commercials Scroll CTA */}
              <button
                onClick={onExploreClick}
                className="btn-interaction inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#E8DFD1] text-[#1F2430] hover:bg-[#DDD3C3] font-semibold text-sm"
              >
                <span>View Portfolio</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#1F2430]/10 font-bold">
                  {videoCount}
                </span>
                <ArrowDown className="w-4 h-4" />
              </button>

              {/* Curriculum Vitae (CV) Button */}
              {onOpenCV && (
                <button
                  onClick={onOpenCV}
                  className="btn-interaction inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#FFFFFF] border border-[#DDD3C3] text-[#1F2430] hover:bg-[#E8DFD1]/50 font-semibold text-sm shadow-xs"
                >
                  <FileText className="w-4 h-4 text-[#1F2430]/70" />
                  <span>Curriculum Vitae</span>
                </button>
              )}

              {/* Instagram Quick Link */}
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-interaction inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full text-[#1F2430]/80 hover:text-[#1F2430] hover:bg-[#E8DFD1]/50 font-medium text-sm"
              >
                <Instagram className="w-4 h-4" />
                <span>@m0_e_x</span>
              </a>

            </div>

            {/* Proof Points Bar (850ms) */}
            <div className="animate-hero-stats pt-6 border-t border-[#E8DFD1] grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#1F2430]">{videoCount}+</div>
                <div className="text-xs text-[#1F2430]/65 font-medium">Commercials</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#1F2430]">6+</div>
                <div className="text-xs text-[#1F2430]/65 font-medium">Industries</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#1F2430]">4K</div>
                <div className="text-xs text-[#1F2430]/65 font-medium">Master Quality</div>
              </div>
            </div>

          </div>

          {/* Right Column: Featured Profile Photo (5 cols) */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative w-64 sm:w-72 md:w-80 max-w-full">
              
              {/* Editorial Frame behind the real image (Step 1: 100ms entrance) */}
              <div 
                className="animate-hero-frame absolute -inset-3.5 rounded-2xl bg-[#E8DFD1] border-2 border-[#DDD3C3] -z-10 shadow-sm"
                style={{ transformOrigin: 'center center' }}
              />

              {/* Main Photo Card (Step 2: 250ms entrance) */}
              <div 
                className="animate-hero-photo relative rounded-2xl overflow-hidden bg-[#E8DFD1] border border-[#DDD3C3] shadow-md aspect-square"
                style={{ transformOrigin: 'center center' }}
              >
                <img
                  src={profilePhoto}
                  alt="Profile photo"
                  className="hero-profile-image w-full h-full object-cover object-center"
                  loading="eager"
                />

                {/* Minimal Label Badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#1F2430]/90 backdrop-blur-sm text-[#E8DFD1] px-4 py-2 rounded-xl flex items-center justify-between text-xs transition-opacity duration-300">
                  <div>
                    <span className="font-semibold block">Moaz Genidy</span>
                    <span className="text-[10px] text-[#E8DFD1]/70 block">Commercial Video Specialist</span>
                  </div>
                  <span className="inline-block w-2 h-2 rounded-full bg-[#E8DFD1]" />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

