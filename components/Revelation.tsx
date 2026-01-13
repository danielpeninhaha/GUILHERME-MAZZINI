
import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const Revelation: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col items-center px-4 py-12 md:py-24 animate-fade-in">
      <div className="max-w-5xl w-full">
        
        {/* Main Verdict Card */}
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-pink-50 mb-16 transform hover:scale-[1.01] transition-transform">
          <div className="p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>ANÁLISE CONCLUÍDA</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Pelas suas respostas, o problema <span className="text-pink-500">não é falta de esforço.</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed font-medium">
                É tentar resolver tudo com exagero justamente quando o corpo mais inflama. Você está preso em um ciclo de retenção que impede os resultados de aparecerem.
              </p>

              <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                <p className="text-orange-800 font-semibold italic">
                  "A boa notícia é que existe um protocolo curto, criado exatamente para esse momento antes do Carnaval."
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/3 relative">
               <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800" 
                alt="Product Lifestyle"
                className="w-full rounded-3xl shadow-lg aspect-square object-cover"
               />
               <div className="absolute -top-4 -right-4 bg-yellow-400 text-white font-black p-4 rounded-2xl shadow-lg rotate-12">
                 7 DIAS
               </div>
            </div>
          </div>
        </div>

        {/* CTA Section - Directly below the card now */}
        <div className="text-center space-y-10">
           <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
             Pronta para se sentir leve no Carnaval?
           </h3>
           
           <div className="flex flex-col items-center gap-6">
             <a 
              href="#" 
              className="group relative inline-flex items-center justify-center gap-4 px-12 py-7 text-2xl md:text-3xl font-black text-white rounded-full shadow-[0_20px_50px_-10px_rgba(255,0,85,0.5)] hover:shadow-[0_25px_60px_-5px_rgba(255,0,85,0.6)] hover:scale-110 transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #FF0055 0%, #FF5E00 50%, #FFB800 100%)',
                backgroundSize: '200% auto',
              }}
             >
               VER O PROTOCOLO DE 7 DIAS
               <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
             </a>

             <div className="flex items-center justify-center gap-4 text-gray-400 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                <span>Acesso imediato</span>
                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                <span>Oferta Carnaval</span>
                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                <span>Garantia total</span>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Revelation;
