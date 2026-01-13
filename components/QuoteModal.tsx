
import React, { useState } from 'react';
import { VideoCategory } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [selectedNiche, setSelectedNiche] = useState<VideoCategory | null>(null);
  const [customNiche, setCustomNiche] = useState('');

  if (!isOpen) return null;

  const handleFinish = () => {
    let nicheText = '';
    if (selectedNiche === VideoCategory.OTHERS) {
      nicheText = customNiche || 'um projeto personalizado';
    } else {
      nicheText = selectedNiche || 'um vídeo incrível';
    }

    const message = encodeURIComponent(`Olá, gostaria de fazer um orçamento para um vídeo de ${nicheText.toLowerCase()}.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    onClose();
  };

  const niches = [
    VideoCategory.WEDDING,
    VideoCategory.PRE_WEDDING,
    VideoCategory.CORPORATE,
    VideoCategory.LECTURE,
    VideoCategory.EVENT,
    VideoCategory.OTHERS
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="glass-card w-full max-w-md rounded-3xl p-8 relative shadow-2xl overflow-hidden border-blue-500/20">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400"></div>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 className="text-2xl font-bold text-white mb-2">Inicie seu projeto</h3>
        <p className="text-slate-400 text-sm mb-6">Qual o nicho do vídeo que você deseja gravar?</p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {niches.map((niche) => (
            <button
              key={niche}
              onClick={() => setSelectedNiche(niche)}
              className={`p-3 rounded-xl text-xs font-bold transition-all border ${
                selectedNiche === niche 
                ? 'bg-blue-600 border-blue-400 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
              }`}
            >
              {niche}
            </button>
          ))}
        </div>

        {selectedNiche === VideoCategory.OTHERS && (
          <div className="mb-6 animate-in slide-in-from-top-2 duration-300">
            <input 
              type="text" 
              placeholder="Digite o nicho aqui..."
              value={customNiche}
              onChange={(e) => setCustomNiche(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 text-white"
              autoFocus
            />
          </div>
        )}

        <button
          onClick={handleFinish}
          disabled={!selectedNiche || (selectedNiche === VideoCategory.OTHERS && !customNiche)}
          className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/20 uppercase tracking-widest text-xs"
        >
          Falar com Especialista
        </button>
      </div>
    </div>
  );
};

export default QuoteModal;
