import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Quiz from './components/Quiz';
import QuizResult from './components/QuizResult';
import { Button } from '@mui/material';

function App() {
  return (
    <Router>
      <div className='items'>
        <h1>Quiz App</h1>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/result' element={<QuizResult />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <button className='btn-start'><Link to='/quiz'>
        Get Started!
      </Link></button>
    </div>
  );
};

export default App;
