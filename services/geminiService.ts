
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

if (!process.env.API_KEY) {
  // In a real app, you might want to handle this more gracefully.
  // For this context, we assume the key is present.
  console.warn("API_KEY environment variable not set. Using a placeholder.");
  // This is a placeholder for development without a real key.
  // The app will not function correctly without a valid API key.
  process.env.API_KEY = "YOUR_API_KEY_HERE"; 
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const translateText = async (text: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: text,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    const translatedText = response.text;
    if (!translatedText) {
      throw new Error("A resposta da API está vazia.");
    }
    return translatedText.trim();
  } catch (error) {
    console.error("Erro na chamada da API Gemini:", error);
    throw new Error("Falha ao comunicar com a API de tradução.");
  }
};
