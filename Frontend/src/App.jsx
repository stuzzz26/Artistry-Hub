import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductPage from './pages/ProductPage';
import ProfilePage from './pages/ProfilePage';
import LandingPage from './pages/LandingPage';
import Cart from './components/Cart';
import CheckoutPage from './pages/CheckoutPage';
import UnderMaintenancePage from './pages/UnderMaintenancePage';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Footer from './components/Footer';  // Import the Footer component



function App() {
    return (
        <AuthProvider>
            <CartProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/*" element={<NavbarWrapper />} />
                    </Routes>
                </Router>
            </CartProvider>
        </AuthProvider>
    );
}

const NavbarWrapper = () => (
    <>
        <Navbar />
        <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/under-maintenance" element={<UnderMaintenancePage />} />
        </Routes>
        <Footer /> {/* Add the Footer component at the bottom of all pages */}
    </>
);

export default App;
