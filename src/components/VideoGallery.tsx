import React, { useState, useMemo } from 'react';
import { VideoItem } from '../types';
import { CATEGORIES, VIDEOS } from '../data/videos';
import { VideoCard } from './VideoCard';
import { Reveal } from './Reveal';

interface VideoGalleryProps {
  onSelectVideo: (video: VideoItem) => void;
}

export const VideoGallery: React.FC<VideoGalleryProps> = ({ onSelectVideo }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredVideos = useMemo(() => {
    return VIDEOS.filter((video) => {
      return selectedCategory === 'all' || video.category === selectedCategory;
    });
  }, [selectedCategory]);

  return (
    <section id="gallery" className="py-16 md:py-24 border-t border-[#E8DFD1] bg-[#F7F4EE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal distance={20} duration={650} className="text-center space-y-4 max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8DFD1]/80 text-[#1F2430] text-xs font-semibold uppercase tracking-wider">
            <span>Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2430] tracking-tight">
            Commercial Showcase
          </h2>

          <p className="text-sm sm:text-base text-[#1F2430]/70 leading-relaxed">
            Browse commercial works across brand campaigns, furniture & interior, clinics, food, apps, and luxury products.
          </p>
        </Reveal>

        {/* Category Filters */}
        <Reveal distance={15} delay={100} duration={600} className="mb-12">
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 pt-1 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count = cat.id === 'all'
                ? VIDEOS.length
                : VIDEOS.filter((v) => v.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`btn-interaction flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#1F2430] text-[#E8DFD1] shadow-sm'
                      : 'bg-[#E8DFD1]/60 text-[#1F2430] hover:bg-[#E8DFD1]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full transition-colors ${
                    isActive ? 'bg-[#E8DFD1] text-[#1F2430] font-bold' : 'bg-[#1F2430]/10 text-[#1F2430]'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Video Grid with 80ms Stagger per Row */}
        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredVideos.map((video, index) => {
              const staggerDelay = (index % 4) * 80;
              return (
                <Reveal
                  key={video.id}
                  delay={staggerDelay}
                  distance={30}
                  duration={650}
                  direction="up"
                >
                  <VideoCard
                    video={video}
                    onPlay={onSelectVideo}
                  />
                </Reveal>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#E8DFD1]/40 rounded-2xl border border-[#E8DFD1] p-8 max-w-md mx-auto space-y-4">
            <p className="text-sm font-semibold text-[#1F2430]">No commercials found in this category.</p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="btn-interaction px-4 py-2 rounded-full bg-[#1F2430] text-[#E8DFD1] text-xs font-semibold"
            >
              Show All Commercials
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

