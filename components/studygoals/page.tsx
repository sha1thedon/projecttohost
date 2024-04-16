"use client"

import { StudyGoal } from '@/types';
import React, { useState } from 'react';


interface StudyGoalsProps {
  goals: StudyGoal[];
  setGoals: React.Dispatch<React.SetStateAction<StudyGoal[]>>;
}

const StudyGoals: React.FC<StudyGoalsProps> = ({ goals, setGoals }) => {

  const [newGoal, setNewGoal] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewGoal(event.target.value);
  };

  const addGoal = () => {
    if (newGoal.trim() !== '') {
      const newStudyGoal: StudyGoal = {
        id: goals.length + 1,
        goal: newGoal.trim(),
        completed: false
      };
      setGoals([...goals, newStudyGoal]);
      setNewGoal('');
    }
  };

  const deleteGoal = (id: number) => {
    const updatedGoals = goals.filter(goal => goal.id !== id);
    setGoals(updatedGoals);
  };

  const toggleCompletion = (id: number) => {
    const updatedGoals = goals.map(goal => {
      if (goal.id === id) {
        return { ...goal, completed: !goal.completed };
      }
      return goal;
    });
    setGoals(updatedGoals);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Study Goals</h2>
      <ul className="mb-4">
        {goals.map(goal => (
          <li key={goal.id} className="flex justify-between items-center py-2">
            <span style={{ textDecoration: goal.completed ? 'line-through' : 'none' }}>
              {goal.goal}
            </span>

            <div>
            <button
                onClick={() => toggleCompletion(goal.id)}
                className="text-sm text-green-600 focus:outline-none mr-2"
              >
                {goal.completed ? 'Undo' : 'Completed'}
              </button>
            <button
              onClick={() => deleteGoal(goal.id)}
              className="text-sm text-red-600 focus:outline-none"
            >
              Delete
            </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex">
        <input
          type="text"
          value={newGoal}
          onChange={handleInputChange}
          placeholder="Enter your study goal"
          className="flex-grow mr-2 p-2 border border-gray-300 rounded-md focus:outline-none"
        />
        <button
          onClick={addGoal}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Add Goal
        </button>
      </div>
    </div>
  );
};

export default StudyGoals;


