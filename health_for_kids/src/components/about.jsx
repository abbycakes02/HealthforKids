import React from 'react';
import meet_the_team from '../meet_the_team.png'; // Adjust the path as necessary
import './about.css'; // Import the new CSS file
import avni from './avni.png'; // Importing Avni's image
import abby from './abby.png'; // Importing Avni's image

// Array containing four unique team members
const teamMembers = [
  { name: 'Avni', image: avni }, // Use the imported avni directly
  { name: 'Abby', image: abby }, // Replace with the correct path
  { name: 'Charlie', image: '../images/path_to_charlie_image.png' }, // Replace with the correct path
  { name: 'Diana', image: '../images/path_to_diana_image.png' }, // Replace with the correct path
];

const About = () => {
  return (
    <div className="about-container">
      <img src={meet_the_team} alt="Meet the Team" style={{ width: '300px', height: 'auto' }} />
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={member.name} className="team-image" />
            <p className="team-name">{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
