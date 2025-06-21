const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
          style={{
            marginRight: '10px',
            padding: '8px 16px',
            textTransform: 'capitalize',
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions; 