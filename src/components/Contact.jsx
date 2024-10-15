// src/components/Contact.js
import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    render() {
        return (
            <div className="contact-container">
                <h1>Contact Us</h1>
                <p>We would love to hear from you! For inquiries, please reach out to us:</p>
                <p>Email: <a href="mailto:info@wildlife.org">info@wildlife.org</a></p>
                <p>Phone: +1 (555) 123-4567</p>
                <h2>Follow Us on Social Media</h2>
                <p>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> | 
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </p>
                <h2>Our Location</h2>
                <p>123 Conservation Lane, Nature City, CA 90210</p>
            </div>
        );
    }
}

export default Contact;
