import React, { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    // Utility function to parse price strings and convert to numbers
    const parsePrice = (price) => {
        const numericPrice = price.replace(/[^0-9.]/g, ''); // Remove non-numeric characters
        return parseFloat(numericPrice) || 0; // Fallback to 0 if parsing fails
    };

    useEffect(() => {
        console.log('Cart Items:', cartItems);
        cartItems.forEach(item => {
            console.log(`Price: ${item.price}, Parsed Price: ${parsePrice(item.price)}`);
        });
    }, [cartItems]);

    // Calculate total amount and total items
    const totalAmount = cartItems.reduce(
        (total, item) => total + parsePrice(item.price) * item.quantity,
        0
    );
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    const handleProceedToPayment = () => {
        navigate('/under-maintenance'); // Navigate to the "Under Maintenance" page
    };

    return (
        <div className="checkout-page min-h-screen bg-cover bg-center flex justify-center items-center p-6"
            style={{
                backgroundImage: 'url("https://img.pikbest.com/ai/illus_our/20230426/f97c679e2399889df47384b62a61106e.jpg!w700wp")', // Background image URL
                backgroundSize: 'cover',
            }}
        >
            <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg w-full max-w-lg"
                style={{
                    backdropFilter: 'blur(10px)', // Blur effect behind the transparent box
                }}
            >
                <div className="mb-6">
                    <p className="text-lg text-gray-700 mb-2">
                        <strong>Total Items:</strong> {totalItems}
                    </p>
                    <p className="text-xl font-bold text-blue-600">
                        <strong>Total Amount:</strong> Rs. {totalAmount.toFixed(2)}
                    </p>
                </div>
                <button
                    onClick={handleProceedToPayment}
                    className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Proceed to Payment
                </button>
            </div>
        </div>
    );
};

export default CheckoutPage;
