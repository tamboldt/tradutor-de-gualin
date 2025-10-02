
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-24 py-8 border-t border-white/10 text-center text-gray-500">
      <p className="font-bold text-lg text-gray-300">
        Feito com <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#CCFF00] to-[#0080FF]">💚💛</span> na quebrada digital
      </p>
      <p className="mt-2 max-w-lg mx-auto">
        Gualín é cultura • É resistência • É nosso. Inspirado em Ret, KTT e a galera que manda a real.
      </p>
      <div className="mt-4 flex justify-center space-x-4">
        <a href="#" className="hover:text-[#CCFF00] transition-colors">GitHub</a>
        <a href="#" className="hover:text-[#FF10F0] transition-colors">Manda a Ideia</a>
        <a href="#" className="hover:text-[#0080FF] transition-colors">Contribua</a>
      </div>
    </footer>
  );
};

export default Footer;
