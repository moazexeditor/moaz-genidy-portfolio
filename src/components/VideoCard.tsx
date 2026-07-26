import React, { useState } from 'react';
import { Play, Eye, Film } from 'lucide-react';
import { VideoItem } from '../types';

interface VideoCardProps {
  video: VideoItem;
  onPlay: (video: VideoItem) => void;
  lang?: 'ar' | 'en';
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, onPlay }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const title = video.title;

  // Thumbnail URL (YouTube Shorts high res thumbnail)
  const thumbnailUrl = `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`;

  return (
    <div
      onClick={() => onPlay(video)}
      className="group relative bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-cyan-400/80 overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_45px_rgba(6,182,212,0.15)] hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col h-full"
    >
      {/* Top Video Aspect Ratio Container (9:14 aspect ratio) */}
      <div className="relative w-full aspect-[9/14] bg-black overflow-hidden">
        
        {/* Placeholder Loading Glow */}
        {!imgLoaded && !imgError && (
          <div className="absolute inset-0 bg-slate-950 animate-pulse flex items-center justify-center">
            <Film className="w-8 h-8 text-purple-500/40 animate-bounce" />
          </div>
        )}

        {/* Thumbnail Image */}
        <img
          src={thumbnailUrl}
          alt={title}
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
          className={`w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ${
            imgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Fallback if image fails */}
        {imgError && (
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-black to-slate-900 flex flex-col items-center justify-center p-4 text-center">
            <Film className="w-12 h-12 text-purple-400 mb-2" />
            <span className="text-xs font-bold text-slate-300">{title}</span>
          </div>
        )}

        {/* Dark Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />

        {/* Floating Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-500 p-[2px] shadow-[0_0_25px_rgba(0,0,0,0.9)] group-hover:scale-110 transition-transform duration-300">
            <div className="w-full h-full bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center">
              <Play className="w-6 h-6 text-cyan-300 fill-cyan-300 translate-x-0.5 group-hover:text-white group-hover:fill-white transition-colors" />
            </div>
          </div>
        </div>

        {/* Bottom Hover Action Indicator */}
        <div className="absolute bottom-3 right-3 left-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-1.5 py-1.5 rounded-xl bg-black/90 border border-cyan-500/50 text-cyan-300 text-xs font-bold backdrop-blur-md">
          <Eye className="w-4 h-4" />
          <span>Play Video</span>
        </div>
      </div>

      {/* Card Details Footer */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-2 bg-black/80 border-t border-white/10">
        <h3 className="font-bold text-white text-sm sm:text-base line-clamp-2 group-hover:text-cyan-300 transition-colors leading-snug">
          {title}
        </h3>

        <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>AI Video</span>
          </span>
          <span className="text-purple-300 font-semibold group-hover:translate-x-0.5 transition-transform">
            Watch →
          </span>
        </div>
      </div>
    </div>
  );
};

