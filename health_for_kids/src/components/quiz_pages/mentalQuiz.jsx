import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './quizStyles.css';

const MentalQuiz = () => {
  const navigate = useNavigate();
  const questions = [
    {
      question: "What are some healthy ways to manage stress when you feel overwhelmed?",
      options: ["Sleep until you feel better, isolate yourself, and avoid talking about it", "Practice deep breathing, talk to someone, or take short breaks", "Keep working until you feel less stressed",
 "Distract yourself by overloading with other activities"],
      answer: "Practice deep breathing, talk to someone, or take short breaks"
    },
    {
      question: "How can practicing mindfulness help improve your mood or reduce anxiety?",
      options: ["It teaches you to stay present and calm, helping you manage your emotions better", "It helps you plan ahead and avoid stressful situations", "It allows you to meditate on the causes of your anxiety", " It helps you block out emotions that cause stress"],
      answer: "It teaches you to stay present and calm, helping you manage your emotions better"
    },
    {
      question: "Why is it important to talk to someone when you're feeling sad or anxious?",
      options: ["Talking distracts you from your problems", "It makes the feelings disappear immediately", "It allows others to tell you what you should do", "It helps you process emotions and gain perspective"],
      answer: "It helps you process emotions and gain perspective"

    },
    {
      question: "What are some signs that you might need to take a break from social media?",
      options: ["When you feel like you don’t have enough followers", "When you’ve been online for less than an hour", "When you feel anxious, compare yourself to others, or feel overwhelmed by content", "When your friends stop responding quickly"],
      answer: "When you feel anxious, compare yourself to others, or feel overwhelmed by content"

    },
    {
    question: "How can keeping a journal help you better understand your feelings and emotions?",
      options: [" It provides an outlet for negative thoughts only", "It helps you track your problems day by day", "It forces you to overanalyze everything you feel", "Writing helps you reflect and organize your thoughts over time"],
      answer: "Writing helps you reflect and organize your thoughts over time"

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

export default MentalQuiz;
