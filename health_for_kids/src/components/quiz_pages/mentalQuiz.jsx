import React from 'react';
import './quizStyles.css';

const mentalQuiz = () => {

  return (
    <div className="quiz-container">
      <h2>Mental Health Quiz</h2>
      <p>Which activity can help improve mental well-being?</p>
      <div className="quiz-options">
        <button className="option-button">Meditation</button>
        <button className="option-button">Junk food</button>
        <button className="option-button">Skipping sleep</button>
      </div>
    </div>
  );
};

export default mentalQuiz;
