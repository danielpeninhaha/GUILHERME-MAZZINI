
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="flex-1 flex flex-col items-center px-4 py-8 md:py-16">
      <div className="max-w-3xl w-full flex flex-col items-center text-center space-y-6 md:space-y-8">
        
        {/* Header Content - Smaller Text */}
        <div className="space-y-3 px-2">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900 tracking-tight">
            Teste rápido revela o que está impedindo seu corpo de <span className="gradient-text">desinchar</span>
          </h1>
          
          <p className="text-base md:text-lg text-gray-600 font-medium max-w-xl mx-auto">
            Leva menos de 1 minuto e não pede dados sensíveis. Saiba como chegar leve no Carnaval.
          </p>
        </div>

        {/* Central Image - Larger Focus */}
        <div className="w-full relative px-2">
          <div className="relative z-10 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-700">
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1200" 
              alt="Mulher feliz lifestyle" 
              className="w-full h-auto object-cover aspect-[4/3] md:aspect-[21/9]"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-blob"></div>
          <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-blob animation-delay-2000"></div>
        </div>

        {/* Enhanced Button CTA */}
        <div className="w-full max-w-sm pt-4">
          <button
            onClick={onStart}
            className="group relative flex items-center justify-center gap-3 px-10 py-5 text-xl font-black text-white rounded-full w-full overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_15px_40px_-10px_rgba(255,0,85,0.5)] hover:shadow-[0_20px_50px_-5px_rgba(255,0,85,0.6)]"
            style={{
              background: 'linear-gradient(135deg, #FF0055 0%, #FF5E00 50%, #FFB800 100%)',
              backgroundSize: '200% auto',
            }}
          >
            <span className="relative z-10">INICIAR TESTE</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform relative z-10" />
          </button>
          
          <div className="mt-6 flex items-center justify-center gap-3">
             <div className="flex -space-x-1.5">
               {[1,2,3].map(i => (
                 <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?u=${i+10}`} alt="user" />
                 </div>
               ))}
             </div>
             <p className="text-xs text-gray-500 font-bold tracking-tight">
               +12.480 pessoas já realizaram
             </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
