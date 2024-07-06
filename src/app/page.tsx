import React from 'react';
import AboutComponent from '../AboutComponent';
import PortfolioComponent from '../PortfolioComponent';
import ContactComponent from '../ContactComponent';

const HomePage: React.FC = () => {
    return (
        <>
            <AboutComponent />
            <PortfolioComponent />
            <ContactComponent />
        </>
    );
};

export default HomePage;
