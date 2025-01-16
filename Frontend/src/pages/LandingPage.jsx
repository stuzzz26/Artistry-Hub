import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="landing-page min-h-screen bg-gray-100 flex flex-col justify-center items-center p-6 relative">
            {/* Background Image */}
            <img 
                src="https://i.pinimg.com/736x/49/f3/f5/49f3f50e8db0dbef79040b18f33d7cb4.jpg"  // Replace with your desired background image URL
                alt="Art Gallery Background"
                className="absolute inset-0 object-cover w-full h-full opacity-30"
            />

            <div className="relative z-10 text-center">
                <h1 className="text-5xl font-extrabold text-gray-800 mb-8">
                    Welcome to Artistry Hub
                </h1>
                <p className="text-lg text-gray-600 mb-8">Explore the world of creative art and stunning artworks.</p>
                <div className="landing-options flex space-x-4 justify-center">
                    <Link 
                        to="/login" 
                        className="landing-button px-8 py-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-200 transform hover:scale-105"
                    >
                        Login
                    </Link>
                    <Link 
                        to="/register" 
                        className="landing-button px-8 py-4 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition duration-200 transform hover:scale-105"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
