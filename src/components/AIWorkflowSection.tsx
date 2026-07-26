import React from 'react';
import { Cpu, Wand2, Video, Sparkles, Layers, Volume2, ShieldCheck, Zap } from 'lucide-react';

interface AIWorkflowSectionProps {
  lang: 'ar' | 'en';
}

export const AIWorkflowSection: React.FC<AIWorkflowSectionProps> = ({ lang }) => {
  const steps = [
    {
      step: '01',
      titleAr: 'تطوير الفكرة والسكربت البصري',
      titleEn: 'Visual Script & Prompt Crafting',
      descAr: 'تحويل أفكار العميل ورؤية العلامة التجارية إلى سيناريو بصري دقيق يوجه نماذج التوليد.',
      descEn: 'Converting client brand vision into precise creative prompts and storyboard structures.',
      icon: Wand2,
      color: 'from-purple-500 to-indigo-500',
    },
    {
      step: '02',
      titleAr: 'توليد المشاهد والأنيميشن بالذكاء الاصطناعي',
      titleEn: 'AI Motion & Video Generation',
      descAr: 'استخدام أحدث محركات الفيديو التوليدية لخلق مشاهد سينمائية، حركات كاميرا، وإضاءة ثلاثية الأبعاد.',
      descEn: 'Utilizing state-of-the-art AI video synthesis models to render motion, camera moves, and 3D lighting.',
      icon: Cpu,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      step: '03',
      titleAr: 'المؤثرات الصوتية والتعليق الصوتي',
      titleEn: 'AI Voiceovers & Audio FX',
      descAr: 'دمج تعليق صوتي سينمائي بلهجات متعددة ومؤثرات صوتية تزيد من واقعية وتفاعل المشاهد.',
      descEn: 'Integrating natural multi-dialect AI voiceovers and spatial audio FX for immersive engagement.',
      icon: Volume2,
      color: 'from-pink-500 to-rose-500',
    },
    {
      step: '04',
      titleAr: 'المونتاج والتصدير بدقة 4K',
      titleEn: 'Final Edit & 4K Export',
      descAr: 'تنسيق الفيديو بنسب عرض متعددة (9:16 Shorts/Reels, 16:9) جاهز فوراً للنشر على منصات التواصل.',
      descEn: 'Final compositing optimized for vertical mobile formats (9:16 Reels/Shorts) ready for campaign launch.',
      icon: Video,
      color: 'from-yellow-500 to-amber-500',
    },
  ];

  return (
    <section id="workflow" className="py-16 md:py-24 relative overflow-hidden bg-slate-950/60 border-y border-purple-900/30">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-purple-500/30 text-cyan-300 text-xs font-bold shadow-md">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>{lang === 'ar' ? 'رحلة التصنيع الفضائية' : 'AI Creation Pipeline'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'ar' ? (
              <>
                كيف نصنع فيديوهات{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300">
                  خارقة للمألوف بالذكاء الاصطناعي؟
                </span>
              </>
            ) : (
              <>
                How We Engineer{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300">
                  Futuristic AI Video Ads
                </span>
              </>
            )}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base">
            {lang === 'ar'
              ? 'منظومة عمل متكاملة تمزج الإبداع البشري مع قوة أحدث نماذج توليد الفيديو والصوت.'
              : 'An integrated workflow fusing human creative direction with state-of-the-art AI generation engines.'}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative group bg-slate-900/80 rounded-2xl p-6 border border-purple-900/40 hover:border-cyan-400/60 shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} p-[1px] shadow-lg`}>
                    <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <span className="text-2xl font-black text-slate-700 group-hover:text-cyan-400 transition-colors">
                    {item.step}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-extrabold text-white text-lg group-hover:text-cyan-300 transition-colors">
                    {lang === 'ar' ? item.titleAr : item.titleEn}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {lang === 'ar' ? item.descAr : item.descEn}
                  </p>
                </div>

                {/* Bottom Bar */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-purple-300 font-semibold">
                  <span className="flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-yellow-400" />
                    <span>AI Engine</span>
                  </span>
                  <span>100% Quality</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
