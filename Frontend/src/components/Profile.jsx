import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { user, logout } = useContext(AuthContext);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            // Redirect to login if user is not authenticated
            navigate('/login');
            return;
        }

        const fetchProfile = async () => {
            try {
                const response = await axios.get('/api/users/profile', {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                });
                setProfile(response.data);
            } catch (err) {
                setError('Failed to fetch profile. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [user, navigate]);

    const handleLogout = () => {
        logout();
        navigate('/login'); // Redirect to login page after logout
    };

    if (loading) {
        return <div className="text-center text-lg text-gray-600">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-lg text-red-600">{error}</div>;
    }

    return (
        <div 
            className="profile min-h-screen flex justify-center items-center py-8" 
            style={{
                backgroundImage: "url('https://i.pinimg.com/736x/bb/37/27/bb3727a39d7178acd5af67ee7b6887f4.jpg')", 
                backgroundSize: 'cover', 
                backgroundPosition: 'center'
            }}
        >
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Your Profile</h2>
                <div className="profile-info mb-6">
                    <p className="text-lg text-gray-700 mb-4"><strong>Username:</strong> {profile.username}</p>
                    <p className="text-lg text-gray-700 mb-4"><strong>Email:</strong> {profile.email}</p>
                </div>
                <div className="profile-actions">
                    <button
                        onClick={handleLogout}
                        className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
