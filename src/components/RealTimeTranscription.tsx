"use client";

import { useEffect, useState } from "react";

const RealTimeTranscription = () => {
  const [transcription, setTranscription] = useState("");
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080/ws");

    ws.onmessage = (event) => {
      setTranscription((prev) => prev + " " + event.data);
    };

    ws.onerror = (error) => console.error("WebSocket Error:", error);

    return () => ws.close();
  }, []);

  return (
    <div className="mt-4 p-2 border rounded w-full max-w-lg">
      <h2 className="text-lg font-semibold">Live Transcription:</h2>
      <p className="text-gray-700">{transcription || "Waiting for audio..."}</p>
    </div>
  );
};
