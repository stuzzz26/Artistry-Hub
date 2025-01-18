import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import paintbrushLogo from '../assets/images/paintbrush.png'; // Ensure the correct path for your mini logo

const Navbar = () => {
    const location = useLocation();

    // Check if the current route is login or register
    if (location.pathname === '/login' || location.pathname === '/register') {
        return null; // Don't render Navbar on these pages
    }

    return (
        <nav className="navbar p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Name "Artistry Hub" with mini logo on the left side */}
                <div className="logo flex items-center space-x-3">
                    {/* Link for Paintbrush logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src={paintbrushLogo}
                            alt="Paintbrush Logo"
                            className="h-10 w-10 rounded-full" // Circular shape with specific size
                        />
                    </Link>
                    {/* Artistry Hub Name */}
                    <Link to="/" className="text-white text-3xl font-bold hover:text-blue-500">
                        Artistry Hub
                    </Link>
                </div>
                {/* Links on the right side */}
                <div className="flex space-x-6 items-center">
                    <Link to="/home" className="text-white hover:text-blue-500">Home</Link>
                    <Link to="/products" className="text-white hover:text-blue-500">Products</Link>
                    <Link to="/cart" className="text-white hover:text-blue-500">Cart</Link>
                    <Link to="/profile" className="text-white hover:text-blue-500">Profile</Link>
                </div>
            </div>
            <style jsx>{`
                .navbar {
                    background-image: url('https://t4.ftcdn.net/jpg/09/58/31/15/360_F_958311579_uoxpw1n5GvYMcyvcqAnGX8XS9AoOwz9H.jpg'); /* Stylish background */
                    background-size: cover;
                    background-position: center;
                    position: relative;
                    height: 80px; /* Make the navbar smaller */
                }

                .navbar::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.6); /* Dark overlay for contrast */
                    backdrop-filter: blur(6px); /* Adds blur effect */
                    z-index: 0;
                }

                .navbar .container {
                    position: relative;
                    z-index: 1; /* Content stays above overlay */
                }

                .text-white {
                    color: white;
                }

                .text-blue-500:hover {
                    color: #3b82f6; /* Hover color */
                }

                /* Responsive styling */
                @media (max-width: 768px) {
                    .navbar .container {
                        flex-direction: column; /* Stack the logo and links on smaller screens */
                    }

                    .logo {
                        font-size: 2.5rem; /* Adjust font size for mobile */
                    }

                    .logo img {
                        height: 30px; /* Smaller paintbrush logo on mobile */
                    }

                    .flex {
                        flex-direction: column;
                        gap: 12px;
                        align-items: center;
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
