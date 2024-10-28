import React from 'react';
import { useNavigate } from 'react-router-dom';
import './quizzes.css';
import fitness from './quiz_images/fitness.png';
import healthy_eating from './quiz_images/healthy_eating.png';
import hygiene from './quiz_images/hygiene.png';
import mental_health from './quiz_images/mental_health.png';
import sleep from './quiz_images/sleep.png';

const Quizzes = () => {
  const navigate = useNavigate();

  const handleQuizClick = (quizId) => {
    navigate(`/quiz/${quizId}`);
  };

  return (
    <div className="quizzes-container">
      <p className="quizzes-text">Take our fun quizzes to test your knowledge about health!</p>
      <div className="quizzes-grid">
        <button onClick={() => handleQuizClick(1)} className="quiz-button">
          <img src={fitness} alt="Fitness Quiz" className="quiz-image" />
        </button>
        <button onClick={() => handleQuizClick(2)} className="quiz-button">
          <img src={healthy_eating} alt="Healthy Eating Quiz" className="quiz-image" />
        </button>
        <button onClick={() => handleQuizClick(3)} className="quiz-button">
          <img src={hygiene} alt="Hygiene Quiz" className="quiz-image" />
        </button>
        <button onClick={() => handleQuizClick(4)} className="quiz-button">
          <img src={mental_health} alt="Mental Health Quiz" className="quiz-image" />
        </button>
        <button onClick={() => handleQuizClick(5)} className="quiz-button">
          <img src={sleep} alt="Sleep Quiz" className="quiz-image" />
        </button>
      </div>
    </div>
  );
};

export default Quizzes;
