import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { VideoGallery } from './components/VideoGallery';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { CVModal } from './components/CVModal';
import { VIDEOS } from './data/videos';
import { VideoItem } from './types';

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

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
    <div className="min-h-screen bg-[#F7F4EE] text-[#1F2430] font-sans selection:bg-[#1F2430] selection:text-[#E8DFD1] relative">
      
      {/* Main Container */}
      <div className="flex flex-col min-h-screen">
        
        {/* Minimal Navigation Header */}
        <Header videoCount={VIDEOS.length} />

        {/* Main Content */}
        <main className="flex-1">
          {/* Hero Section */}
          <HeroSection
            onExploreClick={handleScrollToGallery}
            onOpenCV={() => setIsCVModalOpen(true)}
            videoCount={VIDEOS.length}
          />

          {/* Video Gallery Showcase */}
          <VideoGallery
            onSelectVideo={(video) => setSelectedVideo(video)}
          />

          {/* Curriculum Vitae & Professional Qualifications */}
          <ResumeSection
            onOpenCVModal={() => setIsCVModalOpen(true)}
          />

          {/* Contact Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

      </div>

      {/* Video Player Modal */}
      {selectedVideo && (
        <VideoPlayerModal
          video={selectedVideo}
          allVideos={VIDEOS}
          onClose={() => setSelectedVideo(null)}
          onSelectVideo={(video) => setSelectedVideo(video)}
        />
      )}

      {/* Official Curriculum Vitae Modal (Print & PDF ready) */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />

    </div>
  );
}



