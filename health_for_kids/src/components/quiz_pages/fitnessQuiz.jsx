import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './quizStyles.css';

const FitnessQuiz = () => {
  const navigate = useNavigate();
  const questions = [
    {
      question: "How much physical activity should you aim for each day to stay healthy?",
      options: ["60 minutes of moderate-to-vigorous activity", "20-30 minutes of low-intensity exercise", "45 minutes of intense exercise", "15 minutes of cardio and some stretching"],
      answer: "60 minutes of moderate-to-vigorous activity"
    },
    {
      question: "What are some fun ways to stay active if you don’t like traditional sports?",
      options: ["Dance, skateboarding, or swimming", "Watching fitness videos online", "Playing video games with motion controls", "Walking to the store and back"],
      answer: "Dance, skateboarding, or swimming"
    },
    {
      question: "How does regular exercise benefit your mental health, not just your body?",
      options: ["It releases endorphins that improve mood and reduce stress ", "It makes you feel physically tired so you sleep better", "It gives you something to do, which helps distract from negative thoughts", "It makes your body stronger, which indirectly improves mental health"],
      answer: "It releases endorphins that improve mood and reduce stress"

    },
    {
      question: "What’s the difference between strength training and cardio exercises?",
      options: ["Strength training builds muscle and endurance; cardio improves heart and lung function", "Cardio is more intense, while strength training is slow and steady", "Strength training is for muscle building; cardio is for burning fat only", "Cardio uses weights; strength training is mostly bodyweight exercises"],
      answer: "Strength training builds muscle and endurance; cardio improves heart and lung function"

    },
    {
    question: "Why is it important to stretch before and after a workout or physical activity?",
      options: ["To increase flexibility and help prevent muscle injuries", "To reduce soreness during your workout", "To build more muscle", "To burn more calories before you start your workout"],
      answer: "To increase flexibility and help prevent muscle injuries"

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

export default FitnessQuiz;
