import React from 'react';
import about_fitkid from '../about_fitkid.png'; // Adjust the path as necessary
import './home.css'; // Import the new CSS file
const Home = () => {
  return (
    <div className="home-container">
      <img src={about_fitkid} alt="Home" style={{ width: '300px', height: 'auto' }} />
      <div className="home-text">
      <p>In today's world, many health education methods fall short in captivating the attention of young learners,
        leaving them with limited understanding of essential concepts such as hormones, emotions, and growth. This lack of knowledge can foster confusion, anxiety, and potentially lead to unhealthy habits as children navigate their developmental journey.

FitKid is here to change that! Our mission is to create a comprehensive, age-appropriate health education platform designed specifically for children. We employ interactive and engaging methods to make learning about their bodies, emotions, and growth processes not only informative but also fun.

By breaking down complex topics into relatable, easy-to-understand concepts, we empower children to gain early awareness and cultivate healthy habits. Our platform offers a range of tools and resources that teach kids about emotional regulation, self-care, and the physical changes they will encounter.

With FitKid, children will be better prepared for a smoother transition into adulthood, reducing anxiety and confusion surrounding their developmental changes. Our approach encourages kids to take charge of their health and well-being from a young age, fostering a generation that is informed, confident, and ready to embrace the changes ahead.

Join us on this exciting journey toward a healthier future!</p>
</div>
    </div>
  );
};

export default Home;