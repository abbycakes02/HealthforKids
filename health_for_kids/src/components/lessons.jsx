import React, { useState } from 'react';
import './lessons.css'; // Ensure you have this CSS file

const Lessons = () => {
  const [selectedChapter, setSelectedChapter] = useState('Mental Health');

  const chapters = [
    'Mental Health',
    'Physical Wellness',
    'Nutrition',
    'Sleep',
    'Stress Management',
  ];

  const handleChapterClick = (chapter) => {
    setSelectedChapter(chapter);
  };

  return (
    <div className="lessons-container">
      <div className="chapters-box">
        <h2>chapters</h2>
        <ul>
          {chapters.map((chapter) => (
            <li key={chapter} onClick={() => handleChapterClick(chapter)}>
              {chapter}
            </li>
          ))}
        </ul>
      </div>
      <div className="content-box">
        <h3>{selectedChapter}</h3>
        <p>
          {selectedChapter === 'Mental Health' && (
            <div>
              <h4>Mental Health Awareness</h4>
              <p>
                Mental health is crucial for overall well-being. Understanding mental health can help individuals identify issues and seek help when needed.
              </p>
              <h5>Key Topics:</h5>
              <ul>
                <li>Understanding mental health and its importance.</li>
                <li>Recognizing signs of mental health issues.</li>
                <li>How to seek help and support others.</li>
                <li>Practicing mindfulness and stress reduction techniques.</li>
              </ul>
            </div>
          )}
          {selectedChapter === 'Physical Wellness' && (
            <div>
              <h4>Physical Wellness</h4>
              <p>
                Physical wellness involves maintaining a healthy body through regular exercise, a balanced diet, and proper sleep.
              </p>
              <h5>Key Points:</h5>
              <ul>
                <li>Importance of regular physical activity.</li>
                <li>Benefits of a balanced diet and nutrition.</li>
                <li>Tips for getting enough sleep.</li>
                <li>Understanding the risks of a sedentary lifestyle.</li>
              </ul>
            </div>
          )}
          {selectedChapter === 'Nutrition' && (
            <div>
              <h4>1. Healthy Eating & Nutrition</h4>
              <p>
                Introduction: Healthy eating is essential for maintaining good physical health and supporting mental well-being. It involves making informed choices about what you eat and drink to fuel your body.
              </p>
              <h5>Key Points:</h5>
              <ul>
                <li>
                  <strong>Food Groups:</strong> Discuss the five main food groups: fruits, vegetables, grains, protein, and dairy. Emphasize the importance of eating a variety from each group for balanced nutrition.
                </li>
                <li>
                  <strong>Hydration:</strong> Explain how much water is recommended daily (10-12 glasses) and the role hydration plays in bodily functions.
                </li>
                <li>
                  <strong>Healthy Snacks:</strong> Highlight healthier snack options, such as nuts and fruits, versus junk food options.
                </li>
                <li>
                  <strong>Importance of Breakfast:</strong> Discuss why breakfast is crucial for teens, focusing on energy levels and concentration for school.
                </li>
                <li>
                  <strong>Understanding Empty Calories:</strong> Define "empty calories" and provide tips on how to avoid them, such as choosing whole foods over processed snacks.
                </li>
              </ul>
            </div>
          )}
          {selectedChapter === 'Sleep' && (
            <div>
              <h4>Sleep Hygiene</h4>
              <p>
                Sleep is essential for physical and mental health. Developing good sleep habits can enhance well-being and performance.
              </p>
              <h5>Key Points:</h5>
              <ul>
                <li>Understanding sleep cycles and their importance.</li>
                <li>Tips for creating a sleep-friendly environment.</li>
                <li>Benefits of a consistent sleep schedule.</li>
                <li>Recognizing signs of sleep disorders.</li>
              </ul>
            </div>
          )}
          {selectedChapter === 'Stress Management' && (
            <div>
              <h4>Managing Stress</h4>
              <p>
                Stress is a common experience that can affect mental and physical health. Learning to manage stress is key to maintaining wellness.
              </p>
              <h5>Key Points:</h5>
              <ul>
                <li>Understanding what stress is and its effects on the body.</li>
                <li>Identifying stress triggers in daily life.</li>
                <li>Techniques for managing stress, such as mindfulness and relaxation exercises.</li>
                <li>Importance of seeking support when overwhelmed.</li>
              </ul>
            </div>
          )}
        </p>
      </div>
    </div>
  );
};

export default Lessons;
