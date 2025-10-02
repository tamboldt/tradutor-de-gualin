
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full flex flex-col items-center text-center">
      <h1 className="font-archivo-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#CCFF00] via-[#FFD700] to-[#FF6B35]">
          Conversor
        </span>
        <span className="block text-[#FAFAFA] drop-shadow-[0_2px_2px_rgba(255,16,240,0.8)]">
          de Gualín
        </span>
      </h1>
      <p className="mt-2 text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF10F0] to-[#0080FF]">
        Inverte as parada, mano.
      </p>
      <div className="hidden md:flex items-center space-x-4 mt-4 text-sm text-gray-400">
        <span>[Maneiro]</span>
        <span className="text-[#FF10F0]"> • </span>
        <span>[de lei]</span>
        <span className="text-[#CCFF00]"> • </span>
        <span>[sem neurose]</span>
      </div>
    </header>
  );
};

export default Header;
