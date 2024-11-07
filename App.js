import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Appbar from './components/AppBar';
import Dashboard from './components/DashBoard';
import About from './components/About';
import Agreement from './components/Agreement';
import PrivacyPolicy from './components/PrivacyPolicy';
import RegisterParents from './components/RegisterParents';

function App() {
  const [currentPage, setCurrentPage] = useState('');

  return (
    <Router>
      <Appbar setCurrentPage={setCurrentPage} />
      <Routes>
        <Route path="/" element={<Dashboard currentPage={currentPage} />} />
        <Route path="/sign-in" element={<RegisterParents/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/agreement" element={<Agreement />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/courses/early-development" element={<div>Early Development Program</div>} />
        <Route path="/courses/school-prep" element={<div>School Prep Program</div>} />
        <Route path="/courses/online-school-prep" element={<div>Online School Prep Program</div>} />
        <Route path="/courses/english" element={<div>English Program</div>} />
      </Routes>
    </Router>
  );
}

export default App;
