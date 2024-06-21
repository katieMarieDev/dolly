import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import React from "react";

interface ComponentProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  input: string;
  completion: string;
  history: { question: string, answer: string }[];
}

export default function Component({ handleSubmit, handleInputChange, input, completion, history }: ComponentProps) {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-background py-8 main-container">
      <div className="max-w-lg w-full space-y-6">
        <div className="text-center">
          <img 
            src="https://images.squarespace-cdn.com/content/v1/51bf0e35e4b010d205f86840/1613671680142-VZ01NPD0RPOAUHZRYMIG/Dolly+Final.jpg?format=2500w"
            alt="Dolly Parton"
            className="rounded-xl shadow-lg mb-4"
          />
          <a
            href="https://bittersoutherner.com/southern-perspectives/2021/the-radical-queerness-of-dolly-parton"
            className="text-pink-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Image source
          </a>
          <h1 className="text-3xl font-bold">Dolly's Pep Talks</h1>
          <p className="text-muted-foreground">Confide in Dolly, and she'll shower you with encouragement!</p>
        </div>
        <div className="relative">
          <form onSubmit={handleSubmit}>
            <Textarea
              value={input}
              onChange={handleInputChange}
              placeholder="Well Dolly, I'm worried about..."
              className="w-full rounded-xl border border-muted px-4 py-3 pr-16 focus:outline-none focus:ring-2 focus:ring-primary"
              rows={3}
            />
            <Button type="submit" className="absolute top-1/2 right-4 -translate-y-1/2">
              <SendIcon className="w-5 h-5" />
            </Button>
          </form>
        </div>
        <div className="relative bg-card rounded-xl p-6 shadow-sm">
          <p className="text-muted-foreground relative z-10">
            {completion ? completion : "Your Pep Talk from Dolly Will Appear Here"}
          </p>
        </div>
        <div className="bg-card rounded-xl p-6 shadow-sm mt-6">
          <h2 className="text-2xl font-bold">Dolly's Past Pep Talks</h2>
          <div className='disclaimer'> 
          <p><strong>* Pep talk history is just for you!</strong> Your past pep talks are stored locally on your computer in localStorage. This means they are private and only accessible from your device.</p>
          <p className='pt-4 pb-4'>To clear your history, follow these steps:</p>
          <ol>
            <li>Right-click on the page and select "Inspect".</li>
            <li>Navigate to the "Application" tab in the developer tools.</li>
            <li>Under "Storage", find and clear your localStorage.</li>
          </ol>
          </div>
          <ul>
            {history.slice().reverse().map((entry, index) => (
              <li key={index} className="mb-4">
                <p><strong>Question:</strong> {entry.question}</p>
                <p><strong>Answer:</strong> {entry.answer}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center mt-6">
          <p className="text-muted-foreground">Share the love and be a Dolly to someone in need.</p>
        </div>
        <div className="text-center mt-6 text-pink-600">
  Need more encouragement? <br />
  Download Dolly's song "<a
    href="https://dollyparton.com/life-and-career/music/i-believe-in-you-free-download"
    className="text-pink-600 underline"
    target="_blank"
    rel="noopener noreferrer"
  >
    I Believe In You
  </a>"
</div>
<div className="text-center mt-6 text-pink-600">
  Made by <a href="https://www.linkedin.com/in/katiemariedev" className="text-pink-600 underline" target="_blank" rel="noopener noreferrer">Katie</a>, inspired by <a href="https://www.moonhighway.com/about/" className="text-pink-600 underline">Eve Porcello</a>'s workshop at <a href="https://cascadiajs.com/" className="text-pink-600 underline">CascadiaJS 2024</a>
</div>
<div className="text-center mt-6 text-pink-600">
  <a href="https://github.com/katieMarieDev" className="text-pink-600 underline" target="_blank" rel="noopener noreferrer">GitHub</a>
</div>

      </div>
    </div>
  );
}

function SendIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}
