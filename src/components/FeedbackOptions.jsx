import React, { useRef } from 'react';
import { useFeedback } from '../contexts/FeedbackContext';

const FeedbackOptions = () => {
  const { options, handleFeedback, resetFeedback, total } = useFeedback();
  
  const lastClickedButtonRef = useRef(null);

  const onButtonClick = (option) => {
    handleFeedback(option);
    
    if (lastClickedButtonRef.current) {
      lastClickedButtonRef.current.style.backgroundColor = '#4CAF50';
    }
    
    const currentButton = document.querySelector(`[data-option="${option}"]`);
    if (currentButton) {
      currentButton.style.backgroundColor = '#45a049';
      lastClickedButtonRef.current = currentButton;
    }
  };

  const onResetClick = () => {
    resetFeedback();
    if (lastClickedButtonRef.current) {
      lastClickedButtonRef.current.style.backgroundColor = '#4CAF50';
      lastClickedButtonRef.current = null;
    }
  };

  return (
    <div>
      {options.map(option => (
        <button
          key={option}
          data-option={option}
          type="button"
          onClick={() => onButtonClick(option)}
          style={{
            marginRight: '10px',
            padding: '8px 16px',
            textTransform: 'capitalize',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {option}
        </button>
      ))}
      {total > 0 && (
        <button
          type="button"
          onClick={onResetClick}
          style={{
            marginLeft: '10px',
            padding: '8px 16px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default FeedbackOptions; 