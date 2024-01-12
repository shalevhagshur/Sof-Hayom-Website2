// AdsPlacements/Ads.tsx
import React from 'react';
import ad1Image from '../../assets/img/ad1.png'; 
import ad2Image from '../../assets/img/ad2.png';
import './Ads.css';

type AdsProps = {
    className?: string;
};

const Ads: React.FC<AdsProps> = ({ className }) => {
    return (
        <div className={`ads-container ${className}`}>
            <div className="ad ad-left">
                <img src={ad1Image} alt="Advertisement 1" className="ad-image" />
            </div>
            <div className="ad ad-right">
                <img src={ad2Image} alt="Advertisement 2" className="ad-image" />
            </div>
        </div>
    );
};

export default Ads;
