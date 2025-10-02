
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import TranslatorCard from './components/TranslatorCard';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import { translateText } from './services/geminiService';
import type { TranslationDirection } from './types';

const App: React.FC = () => {
  const [ptText, setPtText] = useState<string>('');
  const [gualinText, setGualinText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [lastTranslated, setLastTranslated] = useState<'pt' | 'gualin' | null>(null);

  const handleTranslate = useCallback(async (text: string, direction: TranslationDirection) => {
    if (!text.trim()) {
      setError('O texto não pode estar vazio, parça.');
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const result = await translateText(text);
      if (direction === 'pt-to-gualin') {
        setGualinText(result);
        setLastTranslated('pt');
      } else {
        setPtText(result);
        setLastTranslated('gualin');
      }
    } catch (err) {
      setError('Deu ruim na tradução. Tenta de novo mais tarde.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);
  
  const handleSwap = () => {
    const tempPt = ptText;
    setPtText(gualinText);
    setGualinText(tempPt);
    setLastTranslated(null);
  };

  const handleReset = () => {
    setPtText('');
    setGualinText('');
    setError(null);
    setIsLoading(false);
    setLastTranslated(null);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA] overflow-x-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,#CCFF00_0%,transparent_40%),radial-gradient(circle_at_80%_70%,#FF10F0_0%,transparent_40%)]"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center p-4 sm:p-6 md:p-8">
        <Header />
        <main className="w-full max-w-6xl mt-8 md:mt-16">
          <TranslatorCard
            ptText={ptText}
            gualinText={gualinText}
            onPtTextChange={setPtText}
            onGualinTextChange={setGualinText}
            onTranslate={handleTranslate}
            onSwap={handleSwap}
            onReset={handleReset}
            isLoading={isLoading}
            error={error}
            lastTranslated={lastTranslated}
          />
          <HowItWorks />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
