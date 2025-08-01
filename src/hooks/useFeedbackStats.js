import { useMemo } from 'react';
import { useFeedback } from '../contexts/FeedbackContext';

export const useFeedbackStats = () => {
  const { good, neutral, bad } = useFeedback();

  const stats = useMemo(() => {
    const total = good + neutral + bad;
    const positivePercentage = total ? Math.round((good / total) * 100) : 0;
    
    return {
      total,
      positivePercentage,
      hasAnyFeedback: total > 0,
    };
  }, [good, neutral, bad]);

  return {
    good,
    neutral,
    bad,
    ...stats,
  };
}; 