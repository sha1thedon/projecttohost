"use client"

import React, { useState, useEffect } from 'react';

const TimeSpentOnWebsite: React.FC = () => {
  const [timeSpent, setTimeSpent] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(prevTimeSpent => prevTimeSpent + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>Time Spent on Website</h1>
      <p>{formatTime(timeSpent)}</p>
    </div>
  );
};

export default TimeSpentOnWebsite;
