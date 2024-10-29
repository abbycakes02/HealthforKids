import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './quizStyles.css';

const HealthyQuiz = () => {
  const navigate = useNavigate();
  const questions = [
    {
      question: "What are the five main food groups, and why is it important to eat from each group??",
      options: ["Protein, fiber, dairy, sugar, and vegetables", "Vegetables, grains, meats, sweets, and dairy", "Fruits, vegetables, grains, protein, and dairy",
 "Carbs, fruits, dairy, water, and fats"],
      answer: "Fruits, vegetables, grains, protein, and dairy"
    },
    {
      question: "How many glasses of water should you drink each day to stay hydrated?",
      options: ["4 glasses", "8 glasses", "As many as you feel like", "10-12 glasses, depending on the weather"],
      answer: "8 glasses"
    },
    {
      question: "What are some examples of healthy snacks you can choose over junk food?",
      options: ["Candy, dried fruits, and protein shakes", "Energy drinks, chips, and yogurt-covered raisins", "Granola bars, pretzels, and chocolate milk", "Nuts, fruits, and whole grain crackers"],
      answer: "Nuts, fruits, and whole grain crackers"

    },
    {
      question: "Why is it important to eat breakfast, especially for teens?",
      options: ["It helps prevent hunger throughout the entire day", "It boosts energy and concentration for school", "It’s the best time to load up on carbs and sugar", "It replaces the need for lunch"],
      answer: "It boosts energy and concentration for school"

    },
    {
    question: "What are 'empty calories,' and how can you avoid them in your daily diet?",
      options: ["Calories from sugary and processed foods with little nutritional value", "Foods that provide only energy but no taste", " Foods that are low in fat and sugar but high in fiber", "Calories from foods that don’t fill you up"],
      answer: "Calories from sugary and processed foods with little nutritional value"

    },
    // Add more questions as needed
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(null);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQuestionIndex].answer) {
      setCorrectAnswer(true);
      setTimeout(() => {
        goToNextQuestion();
      }, 1000);
    } else {
      setCorrectAnswer(false);
    }
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setCorrectAnswer(null);
    } else {
      setCompleted(true);
    }
  };

  useEffect(() => {
    if (completed) {
      setTimeout(() => {
        navigate('/quizzes');
      }, 2000);
    }
  }, [completed, navigate]);

  return (
    <div className="quiz-container">
      {completed ? (
        <h2>Hooray! You're all done!</h2>
      ) : (
        <div className="quiz-question">
          <h2 className="question">{questions[currentQuestionIndex].question}</h2>
          <div className="options">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <div
                key={index}
                className={`option-box 
                  ${selectedOption === option ? 
                    (correctAnswer ? 'correct' : 'incorrect') : 
                    ''}`}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthyQuiz;
