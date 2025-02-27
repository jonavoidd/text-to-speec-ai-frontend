const TranscriptionDisplay = ({ transcription }: { transcription: string }) => {
  return (
    <div className="mt-4 p-4 border rounded-md w-full max-w-lg bg-gray-100">
      <h2 className="text-lg font-bold">Transcription:</h2>
      <p>{transcription || "No transcription yet."}</p>
    </div>
  );
};

export default TranscriptionDisplay;
