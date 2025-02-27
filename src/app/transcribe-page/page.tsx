"use client";

import { useState, useRef } from "react";
import FileUploader from "@/components/FileUploader";
import TranscriptionDisplay from "@/components/TranscriptionDisplay";
import { Loader2, Mic, AlertCircle } from "lucide-react";

export default function Home() {
  const [transcription, setTranscription] = useState("");
  const [loading, setLoading] = useState(false);
  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);

  // Handle File Upload
  const handleFileUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/transcribe", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to transcribe audio");
      const data = await response.json();
      setTranscription(data.transcription);
    } catch (error) {
      console.error("Error:", error);
    }

    setLoading(false);
  };

  // Start Recording Audio
  const startRecording = async () => {
    setRecording(true);
    audioChunks.current = [];

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) audioChunks.current.push(event.data);
    };

    mediaRecorder.onstop = async () => {
      const audioBlob = new Blob(audioChunks.current, { type: "audio/wav" });
      const file = new File([audioBlob], "recorded_audio.wav", {
        type: "audio/wav",
      });
      handleFileUpload(file);
    };

    mediaRecorder.start();
  };

  // Stop Recording Audio
  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 sm:p-12 bg-gray-100">
      {/* Vertical Card */}
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Hello, how can I help you today?
        </h2>

        <div className="flex items-center gap-2 text-sm mt-2 text-yellow-600 bg-yellow-100 p-3 rounded-lg">
          <AlertCircle className="w-5 h-5" />
          <p>
            Your uploaded or recorded audio is NOT saved on our servers. We
            process it in real-time and discard it immediately after
            transcription.
          </p>
        </div>

        {/* Upload & Record Options */}
        <div className="mt-6 flex flex-col gap-4">
          <FileUploader onFileUpload={handleFileUpload} />

          {/* Audio Recording Button */}
          <button
            onClick={recording ? stopRecording : startRecording}
            className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white ${
              recording ? "bg-red-500" : "bg-blue-500"
            } shadow-md hover:opacity-90 transition`}
          >
            {recording ? (
              <>
                <Loader2 className="animate-spin w-5 h-5" />
                Stop Recording
              </>
            ) : (
              <>
                <Mic className="w-5 h-5" />
                Record Audio
              </>
            )}
          </button>
        </div>

        {/* Loading Indicator */}
        {loading && (
          <div className="mt-6 flex items-center gap-2 text-gray-600">
            <Loader2 className="animate-spin w-6 h-6 text-blue-500" />
            <span>Transcribing...</span>
          </div>
        )}

        {/* Transcription Display */}
        <div className="mt-6">
          <TranscriptionDisplay transcription={transcription} />
        </div>
      </div>
    </div>
  );
}
