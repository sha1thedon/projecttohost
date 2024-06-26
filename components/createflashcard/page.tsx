"use client"

// import { createFlashcard } from '@/actions/create-flashcard';
import Flashcard from '@/components/flashcards/page';
import { FormInput } from '@/components/form/form-input';
import { FormSubmit } from '@/components/form/form-submit';
import { Button } from '@/components/ui/button';
import { useAction } from '@/hooks/use-action';
import { Plus, X } from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useRef, useState, ElementRef } from 'react';


const CreateFlashcard = () => {
    const [flashcards, setFlashcards] = useState<{ question: string; answer: string; options: string[] }[]>([]);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);
    const [isEditing, setIsEditing] = useState(false)

   

    const addFlashcard = () => {
        setFlashcards([...flashcards, { question, answer, options }]);
        setQuestion('');
        setAnswer('');
        setOptions(['', '', '', '']);
    };

    

   

    return (
      <div>

      <h1 className="text-3xl font-semibold mb-4">Flashcard Creator</h1>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="question">
          Question:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="question"
          type="text"
          placeholder="Enter your question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="answer">
          Answer:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="answer"
          type="text"
          placeholder="Enter your answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </div>
   
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={addFlashcard}
      >
        Add Flashcard
      </button>
     

      {flashcards.map((flashcard, index) => (
        <Flashcard key={index} flashcard={flashcard} />

      ))}
    </div>
        
    );
}

export default CreateFlashcard;