import React, { useState } from 'react';
import './lessons.css'; // Ensure you have this CSS file
import testYourselfImage from './test_yourself.png'; // Ensure the image path is correct
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Lessons = () => {
  const navigate = useNavigate(); // Initialize useNavigate
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

  const handleTestYourselfClick = () => {
    navigate('/quizzes'); // Navigate to quizzes page
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
          {selectedChapter === 'Mental Health' && (<div><p> <br></br>Mental health is a crucial aspect of overall well-being, encompassing emotional, psychological, and social factors. It affects how we think, feel, and act, and influences our ability to cope with stress, relate to others, and make choices. Mental health issues, such as anxiety and depression, can arise from various sources, including genetic factors, traumatic experiences, or environmental stressors. Recognizing the signs of mental health challenges is essential for seeking help. This can include feelings of sadness, excessive worry, or changes in behavior. Early intervention can lead to better outcomes and improved quality of life. </p> 

          <br></br><p> Practicing mindfulness and engaging in activities that promote relaxation can significantly enhance mental well-being. Techniques such as deep breathing, meditation, and yoga help individuals manage their emotions and reduce stress. Moreover, reaching out to friends or family when feeling overwhelmed can provide essential support. Talking openly about feelings can help normalize mental health discussions and reduce stigma. Ultimately, maintaining good mental health requires a proactive approach, including regular self-care practices, building a strong support network, and seeking professional help when necessary.</p> </div>)}
          {selectedChapter === 'Physical Wellness' &&  (<div><p> <br></br>Physical wellness encompasses regular physical activity, adequate nutrition, and overall health maintenance, all contributing to one's overall fitness. Engaging in consistent exercise is vital for maintaining a healthy body and can include various activities such as walking, running, swimming, or participating in sports. The Centers for Disease Control and Prevention (CDC) recommend that children and adolescents get at least 60 minutes of moderate-to-vigorous physical activity daily. This not only helps in building and maintaining healthy bones, muscles, and joints but also improves cardiovascular fitness and contributes to mental well-being. </p> 
          <br></br><p> Practicing mindfulness and engaging in activities that promote relaxation can significantly enhance mental well-being. Techniques such as deep breathing, meditation, and yoga help individuals manage their emotions and reduce stress. Moreover, reaching out to friends or family when feeling overwhelmed can provide essential support. Talking openly about feelings can help normalize mental health discussions and reduce stigma. Ultimately, maintaining good mental health requires a proactive approach, including regular self-care practices, building a strong support network, and seeking professional help when necessary.</p> </div>)}

          {selectedChapter === 'Nutrition' && (<div><p> <br></br>Nutrition is a vital component of a healthy lifestyle, providing the body with the necessary nutrients to function efficiently. Eating a balanced diet, which includes a variety of food groups—fruits, vegetables, grains, proteins, and dairy—is essential for obtaining the vitamins and minerals needed for growth and development. Each food group plays a unique role; for instance, fruits and vegetables are rich in fiber and antioxidants, while proteins are crucial for muscle repair and growth. It's important for individuals, especially teens, to understand the benefits of diverse foods to help make healthier choices.

</p> 

<br></br><p> Moreover, developing healthy eating habits early on can have long-term benefits. Choosing nutritious snacks, such as nuts, fruits, and yogurt, over processed options can help maintain energy levels and reduce the risk of chronic diseases. It’s also crucial to stay hydrated by drinking adequate amounts of water each day, as proper hydration is essential for optimal bodily functions. By cultivating an awareness of nutrition and making conscious food choices, individuals can improve their health and well-being, setting a strong foundation for the future.</p> </div>)}



          {selectedChapter === 'Sleep' && (<div><p> <br></br>Sleep is a fundamental aspect of health, particularly for teens who require 8-10 hours of sleep per night for optimal growth and cognitive function. Quality sleep is crucial for emotional regulation, memory consolidation, and physical health. Lack of sufficient sleep can lead to a range of negative outcomes, including difficulties in concentration, increased stress levels, and a greater likelihood of engaging in risky behaviors. Establishing a regular sleep routine, which includes going to bed and waking up at the same time each day, can significantly enhance sleep quality.

</p> 

<br></br><p> Additionally, the use of screens before bedtime can adversely affect sleep patterns. The blue light emitted by devices can suppress melatonin production, making it harder to fall asleep. Creating a calming bedtime routine that minimizes screen time and promotes relaxation, such as reading or listening to soothing music, can be beneficial. Understanding the importance of sleep hygiene, including maintaining a comfortable sleep environment and avoiding stimulants before bed, is essential for fostering better sleep habits and ensuring overall well-being.</p> </div>)}
          {selectedChapter === 'Stress Management' && (<div><p> <br></br>Effective stress management is vital for maintaining mental and physical health, especially in today's fast-paced world. Stress can manifest in various forms, affecting individuals differently, and may stem from academic pressures, social dynamics, or personal challenges. Recognizing stressors and developing coping strategies is crucial for managing stress effectively. Techniques such as mindfulness, meditation, and regular physical activity can help individuals reduce stress levels and improve their overall mood.

</p> 

<br></br><p> Talking to someone you trust about your feelings is also an effective way to manage stress. Sharing concerns can provide relief and lead to constructive solutions. Additionally, keeping a journal can help individuals process their emotions and gain clarity on their thoughts. It allows for reflection on stressful events and can serve as a tool for understanding triggers. Implementing healthy stress management practices can enhance resilience and improve overall well-being, allowing individuals to navigate life's challenges more effectively.</p> </div>)}
 </p>
        <div class="button-container">
        <button className="test-yourself-button" onClick={handleTestYourselfClick}>
          <img src={testYourselfImage} alt="Test Yourself" />
        </button> 
        </div>
      </div>
    </div>
  );
};

export default Lessons;
