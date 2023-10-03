import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home/Homepage';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import FAQ from './pages/FAQ';
import Reptiles from './pages/Reptiles';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/Reptiles" element={<Reptiles />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
