import React from 'react';
import about_fitkid from '../about_fitkid.png'; // Adjust the path as necessary

const Home = () => {
  return (
    <div className="home-section">
      <img src={about_fitkid} alt="Home" style={{ width: '300px', height: 'auto' }} />
      <h3>Welcome to Health for Kids!</h3>
      <p>Your go-to resource for fun quizzes and engaging lessons about health.</p>
    </div>
  );
};

export default Home;