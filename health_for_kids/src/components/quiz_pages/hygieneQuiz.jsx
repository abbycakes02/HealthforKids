import React from 'react';
import './quizStyles.css';

const hygieneQuiz = () => {

  return (
    <div className="quiz-container">
      <h2>Hygiene Quiz</h2>
      <p>How long should you wash your hands?</p>
      <div className="quiz-options">
        <button className="option-button">10 seconds</button>
        <button className="option-button">20 seconds</button>
        <button className="option-button">30 seconds</button>
      </div>
    </div>
  );
};

export default hygieneQuiz;
