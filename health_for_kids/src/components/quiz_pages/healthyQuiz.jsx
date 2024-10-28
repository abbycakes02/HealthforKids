import React from 'react';
import './quizStyles.css';

const healthyQuiz = () => {

  return (
    <div className="quiz-container">
      <h2>Healthy Eating Quiz</h2>
      <p>What is the most important meal of the day?</p>
      <div className="quiz-options">
        <button className="option-button">Breakfast</button>
        <button className="option-button">Lunch</button>
        <button className="option-button">Dinner</button>
      </div>
    </div>
  );
};

export default healthyQuiz;
