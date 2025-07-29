import React, { useRef } from 'react';
import { useFeedback } from '../contexts/FeedbackContext';

const FeedbackOptions = () => {
  const { options, handleFeedback } = useFeedback();
  
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
    </div>
  );
};

export default FeedbackOptions; 