import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './logo.png'; // Adjust the path as necessary
import quiz from './quizzes.png'; // Adjust the path as necessary
import lessons from './lessons.png'; 
import team from './team.png'; 
import about_fitkid from './about_fitkid.png'; 
import About from './components/about'; // Import the About component
import Lessons from './components/lessons'; // Import the Lessons component
import Quizzes from './components/quizzes'; // Import the Quizzes component
import Home from './components/home'; // Import the Home component
const App = () => {
  return (
    <div className="App">
      <img src={logo} alt="Logo" />
      <Router>
        <nav>
          <Link to="/quizzes">
            <img
              src={quiz}
              alt="Quizzes"
              style={{ width: '100px', height: 'auto', cursor: 'pointer' }}
            />
          </Link>
          <Link to="/lessons">
            <img
              src={lessons}
              alt="Lessons"
              style={{ width: '100px', height: 'auto', cursor: 'pointer' }}
            />
          </Link>
          <Link to="/about">
            <img
              src={team}
              alt="Team"
              style={{ width: '100px', height: 'auto', cursor: 'pointer' }}
            />
          </Link>
        </nav>

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Page */}
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;