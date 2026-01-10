
import { Service, PortfolioItem } from './types';

export const LOGO_ICON = "https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/angel-frame-icon.png"; 
export const LOGO_TEXT = "https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/angel-frame-text.png";

export const SERVICES: Service[] = [
  {
    id: 'wedding',
    title: 'Casamentos & Pre-Wedding',
    description: 'Capturamos a essência do seu amor com um olhar cinematográfico e sensível.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'corporate',
    title: 'Corporativo & Branding',
    description: 'Posicione sua marca no topo com vídeos institucionais de alta tecnologia e impacto.',
    image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'lectures',
    title: 'Palestras & Eventos',
    description: 'Documentação impecável de eventos de grande porte com áudio e imagem cristalinos.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    category: 'Casamento',
    title: 'Elena & Gabriel - O Grande Dia',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
    youtubeId: 'dQw4w9WgXcQ' // Exemplo
  },
  {
    id: '2',
    category: 'Corporativo',
    title: 'Tech Summit 2024 - Aftermovie',
    thumbnail: 'https://images.unsplash.com/photo-1540575861501-7ad0582373f3?auto=format&fit=crop&q=80&w=800',
    youtubeId: 'ScMzIvxBSi4' // Exemplo
  },
  {
    id: '3',
    category: 'Pre-Wedding',
    title: 'Luiza & Ricardo em Paris',
    thumbnail: 'https://images.unsplash.com/photo-1522673607200-164883eeba4c?auto=format&fit=crop&q=80&w=800',
    youtubeId: '3JZ_D3ELwOQ' // Exemplo
  },
  {
    id: '4',
    category: 'Palestra',
    title: 'Masterclass: Futuro Digital',
    thumbnail: 'https://images.unsplash.com/photo-1505373633560-24731460731d?auto=format&fit=crop&q=80&w=800',
    youtubeId: '7e90gBu4pas' // Exemplo
  },
  {
    id: '5',
    category: 'Casamento',
    title: 'Trailer: O Amor de Maria e João',
    thumbnail: 'https://images.unsplash.com/photo-1465495910483-0d6749ee9f4a?auto=format&fit=crop&q=80&w=800',
    youtubeId: '60ItHLz5WEA' // Exemplo
  },
  {
    id: '6',
    category: 'Branding',
    title: 'Campanha: New Era Fashion',
    thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    youtubeId: 'XpS8W2Lh-pM' // Exemplo
  }
];
