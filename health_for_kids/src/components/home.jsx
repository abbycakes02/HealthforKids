import React from 'react';
import about_fitkid from '../about_fitkid.png';
import kid_1 from '../kid_1.png';
import kid_2 from '../kid_2.png';
import kid_3 from '../kid_3.png';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Top Center Image */}
      <img src={about_fitkid} alt="About FitKid" className="home-image-top" />

      {/* First Section: Image on the Right */}
      <div className="home-section right-image">
        <div className="home-text">
        <p>In today's world, many health education methods fall short in captivating the attention of young learners.
          As a result, crucial topics that shape their understanding of personal health 
          and well-being are often glossed over or presented in ways that are difficult for them to grasp. 
          This lack of knowledge can foster confusion and anxiety, leaving children ill-equipped to manage the emotional 
          and physical changes they experience during crucial developmental stages. It is essential to
           reimagine health education to create an environment where children 
           feel empowered and informed.</p>
        </div>
        <img src={kid_1} alt="About FitKid" className="home-image" />
      </div>

      {/* Second Section: Image on the Left */}
      <div className="home-section left-image">
        <img src={kid_2} alt="Kid learning" className="home-image" />
        <div className="home-text">
          <p> FitKid is here to change that! Our mission is to create a comprehensive, age-appropriate health education platform designed specifically for children. We understand that engaging young learners requires innovative approaches that resonate with their unique experiences. By using interactive and fun methods, we make learning about their bodies, emotions, and growth processes both informative and enjoyable. Our platform includes games, videos, and hands-on activities that promote active participation, ensuring that children grasp essential concepts. By empowering kids with knowledge about health and well-being, we help them build a strong foundation for making informed choices throughout their lives.



</p>
        </div>
      </div>

      {/* Third Section: Image on the Right */}
      <div className="home-section right-image">
        <div className="home-text">
          <p>By simplifying complex topics into relatable, easy-to-understand concepts, we empower children to develop early awareness and foster healthy habits. Our platform provides various interactive tools and resources that teach kids about emotional regulation, self-care, and the physical changes they will experience as they grow. By using engaging content and real-life examples, we aim to build children's confidence in navigating their developmental journey. This foundation will enable them to make informed choices about their health and well-being, ultimately supporting a lifelong commitment to a healthy lifestyle.</p>
        </div>
        <img src={kid_3} alt="FitKid tools" className="home-image" />
      </div>
    </div>
  );
};

export default Home;
