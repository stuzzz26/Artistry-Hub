import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation for route checking
import './Footer.css'; // Import CSS for styling

const Footer = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false); // State to show popup
    const location = useLocation(); // Get the current route location

    // Check if we are on the login or register page
    if (location.pathname === '/login' || location.pathname === '/register') {
        return null; // Don't render the footer on login or register pages
    }

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission (could be sending to a backend API)
        console.log(`Review submitted: ${message} from ${email}`);
        
        // Show the "Thank You" popup
        setShowPopup(true);
        
        // Clear the form after submission
        setEmail('');
        setMessage('');
        
        // Hide the popup after 3 seconds (or customize the duration as needed)
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    };

    return (
        <footer className="footer-container">
            <div className="footer-content">
                {/* Logo Section */}
                <div className="footer-logo">
                    <h2>Artistry Hub</h2>
                    <p>Your platform for artistic expression</p>
                </div>

                {/* Email Review Section */}
                <div className="footer-review">
                    <h3>Share Your Review</h3>
                    <form onSubmit={handleReviewSubmit} className="review-form">
                        <input
                            type="email"
                            placeholder="Your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <textarea
                            placeholder="Your review"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                        <button type="submit">Submit Review</button>
                    </form>
                </div>

                {/* Social Media Section */}
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook fa-2x"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram fa-2x"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter fa-2x"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Thank You Popup */}
            {showPopup && (
                <div className="popup">
                    <p>Thank you for sharing your review!</p>
                </div>
            )}

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>&copy; 2025 Artistry Hub. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
