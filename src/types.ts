export interface VideoItem {
  id: string;
  youtubeId?: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  title: string;
  category: string;
  badge?: string;
}

export interface VideoCategory {
  id: string;
  label: string;
}

