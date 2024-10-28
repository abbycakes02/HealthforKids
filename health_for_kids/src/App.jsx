import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './logo.png';
import lessons from './lessons.png';
import team from './team.png';
import quiz from './quizzes.png'; // Ensure you import the quiz image
import About from './components/about';
import Lessons from './components/lessons';
import Quizzes from './components/quizzes'; // Ensure this file path is correct
import Home from './components/home';

const App = () => {
  return (
    <div className="App">
      <Router>
        <header className="header">
          <div className="logo-container">
            <Link to="/"> {/* Wrap logo in Link to navigate to home */}
              <img src={logo} alt="Logo" className="logo" />
            </Link>
          </div>
          <nav className="nav-container">
            <Link to="/quizzes">
              <img src={quiz} alt="Quizzes" className="nav-icon" />
            </Link>
            <Link to="/lessons">
              <img src={lessons} alt="Lessons" className="nav-icon" />
            </Link>
            <Link to="/about">
              <img src={team} alt="Team" className="nav-icon" />
            </Link>
          </nav>
        </header>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;

