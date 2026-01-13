
import React from 'react';

interface DifferentialsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DifferentialsModal: React.FC<DifferentialsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const features = [
    { name: 'Captação Mobile Ágil (S24)', angel: true, others: false },
    { name: 'Discrição Total em Eventos', angel: true, others: false },
    { name: 'Ângulos e Movimentos Dinâmicos', angel: true, others: false },
    { name: 'Pós-Produção Cinematográfica', angel: true, others: true },
    { name: 'Entrega em Tempo Recorde', angel: true, others: false },
    { name: 'Olhar Artístico e Storytelling', angel: true, others: true },
    { name: 'Equipamentos Intimidadores', angel: false, others: true },
  ];

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
      <div className="glass-card w-full max-w-2xl rounded-3xl p-8 relative shadow-2xl overflow-hidden border-blue-500/20">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400"></div>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-white mb-2">Por que a Angel Frame?</h3>
          <p className="text-blue-400 font-medium text-sm uppercase tracking-widest">O comparativo que faz a diferença</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 text-slate-400 font-bold uppercase text-[10px] tracking-widest">Diferencial</th>
                <th className="py-4 text-center text-blue-400 font-bold uppercase text-[10px] tracking-widest">Angel Frame</th>
                <th className="py-4 text-center text-slate-500 font-bold uppercase text-[10px] tracking-widest">Comum</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {features.map((item, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="py-4 text-sm font-medium text-slate-300">{item.name}</td>
                  <td className="py-4 text-center">
                    {item.angel ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold">✓</span>
                    ) : (
                      <span className="text-slate-600 text-xs">✕</span>
                    )}
                  </td>
                  <td className="py-4 text-center">
                    {item.others ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-slate-400 text-xs font-bold">✓</span>
                    ) : (
                      <span className="text-slate-600 text-xs font-bold">✕</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 p-4 bg-blue-600/10 border border-blue-500/20 rounded-2xl text-center">
          <p className="text-xs text-blue-200 leading-relaxed italic">
            "Não é sobre a ferramenta, é sobre como extraímos o máximo dela para contar sua história."
          </p>
        </div>
      </div>
    </div>
  );
};

export default DifferentialsModal;
