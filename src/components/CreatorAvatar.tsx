import React from 'react';
import { Sparkles, ShieldCheck, Zap } from 'lucide-react';

interface CreatorAvatarProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const CreatorAvatar: React.FC<CreatorAvatarProps> = ({ size = 'lg' }) => {
  // Dimensions based on size
  const outerSizeClass = size === 'lg' ? 'w-64 h-64 sm:w-80 sm:h-80' : 'w-40 h-40';

  return (
    <div className="relative group flex items-center justify-center">
      {/* Outer Rotating Saturn Ring (z-20) */}
      <div className={`absolute ${outerSizeClass} rounded-full border border-purple-500/30 animate-[spin_20s_linear_infinite] pointer-events-none z-20`}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_12px_#38bdf8]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-pink-500 shadow-[0_0_10px_#ec4899]" />
      </div>

      {/* Counter-rotating Ring (z-20) */}
      <div className={`absolute ${outerSizeClass} rounded-full border border-cyan-500/20 animate-[spin_15s_linear_infinite_reverse] pointer-events-none scale-110 z-20`}>
        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-[0_0_8px_#fef08a]" />
      </div>

      {/* Glowing Backdrop Aura */}
      <div className="absolute inset-2 bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-500 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500" />

      {/* Main Avatar Container (z-10) */}
      <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full p-1.5 bg-gradient-to-tr from-purple-500 via-pink-500 to-cyan-400 shadow-2xl shadow-purple-950/80 z-10">
        <div className="relative w-full h-full rounded-full overflow-hidden bg-transparent border-2 border-slate-900 flex items-center justify-center">
          <img
            src="/profile-photo.jpg"
            alt="Moaz Genidy"
            className="absolute inset-0 z-10 h-full w-full rounded-full object-cover object-center"
            draggable={false}
          />
        </div>
      </div>

      {/* Floating Space Badges around Avatar (z-30) */}
      <div className="absolute -bottom-2 -left-2 sm:-left-4 bg-slate-900/90 backdrop-blur-md border border-cyan-500/40 px-3 py-1.5 rounded-xl shadow-xl flex items-center gap-2 text-xs font-bold text-cyan-300 animate-bounce z-30">
        <Sparkles className="w-4 h-4 text-cyan-400 fill-cyan-400" />
        <span>AI Video Specialist</span>
      </div>

      <div className="absolute -top-1 -right-2 sm:-right-4 bg-slate-900/90 backdrop-blur-md border border-purple-500/40 px-3 py-1.5 rounded-xl shadow-xl flex items-center gap-2 text-xs font-bold text-purple-300 z-30">
        <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        <span>14 Commercials</span>
      </div>

      <div className="absolute bottom-12 -right-4 sm:-right-8 bg-slate-900/90 backdrop-blur-md border border-pink-500/40 p-2 rounded-full shadow-xl text-pink-400 hidden sm:block z-30">
        <ShieldCheck className="w-5 h-5 text-emerald-400" />
      </div>
    </div>
  );
};

