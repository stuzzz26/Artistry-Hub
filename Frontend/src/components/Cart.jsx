import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleProceedToCheckout = () => {
        navigate('/checkout');
    };

    const parsePrice = (price) => {
        if (typeof price === 'string') {
            return parseFloat(price.replace(/[^0-9.]/g, '')) || 0;
        }
        return parseFloat(price) || 0;
    };

    const totalPrice = cartItems.reduce(
        (total, item) => total + parsePrice(item.price) * item.quantity,
        0
    );

    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="cart max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

            {cartItems.length === 0 ? (
                <p className="text-lg text-gray-600">Your cart is empty. Start shopping!</p>
            ) : (
                <>
                    <ul className="space-y-4">
                        {cartItems.map((item) => (
                            <li
                                key={item.id}
                                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg shadow-sm"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-24 h-24 object-cover rounded-md"
                                />
                                <div className="flex-1 ml-4">
                                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                                    <p className="text-lg text-gray-600">Price: Rs. {parsePrice(item.price)}</p>
                                    <p className="text-lg text-gray-600">
                                        Quantity: {item.quantity}
                                    </p>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold text-gray-800">
                                Total Items: {totalQuantity}
                            </h3>
                            <h3 className="text-xl font-bold text-gray-800">
                                Total Price: Rs. {totalPrice.toFixed(2)}
                            </h3>
                        </div>
                        <button
                            onClick={handleProceedToCheckout}
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 w-full"
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
