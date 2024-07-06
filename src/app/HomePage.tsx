import React from 'react';
import HeaderComponent from '../HeaderComponent';
import NavComponent from '../NavComponent';
import AboutComponent from '../AboutComponent';
import PortfolioComponent from '../PortfolioComponent';
import ContactComponent from '../ContactComponent';

const MainPage: React.FC = () => {
    return (
        <>
            <HeaderComponent />
            <NavComponent />
            <main>
                <AboutComponent />
                <PortfolioComponent />
                <ContactComponent />
            </main>
        </>
    );
};

export default MainPage;
