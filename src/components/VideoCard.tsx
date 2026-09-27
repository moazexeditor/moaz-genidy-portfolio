import React, { useState } from 'react';
import { Play, Film } from 'lucide-react';
import { VideoItem } from '../types';

interface VideoCardProps {
  video: VideoItem;
  onPlay: (video: VideoItem) => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, onPlay }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const title = video.title;
  const thumbnailUrl = video.thumbnailUrl || (video.youtubeId ? `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg` : '');

  return (
    <div
      onClick={() => onPlay(video)}
      className="group relative bg-[#FFFFFF] rounded-2xl border border-[#E8DFD1] hover:border-[#1F2430]/40 overflow-hidden shadow-sm hover:shadow-md transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 active:scale-[0.98] cursor-pointer flex flex-col h-full select-none"
    >
      {/* Thumbnail Aspect Ratio Container (9:15) */}
      <div className="relative w-full aspect-[9/15] bg-[#E8DFD1]/50 overflow-hidden">
        
        {/* Loading State */}
        {!imgLoaded && !imgError && thumbnailUrl && (
          <div className="absolute inset-0 bg-[#E8DFD1]/60 flex items-center justify-center">
            <Film className="w-8 h-8 text-[#1F2430]/30 animate-pulse" />
          </div>
        )}

        {/* Thumbnail Image with smooth 400ms load transition */}
        {thumbnailUrl ? (
          <img
            src={thumbnailUrl}
            alt={title}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            className={`w-full h-full object-cover object-center transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035] ${
              imgLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.015]'
            }`}
            loading="lazy"
          />
        ) : (video.videoUrl && !videoError) ? (
          <div className="relative w-full h-full bg-[#1F2430] flex items-center justify-center">
            <video
              src={video.videoUrl}
              preload="metadata"
              muted
              playsInline
              onError={() => setVideoError(true)}
              className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ) : null}

        {/* Fallback if error or no source */}
        {(imgError || videoError || (!thumbnailUrl && !video.videoUrl)) && (
          <div className="absolute inset-0 bg-[#1F2430] flex flex-col items-center justify-center p-4 text-center">
            <Film className="w-10 h-10 text-[#E8DFD1]/60 mb-2" />
            <span className="text-xs font-semibold text-[#E8DFD1] px-2">{title}</span>
            <span className="text-[10px] text-[#E8DFD1]/50 mt-1 uppercase tracking-wider">AI Commercial</span>
          </div>
        )}

        {/* Badge if specified */}
        {video.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="py-1 px-2.5 rounded-full bg-[#1F2430]/90 text-[#E8DFD1] text-[10px] font-bold tracking-wider uppercase backdrop-blur-sm border border-[#E8DFD1]/30 shadow-sm">
              {video.badge}
            </span>
          </div>
        )}

        {/* Soft dark vignette on bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F2430]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Minimal Play Icon Button (Scale 1 -> 1.08 on hover) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-12 h-12 rounded-full bg-[#1F2430]/90 text-[#E8DFD1] flex items-center justify-center shadow-md transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08] group-hover:bg-[#1F2430]">
            <Play className="w-5 h-5 fill-current translate-x-0.5" />
          </div>
        </div>

        {/* Hover tag on bottom */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="py-1.5 px-3 rounded-lg bg-[#1F2430]/90 text-[#E8DFD1] text-[11px] font-medium text-center backdrop-blur-sm shadow-sm">
            Watch Commercial
          </div>
        </div>
      </div>

      {/* Card Info Footer */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-2 bg-[#FAF7F2] border-t border-[#E8DFD1]">
        <h3 className="font-semibold text-[#1F2430] text-sm line-clamp-2 leading-snug group-hover:text-[#1F2430]/90 transition-transform duration-250 group-hover:-translate-y-0.5">
          {title}
        </h3>

        <div className="flex items-center justify-between text-xs text-[#1F2430]/65 pt-1">
          <span className="font-medium">Commercial Film</span>
          <span className="font-semibold text-[#1F2430] group-hover:translate-x-1 transition-transform duration-200">
            Play →
          </span>
        </div>
      </div>
    </div>
  );
};

