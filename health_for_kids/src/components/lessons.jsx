import React, { useState } from 'react';
import './lessons.css';

// Sample Lesson components (Replace these with your actual lesson components)
const LessonOne = () => <div>Lesson One Content</div>;
const LessonTwo = () => <div>Lesson Two Content</div>;
const LessonThree = () => <div>Lesson Three Content</div>;

const Lessons = () => {
  const [selectedLesson, setSelectedLesson] = useState(null);

  const lessonData = [
    { type: 'lessonOne', title: 'Lesson One' },
    { type: 'lessonTwo', title: 'Lesson Two' },
    { type: 'lessonThree', title: 'Lesson Three' }
  ];

  const handleLessonClick = (lessonType) => {
    setSelectedLesson(lessonType);
  };

  const renderLessonContent = () => {
    switch (selectedLesson) {
      case 'lessonOne':
        return <LessonOne />;
      case 'lessonTwo':
        return <LessonTwo />;
      case 'lessonThree':
        return <LessonThree />;
      default:
        return <p>Select a lesson to get started!</p>;
    }
  };

  return (
    <div className="lessons-container">
      <h1 className="lessons-header">Learn Something New!</h1>
      <div className="lessons-grid">
        {lessonData.map((lesson) => (
          <button 
            key={lesson.type} 
            onClick={() => handleLessonClick(lesson.type)} 
            className="lesson-button"
          >
            {lesson.title}
          </button>
        ))}
      </div>
      <div className="lesson-content">
        {selectedLesson && (
          <button onClick={() => setSelectedLesson(null)} className="back-button">
            Back to Lessons
          </button>
        )}
        {renderLessonContent()}
      </div>
    </div>
  );
};

export default Lessons;
