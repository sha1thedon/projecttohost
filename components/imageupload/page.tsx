// src/ImageUpload.tsx
import React, { useState } from 'react';

interface Props {
  onImageUpload: (imageFile: File) => void;
}

const ImageUpload: React.FC<Props> = ({ onImageUpload }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (selectedFile) {
      onImageUpload(selectedFile);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button type="submit">Upload Question</button>
    </form>
  );
};

export default ImageUpload;
