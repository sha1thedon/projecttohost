import React, { useRef, useState } from 'react';
import Tesseract from 'tesseract.js';

const MathDrawingRecognition: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mathText, setMathText] = useState<string>('');
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [recognizedText, setRecognizedText] = React.useState('');


  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.closePath();
    setIsDrawing(false);
  };
  
  const handleClear = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  };

  const handleRecognize = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    Tesseract.recognize(
      canvas.toDataURL(),
      'eng',
      { logger: m => console.log(m)   }
    ).then(({ data: { text } }) => {
      setRecognizedText(text);
    });

    // if (canvas) {
    //   // Example: Convert canvas to data URL
    //   const imageDataUrl = canvas.toDataURL('image/png');

    //   // Here you would send `imageDataUrl` to a recognition API
    //   // and parse the response to setMathText. This is a placeholder for demonstration.
    //   const recognizedText = imageDataUrl; // Assume this is the response
    //   setMathText(recognizedText);
    // }
  };

  return (
    <div>
      <canvas 
        ref={canvasRef} 
        width="400" 
        height="200" 
        style={{border: '1px solid #000'}}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      ></canvas>
      <button onClick={handleClear}>Clear</button>
      <button onClick={handleRecognize}>Recognize</button>
      <div>Recognized Math: {recognizedText}</div>
    </div>
  );
};

export default MathDrawingRecognition;
