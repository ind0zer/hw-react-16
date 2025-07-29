import React from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';
import { FeedbackProvider, useFeedback } from './contexts/FeedbackContext';

const AppContent = () => {
  const { total } = useFeedback();

  return (
    <div className="App">
      <Section title="Please leave feedback">
        <FeedbackOptions />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

const App = () => {
  return (
    <FeedbackProvider>
      <AppContent />
    </FeedbackProvider>
  );
};

export default App; 