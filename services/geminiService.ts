
import { GoogleGenAI, Type } from "@google/genai";
import { ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `You are a professional consultant for 'Investo Multiservices'. 
Investo provides: 
1. Financial (Home Loans, Personal Loans, Business Loans, Life Insurance, Mediclaim)
2. Digital (Custom Web Design, SEO, Digital Marketing, E-commerce)
3. CSC/Govt (PAN Card, Domicile, Income certs, Caste Certs, Farmer ID, Ration Card)
4. Office Support (Govt Job apps, Typing, Xerox, Documentation).

Provide professional, clear responses. Explain typical documents needed when relevant. 
Always encourage them to book a visit to the Rajur office (Old ITI, opposite sarvodaya school). 
Be concise, helpful, and use professional business English.`;

export async function getAIChatResponse(message: string, history: ChatMessage[] = []): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.9,
      },
      history: history.length > 0 ? history : undefined,
    });

    const response = await chat.sendMessage({ message });
    return response.text || "I'm sorry, I couldn't process your inquiry. Please visit our office for direct consultation.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    if (error instanceof Error && error.message.includes("429")) {
      throw new Error("I'm receiving too many requests. Please try again in a minute.");
    }
    throw new Error("Unable to connect to the Investo AI Advisor. Please try again later.");
  }
}
