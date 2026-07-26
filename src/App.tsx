import React, { useState, useEffect } from 'react';
import { SpaceBackgroundCanvas } from './components/SpaceBackgroundCanvas';
import { CosmicHeader } from './components/CosmicHeader';
import { HeroSection } from './components/HeroSection';
import { VideoGallery } from './components/VideoGallery';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VIDEOS } from './data/videos';
import { VideoItem } from './types';

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  useEffect(() => {
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = 'en';
  }, []);

  const handleScrollToGallery = () => {
    const el = document.getElementById('gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-slate-100 font-sans selection:bg-purple-600 selection:text-white relative overflow-x-hidden">
      
      {/* Space Background Canvas with Starfield & Planets */}
      <SpaceBackgroundCanvas interactive={true} />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Header */}
        <CosmicHeader
          videoCount={VIDEOS.length}
        />

        {/* Main Content */}
        <main className="flex-1">
          {/* Hero Section */}
          <HeroSection
            onExploreClick={handleScrollToGallery}
          />

          {/* Video Gallery Section */}
          <VideoGallery
            onSelectVideo={(video) => setSelectedVideo(video)}
          />

          {/* Contact Buttons Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

      </div>

      {/* In-Site Video Player Modal */}
      {selectedVideo && (
        <VideoPlayerModal
          video={selectedVideo}
          allVideos={VIDEOS}
          onClose={() => setSelectedVideo(null)}
          onSelectVideo={(video) => setSelectedVideo(video)}
        />
      )}

    </div>
  );
}


