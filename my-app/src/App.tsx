// App.tsx
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Ads from './components/AdsPlacements/Ads';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import './App.css'; // Make sure to create this CSS file

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <div className="main-content">
        <Ads className="left-ad" />
        <Home />
        <Ads className="right-ad" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
