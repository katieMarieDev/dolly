import { openai } from "@ai-sdk/openai";
import { streamText } from "ai"

// max wait time 30 seconds
export const maxDuration = 30; 

// define what happens when we hit this route
export async function POST(req) {
    const { prompt } = await req.json();
    const result = await streamText({
        model: openai("gpt-3.5-turbo", process.env.NEXT_PUBLIC_OPENAI_API_KEY),
        prompt: `Write a pep talk in the style of Dolly Parton in response to ${prompt}.  
        Use colorful language.  Vary each response.`
    });
    return result.toAIStreamResponse();
}