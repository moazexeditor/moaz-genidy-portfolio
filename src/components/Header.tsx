import React, { useState } from 'react';
import { MessageCircle, Instagram, Menu, X, ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/videos';

interface HeaderProps {
  videoCount: number;
}

export const Header: React.FC<HeaderProps> = ({ videoCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F7F4EE]/90 backdrop-blur-md border-b border-[#E8DFD1] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-full bg-[#1F2430] text-[#E8DFD1] flex items-center justify-center font-bold text-xs tracking-wider transition-transform group-hover:scale-105">
            MG
          </div>
          <div>
            <span className="block font-bold text-base tracking-tight text-[#1F2430]">
              Moaz Genidy
            </span>
            <span className="block text-[11px] font-medium text-[#1F2430]/70 tracking-wide">
              Commercial AI Video Creator
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-[#1F2430]/80">
          <button
            onClick={() => scrollToSection('gallery')}
            className="nav-link-animated hover:text-[#1F2430] transition-colors flex items-center gap-2 py-1"
          >
            <span>Commercials</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E8DFD1] text-[#1F2430] font-bold">
              {videoCount}
            </span>
          </button>

          <button
            onClick={() => scrollToSection('about')}
            className="nav-link-animated hover:text-[#1F2430] transition-colors py-1"
          >
            Approach
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="nav-link-animated hover:text-[#1F2430] transition-colors py-1"
          >
            Contact
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-interaction inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1F2430] text-[#E8DFD1] hover:bg-[#2B3242] text-xs font-medium tracking-wide shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-interaction inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8DFD1] text-[#1F2430] hover:bg-[#DDD3C3] text-xs font-medium tracking-wide"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>@m0_e_x</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#1F2430] hover:bg-[#E8DFD1] transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F7F4EE] border-b border-[#E8DFD1] px-6 py-6 space-y-4 shadow-lg">
          <button
            onClick={() => scrollToSection('gallery')}
            className="w-full text-left py-2.5 px-3 rounded-lg hover:bg-[#E8DFD1] text-[#1F2430] text-sm font-semibold flex items-center justify-between"
          >
            <span>Commercials</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#E8DFD1] text-[#1F2430]">
              {videoCount}
            </span>
          </button>

          <button
            onClick={() => scrollToSection('about')}
            className="w-full text-left py-2.5 px-3 rounded-lg hover:bg-[#E8DFD1] text-[#1F2430] text-sm font-semibold"
          >
            Approach
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="w-full text-left py-2.5 px-3 rounded-lg hover:bg-[#E8DFD1] text-[#1F2430] text-sm font-semibold"
          >
            Contact
          </button>

          <div className="pt-4 border-t border-[#E8DFD1] flex flex-col gap-2.5">
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-[#1F2430] text-[#E8DFD1] text-xs font-semibold flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contact via WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>

            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-[#E8DFD1] text-[#1F2430] text-xs font-semibold flex items-center justify-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram @m0_e_x</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
