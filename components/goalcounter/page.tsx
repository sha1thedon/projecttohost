import { StudyGoal } from '@/types';
import React from 'react';


interface GoalCounterProps {
  goals: StudyGoal[];
}

const GoalCounter: React.FC<GoalCounterProps> = ({ goals }) => {
  const totalGoals = goals.length;
  const completedGoals = goals.filter(goal => goal.completed).length;

  return (
    <div>
      <p>Total Goals: {totalGoals}</p>
      <p>Completed Goals: {completedGoals}</p>
    </div>
  );
};

export default GoalCounter;
