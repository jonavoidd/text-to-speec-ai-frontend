"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col items-center justify-center text-white px-6">
      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center text-center md:text-left max-w-7xl w-full gap-10">
        {/* Left Section - Text Content */}
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Revolutionize Your Transcriptions
          </h1>
          <p className="text-lg md:text-xl mt-4 opacity-90 max-w-md">
            Experience the power of AI-driven speech-to-text technology for fast
            and accurate transcriptions.
          </p>
          <div className="mt-6 flex flex-col md:flex-row justify-center md:justify-start gap-4">
            <Button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-gray-100">
              <Link href={"/transcribe-page"}>Try for Free</Link>
            </Button>
          </div>
        </div>

        {/* Right Section - AI Demo */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-72 text-black">
            <h2 className="text-center text-xl font-bold">
              Live Transcription
            </h2>
            <div className="mt-4 space-y-2">
              <p className="text-gray-600">
                "Hello, how can I help you today?"
              </p>
              <p className="text-gray-400 animate-pulse">Transcribing...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
