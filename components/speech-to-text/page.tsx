import React, { useState, useEffect } from 'react';
import { evaluate } from 'mathjs';


const SpeechToText = () => {
    const [transcript, setTranscript] = useState('');
    const [result, setResult] = useState<string | null>(null);
    const [isListening, setIsListening] = useState(false);

    useEffect(() => {
        // Check for browser support
        const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
        if (!SpeechRecognition) {
            alert("Your browser does not support Speech Recognition.");
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.continuous = true; // Keep listening for speech
        recognition.interimResults = true; // Show results even when not final

        recognition.onresult = (event: SpeechRecognitionEvent) => {
            // Concatenate all the interim results
            const transcriptArray = Array.from(event.results)
                .map(result => result[0])
                .map(result => result.transcript);
            const interimTranscript = transcriptArray.join(' ');

            setTranscript(interimTranscript);
        };

        recognition.onstart = () => setIsListening(true);
        recognition.onend = () => setIsListening(false);

        // Start and stop recognition
        if (isListening) {
            recognition.start();
        } else {
            recognition.stop();
        }

        return () => {
            recognition.stop();
        };
    }, [isListening]);

    const solveEquation = () => {
        try {
            // Use mathjs evaluate function for safe evaluation
            const evalResult = evaluate(transcript);
            setResult(evalResult.toString());
        } catch (error) {
            setResult('Error: Invalid expression');
        }
    };

    return (
        <div>
            <button onClick={() => setIsListening(prevState => !prevState)}>
                {isListening ? 'Stop Listening' : 'Start Listening'}
            </button>
            <p>{transcript}</p>
            <button onClick={solveEquation}>Solve Equation</button>
            {result && <p>Result: {result}</p>}
        </div>
    );
};

export default SpeechToText;
