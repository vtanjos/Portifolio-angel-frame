
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface PortfolioItem {
  id: string;
  category: string;
  title: string;
  thumbnail: string;
  videoUrl?: string;
  youtubeId?: string; // ID do vídeo para embed direto
}
