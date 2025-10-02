
import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section className="w-full max-w-4xl mx-auto mt-24 text-center">
      <h2 className="font-archivo-black text-3xl md:text-4xl uppercase tracking-tight text-center">
        Saca só como que é a parada
      </h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
          <div className="font-archivo-black text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#CCFF00] to-[#FFD700]">1</div>
          <h3 className="mt-4 text-xl font-bold">PEGA A PALAVRA</h3>
          <p className="mt-2 text-gray-400">Divide em sílabas, na moral. Tipo: <span className="font-fira-code text-white">a-mi-go</span></p>
        </div>
        <div className="p-6 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
          <div className="font-archivo-black text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#FF10F0] to-[#0080FF]">2</div>
          <h3 className="mt-4 text-xl font-bold">VIRA DE PONTA CABEÇA</h3>
          <p className="mt-2 text-gray-400">Inverte tudo, sem caô. Fica: <span className="font-fira-code text-white">go-mi-a</span></p>
        </div>
        <div className="p-6 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
          <div className="font-archivo-black text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#FF6B35]">3</div>
          <h3 className="mt-4 text-xl font-bold">PRONTO, VIROU GUALÍN!</h3>
          <p className="mt-2 text-gray-400">A mágica acontece: <span className="font-fira-code text-white">amigo → gomia ✨</span></p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
