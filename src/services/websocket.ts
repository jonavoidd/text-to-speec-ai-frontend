export const connectWebSocket = (setTranscription: (text: string) => void) => {
  const socket = new WebSocket(
    "https://text-to-speech-ai-backend-hdp1.onrender.com/ws"
  );

  socket.onmessage = (event) => {
    setTranscription(event.data);
  };

  socket.onclose = () => {
    console.log("WebSocket disconnected.");
  };

  return socket;
};
