import React, { useRef, useEffect } from 'react';
import { useFeedback } from '../contexts/FeedbackContext';

const Statistics = () => {
  const { good, neutral, bad, total, positivePercentage } = useFeedback();
  
  const totalRef = useRef(null);

  useEffect(() => {
    if (totalRef.current && total > 0) {
      totalRef.current.style.fontWeight = 'bold';
      totalRef.current.style.color = '#2196F3';
    }
  }, [total]);

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p ref={totalRef}>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics; 