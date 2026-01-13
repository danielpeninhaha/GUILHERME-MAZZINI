
import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

interface ResultLoadingProps {
  onFinish: () => void;
}

const ResultLoading: React.FC<ResultLoadingProps> = ({ onFinish }) => {
  const [step, setStep] = useState(0);
  const messages = [
    "Analisando seu perfil metabólico...",
    "Calculando o nível de inflamação atual...",
    "Cruzando dados com o calendário de Carnaval...",
    "Preparando seu protocolo personalizado..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep(prev => {
        if (prev < messages.length - 1) return prev + 1;
        clearInterval(timer);
        return prev;
      });
    }, 1200);

    const finishTimer = setTimeout(() => {
      onFinish();
    }, 5500);

    return () => {
      clearInterval(timer);
      clearTimeout(finishTimer);
    };
  }, [onFinish, messages.length]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-12">
        <div className="relative inline-block">
          <div className="w-24 h-24 border-4 border-pink-100 border-t-pink-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-pink-500 font-bold">AI</span>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold text-gray-900 animate-pulse">
            {messages[step]}
          </h2>
          <div className="flex justify-center gap-2">
            {[0, 1, 2, 3].map((i) => (
              <div 
                key={i} 
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${i <= step ? 'bg-pink-500' : 'bg-gray-200'}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultLoading;
