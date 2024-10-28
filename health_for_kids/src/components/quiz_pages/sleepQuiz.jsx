import React from 'react';
import './quizStyles.css';

const sleepQuiz = () => {

  return (
    <div className="quiz-container">
      <h2>Sleep Quiz</h2>
      <p>How many hours of sleep should a teenager get each night?</p>
      <div className="quiz-options">
        <button className="option-button">6-7 hours</button>
        <button className="option-button">8-10 hours</button>
        <button className="option-button">11-12 hours</button>
      </div>
    </div>
  );
};

export default sleepQuiz;
