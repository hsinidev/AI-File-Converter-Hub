
import { GoogleGenAI, GenerateContentResponse, Part, Type } from "@google/genai";
import { Converter } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const fileToGenerativePart = async (file: File): Promise<Part> => {
  const base64EncodedDataPromise = new Promise<string>((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result.split(',')[1]);
      }
    };
    reader.readAsDataURL(file);
  });

  return {
    inlineData: {
      data: await base64EncodedDataPromise,
      mimeType: file.type,
    },
  };
};

const textFileToGenerativePart = async (file: File): Promise<Part> => {
    const text = await file.text();
    return { text };
};


export const performConversion = async (
  converter: Converter,
  file: File,
  prompt: string
): Promise<string> => {
  try {
    const model = converter.model;
    let parts: Part[] = [];
    let systemInstruction = "";

    // Prepare parts based on file type
    if (file.type.startsWith('image/')) {
        parts.push(await fileToGenerativePart(file));
    } else if (file.type === 'text/plain') {
        parts.push(await textFileToGenerativePart(file));
    } else {
        // For other document types like PDF, DOCX, etc.
        parts.push(await fileToGenerativePart(file));
    }

    let finalPrompt = "";

    switch (converter.id) {
      case 'image-to-text':
        finalPrompt = prompt || 'Extract all text from this image.';
        break;
      case 'summarize-document':
        finalPrompt = `Summarize the following document. ${prompt}`;
        break;
      case 'rephrase-document':
        finalPrompt = `Rephrase the following document based on this instruction: "${prompt}"`;
        break;
      case 'text-to-json':
        systemInstruction = "You are an expert at converting unstructured text into structured JSON. Only output valid JSON based on the user's request.";
        finalPrompt = `Based on the following instruction, convert the provided text to JSON. Instruction: "${prompt}"`;
        break;
      case 'story-from-image':
        finalPrompt = `Write a short, creative story based on this image. ${prompt}`;
        break;
      case 'image-alt-text':
        finalPrompt = `Generate a concise and descriptive alt-text for this image, suitable for accessibility and SEO. ${prompt}`;
        break;
      default:
        throw new Error('Unknown converter type');
    }

    parts.push({ text: finalPrompt });

    const response: GenerateContentResponse = await ai.models.generateContent({
        model,
        contents: { parts },
        ...(systemInstruction && { config: { systemInstruction } }),
        ...(converter.id === 'text-to-json' && { 
            config: { 
                responseMimeType: 'application/json',
                systemInstruction 
            } 
        })
    });
    
    let resultText = response.text.trim();

    // Clean up JSON output which sometimes includes markdown backticks
    if (converter.id === 'text-to-json' && resultText.startsWith('```json')) {
        resultText = resultText.replace(/^```json\n|```$/g, '');
    }


    return resultText;
  } catch (error) {
    console.error("Error during Gemini API call:", error);
    if (error instanceof Error) {
        return `An error occurred: ${error.message}`;
    }
    return "An unknown error occurred while processing your request.";
  }
};
