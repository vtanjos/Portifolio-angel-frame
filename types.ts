
export enum VideoCategory {
  ALL = 'Todos',
  WEDDING = 'Casamento',
  PRE_WEDDING = 'Pre-Wedding',
  CORPORATE = 'Corporativo',
  LECTURE = 'Palestras',
  EVENT = 'Eventos',
  OTHERS = 'Outros'
}

export interface VideoProject {
  id: string;
  title: string;
  category: VideoCategory;
  thumbnail: string;
  youtubeId: string;
  description: string;
}
