import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Ads from './components/AdsPlacements/Ads';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <div className="main-content">
        <Ads className="left-ad" />   {/* Left Ads */}
        <Home />
        <Ads className="right-ad" /> {/* Right Ads */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
