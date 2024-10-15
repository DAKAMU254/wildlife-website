// src/components/About.js
import React from 'react';
import './About.css';

class About extends React.Component {
    render() {
        return (
            <div className="about-container">
                <h1>About Us</h1>
                <p>We are a dedicated organization committed to wildlife conservation and education. Our mission is to create a world where wildlife thrives in harmony with humanity.</p>
                <h2>Our History</h2>
                <p>Founded in 2005, we have been at the forefront of wildlife conservation efforts worldwide. Our programs focus on habitat preservation, species recovery, and community engagement.</p>
                <h2>Our Work</h2>
                <ul>
                    <li>Conducting research to track wildlife health</li>
                    <li>Developing protected areas for threatened species</li>
                    <li>Creating educational resources for schools and communities</li>
                    <li>Partnering with local governments and NGOs to enforce wildlife laws</li>
                </ul>
            </div>
        );
    }
}

export default About;
