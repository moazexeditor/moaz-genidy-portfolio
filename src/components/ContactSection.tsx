import React, { useState } from 'react';
import { MessageCircle, Instagram, ArrowUpRight, Check, Copy } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/videos';

interface ContactSectionProps {
  lang?: 'ar' | 'en';
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('201080453968');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-12 md:py-20 relative overflow-hidden">
      
      {/* Decorative Nebula Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header */}
        <div className="space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-300 text-xs font-bold shadow-md">
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Contact</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          
          {/* WhatsApp Card */}
          <div className="bg-black/60 backdrop-blur-xl rounded-3xl p-6 border border-emerald-500/30 hover:border-emerald-400/60 shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all flex flex-col justify-between text-start">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-emerald-400 fill-emerald-400" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                  WhatsApp
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">
                WhatsApp Chat
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                +20 108 045 3968
              </p>
            </div>

            <div className="space-y-2">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs flex items-center justify-between shadow-lg transition-all"
              >
                <span>Open WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyPhone}
                className="w-full py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-semibold text-xs flex items-center justify-center gap-2 border border-white/10 transition-colors"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Phone Number</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Instagram Card */}
          <div className="bg-black/60 backdrop-blur-xl rounded-3xl p-6 border border-purple-500/30 hover:border-pink-400/60 shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all flex flex-col justify-between text-start">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-pink-600/20 flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-pink-400" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-950/80 text-purple-300 border border-purple-500/30">
                  Instagram
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">
                Instagram Profile
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                @m0_e_x
              </p>
            </div>

            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:opacity-95 text-white font-bold text-xs flex items-center justify-between shadow-lg transition-all"
            >
              <span>Follow @m0_e_x</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

