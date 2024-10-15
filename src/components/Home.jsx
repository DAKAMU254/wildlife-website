// src/components/Home.js
import React from 'react';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                <h1>Welcome to the Wildlife Conservation Site</h1>
                <p>Join us in our mission to protect nature's beauty and preserve wildlife for generations to come.</p>
                <h2>Why Conservation Matters</h2>
                <p>Wildlife conservation is essential for maintaining the balance of nature. By protecting endangered species and their habitats, we ensure a healthy environment for all living beings.</p>
                <h2>Our Goals</h2>
                <ul>
                    <li>Protect at-risk species from extinction</li>
                    <li>Preserve and restore natural habitats</li>
                    <li>Promote public awareness about wildlife conservation</li>
                    <li>Support sustainable practices in wildlife tourism</li>
                </ul>
            </div>
        );
    }
}

export default Home;
