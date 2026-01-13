
export enum VideoCategory {
  ALL = 'Todos',
  WEDDING = 'Casamento',
  PRE_WEDDING = 'Pre-Wedding',
  REELS_TIKTOK = 'Reels & TikTok',
  LECTURE = 'Palestras',
  EVENT = 'Eventos',
  OTHERS = 'Outros'
}

export interface VideoProject {
  id: string;
  title: string;
  category: VideoCategory;
  thumbnail: string;
  vimeoId: string;
  description: string;
  aspectRatio?: '16/9' | '9/16';
}
