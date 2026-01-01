
import { GoogleGenAI, Type } from "@google/genai";

export async function generateServiceConsultation(query: string, serviceType: string): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const prompt = `You are a professional consultant for 'Investo Multiservices'. 
    A client is asking about: "${query}" in the category of "${serviceType}". 
    Investo provides: 
    1. Financial (Loans, Insurance, Mediclaim)
    2. Digital (Web design, SEO, Marketing)
    3. CSC/Govt (PAN, Domicile, Income certs, Farmer ID)
    4. Office (Govt Job apps, Typing, Xerox).
    
    Provide a professional, clear response explaining the typical documents needed and the benefit of using Investo. 
    Be concise, helpful, and encourage them to book a visit. Use professional business English.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.6,
        topP: 0.8,
      }
    });

    return response.text || "I'm sorry, I couldn't process your inquiry. Please visit our office for direct consultation.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Unable to connect to the Investo AI Advisor.");
  }
}
