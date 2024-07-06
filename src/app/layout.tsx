import React from 'react';
import './globals.css';

export const metadata = {
    title: 'Oleg Shchendrigin',
    description: 'Graphic Designer Portfolio',
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html lang="en">
        <body>
        <div>
            <header>
                <img src="/ava_wb.jpg" className="avatar" alt="Oleg Shchendrigin" />
                <h1>Oleg Shchendrigin</h1>
            </header>
            <nav>
                <a href="/#about">About me</a>
                <a href="/#portfolio">My works</a>
                <a href="/#contact">Contacts</a>
                <a href="/comic">Comics</a>
            </nav>
            <main>{children}</main>
        </div>
        </body>
        </html>
    );
};

export default Layout;
