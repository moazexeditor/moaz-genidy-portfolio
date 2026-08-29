import React from 'react';
import { Sparkles, Layers, Sliders, Film } from 'lucide-react';
import { Reveal } from './Reveal';

export const AboutSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Art Direction & Concept',
      desc: 'Developing bespoke visual aesthetics, prompt architecture, and moodboards tailored to the brand identity.',
      icon: Sparkles,
    },
    {
      num: '02',
      title: 'Generative Video Pipeline',
      desc: 'Directing complex motion, physics, camera angles, and character consistency using advanced AI video engines.',
      icon: Layers,
    },
    {
      num: '03',
      title: 'Color Grading & 4K Upscaling',
      desc: 'Refining cinematic tones, lighting balance, and upscaling frames to deliver razor-sharp master quality.',
      icon: Sliders,
    },
    {
      num: '04',
      title: 'Sound & Delivery',
      desc: 'Synchronizing dynamic sound design, voiceovers, and formatting for social ads and broadcast screens.',
      icon: Film,
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-[#FAF7F2] border-t border-[#E8DFD1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <Reveal distance={20} duration={650} className="max-w-2xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8DFD1]/80 text-[#1F2430] text-xs font-semibold uppercase tracking-wider">
            <span>Production Approach</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2430] tracking-tight">
            How Every Commercial Is Built
          </h2>

          <p className="text-sm sm:text-base text-[#1F2430]/70 leading-relaxed">
            A methodical creative process delivering the visual impact of high-end commercial sets at generative speed.
          </p>
        </Reveal>

        {/* 4 Steps Grid with 80ms Stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal
                key={step.num}
                delay={index * 80}
                distance={28}
                duration={650}
                direction="up"
              >
                <div
                  className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E8DFD1] hover:border-[#1F2430]/30 shadow-sm hover:shadow-md transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold font-mono text-[#1F2430]/40">
                        {step.num}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#E8DFD1]/60 text-[#1F2430] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-[#1F2430] mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#1F2430]/70 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Editorial Statement */}
        <Reveal delay={150} distance={30} duration={700}>
          <div className="mt-16 bg-[#1F2430] text-[#E8DFD1] rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-md">
            <p className="font-serif-title italic text-lg sm:text-xl md:text-2xl text-[#E8DFD1] leading-relaxed mb-4">
              “The technology is modern, but the standard remains timeless: narrative clarity, composition, and emotional resonance.”
            </p>
            <div className="text-xs font-semibold tracking-wider uppercase text-[#E8DFD1]/70">
              Moaz Genidy — Creative Director
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

