import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './quizStyles.css';

const SleepQuiz = () => {
  const navigate = useNavigate();
  const questions = [
    {
      question: "Why do teens need more sleep than adults, and how much sleep is ideal?",
      options: ["Teens need 8-10 hours of sleep for growth, learning, and emotional regulation", "Teens can get by on 4-5 hours as long as they nap", "Teens need the same amount as adults: 6-7 hours",
 " Teens need 5-6 hours because they are more energetic"],
      answer: "Teens need 8-10 hours of sleep for growth, learning, and emotional regulation"
    },
    {
      question: "How does using screens before bed affect your ability to fall asleep?",
      options: [" It has no effect as long as you turn off the lights", "The blue light from screens reduces melatonin production, making it harder to fall asleep", " It helps relax your brain after a long day", " It makes you sleepy faster by tiring your eyes"],
      answer: "The blue light from screens reduces melatonin production, making it harder to fall asleep"
    },
    {
      question: "What can you do to make sure you get a good night's sleep on school nights?",
      options: [" Stay up late to finish homework and catch up on social media", "Sleep in on weekends to make up for lost sleep", "Stay up late to finish homework and catch up on social media", "Stick to a consistent bedtime, avoid screens, and relax before bed"],
      answer: "Stick to a consistent bedtime, avoid screens, and relax before bed"

    },
    {
      question: "How can naps be helpful, and when is the best time to take them?",
      options: ["Naps can restore energy; the ideal time is early afternoon", "Naps are most effective if taken late at night", "Naps should be taken only when you feel extremely tired", "Naps are unnecessary if you sleep well at night"],
      answer: "Naps can restore energy; the ideal time is early afternoon"

    },
    {
    question: "Why is a regular bedtime routine important for improving sleep quality?",
      options: ["It keeps your body tired throughout the day", "It signals your body that it’s time to wind down and promotes better sleep", " It ensures you always wake up at the same time", "It prevents you from feeling sleepy during the day"],
      answer: "It signals your body that it’s time to wind down and promotes better sleep"

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

export default SleepQuiz;
