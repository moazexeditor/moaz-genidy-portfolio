import React, { useState, useMemo } from 'react';
import { Film, RefreshCw } from 'lucide-react';
import { VideoItem } from '../types';
import { CATEGORIES, VIDEOS } from '../data/videos';
import { VideoCard } from './VideoCard';

interface VideoGalleryProps {
  onSelectVideo: (video: VideoItem) => void;
  lang?: 'ar' | 'en';
}

export const VideoGallery: React.FC<VideoGalleryProps> = ({ onSelectVideo }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filter videos by category
  const filteredVideos = useMemo(() => {
    return VIDEOS.filter((video) => {
      return selectedCategory === 'all' || video.category === selectedCategory;
    });
  }, [selectedCategory]);

  return (
    <section id="gallery" className="py-12 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-cyan-300 text-xs font-bold shadow-md">
            <Film className="w-4 h-4 text-purple-400" />
            <span>AI Videos Gallery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Video Showcase
          </h2>
        </div>

        {/* Category Filter Bar */}
        <div className="mb-10">
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none px-2">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count = cat.id === 'all'
                ? VIDEOS.length
                : VIDEOS.filter((v) => v.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 border shrink-0 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] scale-105'
                      : 'bg-black/60 backdrop-blur-xl text-slate-300 border-white/10 hover:text-white hover:border-white/20 hover:bg-black/80'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-black/80 text-cyan-300' : 'bg-white/10 text-slate-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Video Grid */}
        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredVideos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onPlay={onSelectVideo}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 space-y-4 bg-slate-900/50 rounded-3xl border border-purple-900/30 p-8 max-w-lg mx-auto">
            <Film className="w-12 h-12 text-purple-400/50 mx-auto" />
            <h3 className="text-lg font-bold text-white">
              No matching videos found
            </h3>
            <button
              onClick={() => setSelectedCategory('all')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reset Category</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

