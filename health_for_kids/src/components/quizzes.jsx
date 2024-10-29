import React, { useState } from 'react';
import './quizzes.css';
import fitness from './quiz_images/fitness.png';
import healthy_eating from './quiz_images/healthy_eating.png';
import hygiene from './quiz_images/hygiene.png';
import mental_health from './quiz_images/mental_health.png';
import sleep from './quiz_images/sleep.png';

// Import quiz components
import FitnessQuiz from './quiz_pages/fitnessQuiz';
import HealthyQuiz from './quiz_pages/healthyQuiz';
import HygieneQuiz from './quiz_pages/hygieneQuiz';
import MentalQuiz from './quiz_pages/mentalQuiz';
import SleepQuiz from './quiz_pages/sleepQuiz';

const Quizzes = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  // Quiz data for displaying each quiz button
  const quizData = [
    { type: 'fitness', imgSrc: fitness, component: <FitnessQuiz /> },
    { type: 'healthy', imgSrc: healthy_eating, component: <HealthyQuiz /> },
    { type: 'hygiene', imgSrc: hygiene, component: <HygieneQuiz /> },
    { type: 'mental', imgSrc: mental_health, component: <MentalQuiz /> },
    { type: 'sleep', imgSrc: sleep, component: <SleepQuiz /> }
  ];

  // Display main quiz selection or the selected quiz component
  return (
    <div className="quizzes-container">
      {selectedQuiz ? (
        <div>
          <button onClick={() => setSelectedQuiz(null)} className="back-button">
            Back
          </button>
          {selectedQuiz.component}
        </div>
      ) : (
        <div>
          <p className="quizzes-text">Take our fun quizzes to test your knowledge about health!</p>
          <div className="quizzes-grid">
            {quizData.map((quiz) => (
              <button 
                key={quiz.type} 
                onClick={() => setSelectedQuiz(quiz)} 
                className="quiz-button"
              >
                <img src={quiz.imgSrc} alt={quiz.altText} className="quiz-image" />
                <p>{quiz.altText}</p>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quizzes;

