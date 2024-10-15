import React, { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    // Function to render the current page
    function renderPage() {
        if (currentPage === 'home') {
            return <Home />;
        } else if (currentPage === 'about') {
            return <About />;
        } else if (currentPage === 'contact') {
            return <Contact />;
        }
    }

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li onClick={() => setCurrentPage('home')}>Home</li>
                        <li onClick={() => setCurrentPage('about')}>About</li>
                        <li onClick={() => setCurrentPage('contact')}>Contact Us</li>
                    </ul>
                </nav>
            </header>
            <main>
                {renderPage()}
            </main>
        </div>
    );
}

export default App;
