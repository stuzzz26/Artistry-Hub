import React from 'react';
import { Link } from 'react-router-dom';

const UnderMaintenancePage = () => {
    return (
        <div className="under-maintenance-page min-h-screen bg-gray-100 flex flex-col justify-center items-center p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Under Maintenance</h2>
            <p className="text-lg text-gray-600 text-center mb-6">Sorry, this page is currently under maintenance. Please check back later.</p>
            <div className="text-center">
                <span className="text-gray-500">Thank you for your patience.</span>
            </div>
            <div className="mt-6">
                <Link 
                    to="/home"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                >
                    Return to Home
                </Link>
            </div>
        </div>
    );
};

export default UnderMaintenancePage;
