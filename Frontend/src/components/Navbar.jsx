import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation(); // This hook helps you get the current route

    // Check if the current route is login or register
    if (location.pathname === '/login' || location.pathname === '/register') {
        return null; // Don't render Navbar on these pages
    }

    return (
        <nav className="navbar bg-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-black font-semibold text-xl">
                    <Link to="/home" className="hover:text-blue-500 mr-6">Home</Link>
                </div>
                <div className="flex space-x-6">
                    <Link to="/products" className="text-black hover:text-blue-500">Products</Link>
                    <Link to="/cart" className="text-black hover:text-blue-500">Cart</Link>
                    <Link to="/profile" className="text-black hover:text-blue-500">Profile</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
