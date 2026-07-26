import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle, Share2, ExternalLink, Check } from 'lucide-react';
import { VideoItem } from '../types';

interface VideoPlayerModalProps {
  video: VideoItem | null;
  allVideos: VideoItem[];
  onClose: () => void;
  onSelectVideo: (video: VideoItem) => void;
  lang?: 'ar' | 'en';
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  video,
  allVideos,
  onClose,
  onSelectVideo,
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handlePrev();
      if (e.key === 'ArrowLeft') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [video, allVideos]);

  if (!video) return null;

  const currentIndex = allVideos.findIndex((v) => v.id === video.id);
  const prevVideo = allVideos[(currentIndex - 1 + allVideos.length) % allVideos.length];
  const nextVideo = allVideos[(currentIndex + 1) % allVideos.length];

  const handlePrev = () => onSelectVideo(prevVideo);
  const handleNext = () => onSelectVideo(nextVideo);

  const youtubeEmbedUrl = `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}`;

  const shareUrl = `https://www.youtube.com/shorts/${video.youtubeId}`;

  const handleCopyShare = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentTitle = video.title;

  const whatsappMsg = encodeURIComponent(
    `Hello, I'm interested in an AI video similar to "${video.title}" (${shareUrl})`
  );
  const whatsappLink = `https://wa.me/201080453968?text=${whatsappMsg}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
      
      {/* Dark Cosmic Backdrop Blur */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/95 backdrop-blur-2xl transition-opacity animate-in fade-in duration-300"
      />

      {/* Main Modal Container */}
      <div className="relative z-10 w-full max-w-4xl bg-black/90 border border-white/10 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col md:flex-row my-auto max-h-[92vh]">
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-slate-950/80 border border-purple-500/40 text-slate-300 hover:text-white hover:bg-purple-900/50 hover:scale-110 transition-all shadow-lg"
          title="Close Player"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Frame Section */}
        <div className="relative w-full md:w-[380px] bg-black flex items-center justify-center p-3 sm:p-4 border-b md:border-b-0 md:border-r border-purple-900/40 shrink-0">
          
          {/* Cosmic Glow */}
          <div className="absolute inset-4 bg-gradient-to-tr from-purple-600/30 via-pink-600/20 to-cyan-500/30 rounded-2xl blur-xl pointer-events-none" />

          {/* Player Container */}
          <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-2xl overflow-hidden border-2 border-purple-500/50 shadow-[0_0_30px_rgba(139,92,246,0.3)] bg-slate-950">
            <iframe
              src={youtubeEmbedUrl}
              title={currentTitle}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Next / Previous Quick Floating Controls */}
          <div className="absolute left-2 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-slate-950/80 border border-purple-500/40 text-purple-300 hover:text-white hover:bg-purple-900/60 transition-all shadow-md"
              title="Previous Video"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20">
            <button
              onClick={handleNext}
              className="p-2.5 rounded-full bg-slate-950/80 border border-purple-500/40 text-purple-300 hover:text-white hover:bg-purple-900/60 transition-all shadow-md"
              title="Next Video"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Video Info & Interactive Actions Sidebar */}
        <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto">
          
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs text-slate-400 font-medium">
                {currentIndex + 1} / {allVideos.length}
              </span>
            </div>

            {/* Video Title */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
              {currentTitle}
            </h2>
          </div>

          {/* Action CTAs */}
          <div className="space-y-3 pt-4 border-t border-slate-800">
            
            {/* Order Similar Video via WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-950/60 hover:scale-[1.02] transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Contact via WhatsApp</span>
            </a>

            {/* Secondary Actions Row */}
            <div className="grid grid-cols-2 gap-3">
              
              {/* Copy Share Link */}
              <button
                onClick={handleCopyShare}
                className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4 text-cyan-400" />
                    <span>Share Link</span>
                  </>
                )}
              </button>

              {/* Open on YouTube */}
              <a
                href={shareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-all"
              >
                <ExternalLink className="w-4 h-4 text-red-400" />
                <span>Open YouTube</span>
              </a>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

