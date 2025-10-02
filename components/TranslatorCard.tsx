
import React, { useState } from 'react';
import type { TranslationDirection } from '../types';

interface TranslatorCardProps {
  ptText: string;
  gualinText: string;
  onPtTextChange: (text: string) => void;
  onGualinTextChange: (text:string) => void;
  onTranslate: (text: string, direction: TranslationDirection) => void;
  onSwap: () => void;
  onReset: () => void;
  isLoading: boolean;
  error: string | null;
  lastTranslated: 'pt' | 'gualin' | null;
}

const CopyButton: React.FC<{ text: string, disabled: boolean }> = ({ text, disabled }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (disabled || !text) return;
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={handleCopy}
            disabled={disabled || !text}
            className="absolute bottom-2 right-2 px-2 py-1 text-xs font-bold bg-[#FAFAFA]/10 text-[#FAFAFA] rounded-md hover:bg-[#FAFAFA]/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
            {copied ? 'COPIADO!' : 'COPIA AÍ'}
        </button>
    );
};


const TranslatorCard: React.FC<TranslatorCardProps> = ({
  ptText,
  gualinText,
  onPtTextChange,
  onGualinTextChange,
  onTranslate,
  onSwap,
  onReset,
  isLoading,
  error,
  lastTranslated
}) => {
  const isPtResult = lastTranslated === 'pt';
  const isGualinResult = lastTranslated === 'gualin';

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
        {/* Português Card */}
        <div className={`relative flex-1 w-full p-1 rounded-lg bg-gradient-to-br ${isGualinResult ? 'from-[#FF10F0] to-[#0080FF]' : 'from-transparent to-transparent'}`}>
          <div className="bg-[#0A0A0A] rounded-md p-4 h-72 flex flex-col">
            <label className="font-bold text-lg text-gray-300">PORTUGUÊS</label>
            <div className="relative flex-1 mt-2">
                <textarea
                value={ptText}
                onChange={(e) => onPtTextChange(e.target.value)}
                placeholder="Cola o texto aí, parça..."
                className="w-full h-full p-3 bg-[#1c1c1c] text-[#FAFAFA] font-fira-code rounded-md resize-none border-2 border-transparent focus:border-[#CCFF00] focus:outline-none transition-colors duration-300"
                disabled={isLoading}
                />
                <CopyButton text={ptText} disabled={isLoading} />
            </div>
          </div>
        </div>
        
        {/* Swap Button */}
        <div className="p-2 md:p-4">
          <button
            onClick={onSwap}
            disabled={isLoading}
            className="p-3 bg-gradient-to-br from-[#FF10F0] to-[#0080FF] rounded-full text-white hover:scale-110 active:scale-95 transition-transform duration-200 disabled:opacity-50"
            aria-label="Inverter idiomas"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </button>
        </div>

        {/* Gualín Card */}
        <div className={`relative flex-1 w-full p-1 rounded-lg bg-gradient-to-br ${isPtResult ? 'from-[#CCFF00] to-[#FFD700]' : 'from-transparent to-transparent'}`}>
          <div className="bg-[#0A0A0A] rounded-md p-4 h-72 flex flex-col">
            <label className="font-bold text-lg text-gray-300">GUALÍN</label>
             <div className="relative flex-1 mt-2">
                <textarea
                value={gualinText}
                onChange={(e) => onGualinTextChange(e.target.value)}
                placeholder="O resultado aparece aqui..."
                className="w-full h-full p-3 bg-[#1c1c1c] text-[#FAFAFA] font-fira-code rounded-md resize-none border-2 border-transparent focus:border-[#FF10F0] focus:outline-none transition-colors duration-300"
                disabled={isLoading}
                />
                <CopyButton text={gualinText} disabled={isLoading} />
             </div>
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={() => onTranslate(ptText, 'pt-to-gualin')}
          disabled={isLoading || !ptText}
          className="w-full sm:w-auto font-archivo-black text-xl px-12 py-4 rounded-md bg-gradient-to-r from-[#CCFF00] to-[#FFD700] text-black hover:scale-105 transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center"
        >
          {isLoading ? <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin"></div> : 'INVERTE PRA GUALÍN'}
        </button>
        <button
          onClick={onReset}
          disabled={isLoading}
          className="text-gray-400 hover:text-white"
        >
          Reseta Tudo
        </button>
        <button
          onClick={() => onTranslate(gualinText, 'gualin-to-pt')}
          disabled={isLoading || !gualinText}
          className="w-full sm:w-auto font-archivo-black text-xl px-12 py-4 rounded-md bg-gradient-to-r from-[#FF10F0] to-[#0080FF] text-white hover:scale-105 transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center"
        >
           {isLoading ? <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : 'TRADUZ PRA PT'}
        </button>
      </div>

       {error && (
        <div className="mt-4 text-center text-red-400 font-bold p-3 bg-red-500/10 rounded-md">
          {error}
        </div>
      )}
    </div>
  );
};

export default TranslatorCard;
