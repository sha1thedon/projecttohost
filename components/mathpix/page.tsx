// src/App.tsx
import React, { useState } from 'react';
import ImageUpload from '../imageupload/page';
import axios from 'axios';

const Mathpix: React.FC = () => {
  const [solution, setSolution] = useState<string>('');

  const handleImageUpload = async (imageFile: File) => {
    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('format', 'latex');

    try {
      const response = await axios.post('https://api.mathpix.com/v3/text', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'app_id': 'drawmath_11b9b6_58e098',
          'app_key': '4805a36cc0de691e47b1c50a207489f8feffc71db04b302c534ce4ad247691e3',
        },
      });

      // Assuming the API returns the solution in a field named 'text'
      setSolution(response.data.text);
    } catch (error) {
      console.error('Error uploading image:', error);
      setSolution('Failed to solve the problem.');
    }
  };

  return (
    <div>
      <h1>Upload a Math Question</h1>
      <ImageUpload onImageUpload={handleImageUpload} />
      {solution && (
        <div>
          <h2>Solution:</h2>
          <p>{solution}</p>
        </div>
      )}
    </div>
  );
};

export default Mathpix;
