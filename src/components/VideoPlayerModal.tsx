import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle, Share2, ExternalLink, Check } from 'lucide-react';
import { VideoItem } from '../types';

interface VideoPlayerModalProps {
  video: VideoItem | null;
  allVideos: VideoItem[];
  onClose: () => void;
  onSelectVideo: (video: VideoItem) => void;
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
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
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

  const youtubeEmbedUrl = video.youtubeId
    ? `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}`
    : '';
  const shareUrl = video.youtubeId
    ? `https://www.youtube.com/shorts/${video.youtubeId}`
    : video.videoUrl || window.location.href;

  const handleCopyShare = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentTitle = video.title;

  const whatsappMsg = encodeURIComponent(
    `Hello Moaz, I am interested in a commercial video similar to "${video.title}" (${shareUrl})`
  );
  const whatsappLink = `https://wa.me/201080453968?text=${whatsappMsg}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      
      {/* Deep Charcoal Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#1F2430]/90 backdrop-blur-sm transition-opacity duration-300"
      />

      {/* Main Modal Container */}
      <div className="relative z-10 w-full max-w-4xl bg-[#FFFFFF] border border-[#E8DFD1] rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row my-auto max-h-[92vh] transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="btn-interaction absolute top-4 right-4 z-30 p-2.5 rounded-full bg-[#E8DFD1]/80 hover:bg-[#E8DFD1] text-[#1F2430]"
          title="Close Player"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Video Frame Section */}
        <div className="relative w-full md:w-[380px] bg-[#1F2430] flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-[#E8DFD1] shrink-0">
          
          {/* Player Aspect Ratio Container (9:16) */}
          <div className="relative w-full max-w-[300px] aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-lg flex items-center justify-center">
            {video.youtubeId ? (
              <iframe
                src={youtubeEmbedUrl}
                title={currentTitle}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : video.videoUrl ? (
              <video
                src={video.videoUrl}
                poster={video.thumbnailUrl}
                controls
                autoPlay
                playsInline
                preload="auto"
                className="w-full h-full object-contain bg-black"
              />
            ) : (
              <div className="p-6 text-center text-[#E8DFD1] space-y-3">
                <span className="text-sm font-semibold">{currentTitle}</span>
                <p className="text-xs text-[#E8DFD1]/60">Commercial video preview is ready.</p>
              </div>
            )}
          </div>

          {/* Quick Prev / Next Floating Controls */}
          <button
            onClick={handlePrev}
            className="btn-interaction absolute left-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#E8DFD1]/90 hover:bg-[#E8DFD1] text-[#1F2430] shadow-md z-20"
            title="Previous Commercial"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={handleNext}
            className="btn-interaction absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#E8DFD1]/90 hover:bg-[#E8DFD1] text-[#1F2430] shadow-md z-20"
            title="Next Commercial"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Video Info & Inquiries Sidebar */}
        <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto bg-[#FAF7F2]">
          
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#E8DFD1] text-[#1F2430] uppercase tracking-wider">
                Commercial Film
              </span>
              <span className="text-xs font-mono text-[#1F2430]/60">
                {currentIndex + 1} of {allVideos.length}
              </span>
            </div>

            {/* Video Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2430] leading-snug">
              {currentTitle}
            </h2>

            <p className="text-xs sm:text-sm text-[#1F2430]/70 leading-relaxed">
              Produced and directed by Moaz Genidy using tailored generative video pipelines, high-resolution upscaling, and bespoke sound design.
            </p>
          </div>

          {/* Actions */}
          <div className="space-y-3 pt-6 border-t border-[#E8DFD1]">
            
            {/* WhatsApp CTA */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-interaction w-full py-3.5 px-5 rounded-xl bg-[#1F2430] hover:bg-[#2B3242] text-[#E8DFD1] font-semibold text-xs flex items-center justify-center gap-2.5 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire about this project on WhatsApp</span>
            </a>

            {/* Secondary Actions */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleCopyShare}
                className="btn-interaction py-2.5 px-3 rounded-xl bg-[#FFFFFF] hover:bg-[#E8DFD1]/50 text-[#1F2430] font-medium text-xs flex items-center justify-center gap-2 border border-[#E8DFD1]"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#1F2430]" />
                    <span>Link Copied</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 opacity-70" />
                    <span>Share Video</span>
                  </>
                )}
              </button>

              <a
                href={shareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-interaction py-2.5 px-3 rounded-xl bg-[#FFFFFF] hover:bg-[#E8DFD1]/50 text-[#1F2430] font-medium text-xs flex items-center justify-center gap-2 border border-[#E8DFD1]"
              >
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                <span>{video.youtubeId ? 'Open YouTube' : 'Open Video'}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
