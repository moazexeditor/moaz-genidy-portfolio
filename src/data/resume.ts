export interface ResumeExperience {
  role: string;
  type: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export interface ResumeSkillCategory {
  category: string;
  items: string[];
}

export interface ResumeData {
  fullName: string;
  professionalTitle: string;
  location: string;
  email: string;
  phone: string;
  birthDate: string;
  summary: string;
  experience: ResumeExperience[];
  education: {
    degree: string;
    institution: string;
    period: string;
    location: string;
  };
  skills: string[];
  aiTools: {
    name: string;
    category: string;
    highlight?: boolean;
  }[];
  hrHighlights: {
    title: string;
    desc: string;
  }[];
}

export const RESUME_DATA: ResumeData = {
  fullName: 'Moaz Badawi Genidy',
  professionalTitle: 'AI Video Creator & Prompt Engineer',
  location: 'Egypt, Fayoum Governorate',
  email: 'moazb4466@gmail.com',
  phone: '+20 108 045 3968',
  birthDate: '11/09/2007',
  summary:
    'An AI-powered video creator with extensive experience in filmmaking, commercials, animation, and visual storytelling. Highly skilled in using cutting-edge AI tools to produce high-quality, engaging content for brands, businesses, and social media platforms. Focused on delivering impactful videos that combine creativity, technology, and effective marketing.',
  experience: [
    {
      role: 'AI Video Creator & Prompt Engineer',
      type: 'Freelance / Self-Employed',
      period: '06/2024 – Present',
      location: 'Egypt, Fayoum Governorate',
      responsibilities: [
        'Created AI-generated commercial videos, social media advertisements, cinematic storytelling content, and branded marketing campaigns for clients across various industries.',
        'Specialized in prompt engineering for AI image and video generation, ensuring high-quality visuals, character consistency, and professional production standards.',
        'Developed creative concepts, scripts, storyboards, shot planning, and complete AI video workflows from concept to final delivery.',
        'Produced engaging content using advanced AI platforms including Kling, Veo, Seedance, Hailuo AI, Midjourney, Freepik AI Suite, Freepik Spaces, Higgsfield AI, and other generative AI tools.',
        'Designed cinematic camera movements, AI-powered transitions, motion sequences, and visual effects for short-form and commercial content.',
        'Optimized and delivered content for TikTok, Instagram Reels, YouTube Shorts, Facebook Ads, and digital marketing campaigns.',
        'Collaborated with brands, businesses, and content creators to produce high-converting AI-powered visual content that increased audience engagement and brand visibility.',
        'Managed the complete creative process, including concept development, AI asset generation, video editing, visual storytelling, sound design, and final post-production.',
      ],
    },
  ],
  education: {
    degree: 'Computer Science',
    institution: 'Nahda NUP',
    period: '2026 – 2030',
    location: 'Beni Suef Governorate, Egypt',
  },
  skills: [
    'AI Commercial Production',
    'Cinematic Storytelling',
    'AI Filmmaking',
    'Video Generation Workflows',
    'Character Consistency',
    'AI Motion Design',
    'Social Media Video Production',
    'Creative Direction',
  ],
  aiTools: [
    { name: 'Kling AI', category: 'Video Generation', highlight: true },
    { name: 'Google Veo', category: 'Video Generation', highlight: true },
    { name: 'Midjourney', category: 'Concept & Visual Synthesis', highlight: true },
    { name: 'Hailuo AI (MiniMax)', category: 'Video Motion', highlight: true },
    { name: 'Seedance', category: 'Generative AI', highlight: false },
    { name: 'Freepik AI Suite & Spaces', category: 'Asset Synthesis', highlight: false },
    { name: 'Higgsfield AI', category: 'Character Animation', highlight: false },
    { name: 'Post-Production & Sound', category: 'Editing & Mixing', highlight: false },
  ],
  hrHighlights: [
    {
      title: 'Commercial Ready',
      desc: 'Proven delivery of 23+ live commercial campaigns across luxury, retail, medical, apps, and corporate sectors.',
    },
    {
      title: 'Technical Foundation',
      desc: 'Computer Science background ensuring deep understanding of AI model weights, prompting math, and pipeline automation.',
    },
    {
      title: 'Full Pipeline Independence',
      desc: 'Executes entire lifecycle solo: concept drafting, scriptwriting, generative shot generation, color matching, and sound design.',
    },
    {
      title: 'Brand-Safe Consistency',
      desc: 'Specialized in facial retention, product texture preservation, and coherent motion trajectories without AI artifacts.',
    },
  ],
};
