export const connectWebSocket = (setTranscription: (text: string) => void) => {
  const socket = new WebSocket("ws://locahost:8000/ws");

  socket.onmessage = (event) => {
    setTranscription(event.data);
  };

  socket.onclose = () => {
    console.log("WebSocket disconnected.");
  };

  return socket;
};
