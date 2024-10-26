import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './logo.png'; // Adjust the path as necessary
import quiz from './quiz.png'; // Adjust the path as necessary
const App = () => {
  return (
    <div className="App">
    <img src={logo} alt="Logo" />
    <Router>
        {/* Navigation Buttons */}
        <nav>
        <Link to="/quizzes">
        <img
              src="quizzes.png"  // Replace with your PNG URL
              alt="Quizzes"
              style={{ width: '100px', height: 'auto', cursor: 'pointer' }}
            />
          </Link>
          <Link to="/lessons"><button>Lessons</button></Link>
          <Link to="/about"><button>About Us</button></Link>
        </nav>

        {/* Route Definitions */}
        <Routes>
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </Router>
    </div>
  );
};

// Placeholder Components for Pages
const Quizzes = () => <h2>Quizzes Page</h2>;
const Lessons = () => <h2>Lessons Page</h2>;
const About = () => <h2>About Us Page</h2>;

export default App
