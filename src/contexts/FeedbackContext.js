import React, { createContext, useContext, useReducer } from 'react';

const FeedbackContext = createContext();

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const actionTypes = {
  INCREMENT_GOOD: 'INCREMENT_GOOD',
  INCREMENT_NEUTRAL: 'INCREMENT_NEUTRAL',
  INCREMENT_BAD: 'INCREMENT_BAD',
  RESET_FEEDBACK: 'RESET_FEEDBACK',
};

const feedbackReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_GOOD:
      return {
        ...state,
        good: state.good + 1,
      };
    case actionTypes.INCREMENT_NEUTRAL:
      return {
        ...state,
        neutral: state.neutral + 1,
      };
    case actionTypes.INCREMENT_BAD:
      return {
        ...state,
        bad: state.bad + 1,
      };
    case actionTypes.RESET_FEEDBACK:
      return initialState;
    default:
      return state;
  }
};

export const useFeedback = () => {
  const context = useContext(FeedbackContext);
  if (!context) {
    throw new Error('useFeedback must be used within a FeedbackProvider');
  }
  return context;
};

export const FeedbackProvider = ({ children }) => {
  const [state, dispatch] = useReducer(feedbackReducer, initialState);

  const options = ['good', 'neutral', 'bad'];

  const handleFeedback = (option) => {
    switch (option) {
      case 'good':
        dispatch({ type: actionTypes.INCREMENT_GOOD });
        break;
      case 'neutral':
        dispatch({ type: actionTypes.INCREMENT_NEUTRAL });
        break;
      case 'bad':
        dispatch({ type: actionTypes.INCREMENT_BAD });
        break;
      default:
        break;
    }
  };

  const resetFeedback = () => {
    dispatch({ type: actionTypes.RESET_FEEDBACK });
  };

  const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.round((state.good / total) * 100) : 0;
  };

  const value = {
    good: state.good,
    neutral: state.neutral,
    bad: state.bad,
    options,
    total: countTotalFeedback(),
    positivePercentage: countPositiveFeedbackPercentage(),
    handleFeedback,
    resetFeedback,
  };

  return (
    <FeedbackContext.Provider value={value}>
      {children}
    </FeedbackContext.Provider>
  );
}; 