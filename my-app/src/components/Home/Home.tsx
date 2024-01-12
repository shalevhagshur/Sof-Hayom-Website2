// Home.tsx
import React from 'react';
import './Home.css';
import Ads from './../AdsPlacements/Ads';
import Features from './../Features/Features';
import Gallery from './../Gallery/Gallery';
import QuestionsAndAnswers from './../QuestionsAndAnswers/QuestionsAndAnswers.';
import WorkTheApp from './../WorkTheApp/WorkTheApp';
import Contact from './../Contact/Conatct';

const Home: React.FC = () => {
    return (
        <div className="home-with-ads">
            {/* <Ads className="ad-left" /> */}
            <div className="home-container">
                <h1>Welcome to Our Website</h1>
                <p>This is the home page content.</p>
                <Features />
                <Gallery />
                <QuestionsAndAnswers />
                <WorkTheApp />
                <Contact />
            </div>
            {/* <Ads className="ad-right" /> */}
        </div>
    );
};

export default Home;
