import { useState } from "react";
import { Button } from "./ui/button";

interface FileUploaderProps {
  onFileUpload: (file: File) => void;
}

const FileUploader = ({ onFileUpload }: FileUploaderProps) => {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = () => {
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="border p-2 rounded-md"
      />
      <Button onClick={handleUpload} className="mt-2 w-full h-12 px-6 py-3">
        Upload & Transcribe
      </Button>
    </div>
  );
};

export default FileUploader;
