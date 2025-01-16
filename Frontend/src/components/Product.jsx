import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Product = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="product bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
            <p className="text-xl font-bold text-blue-600 mb-4">{product.price}</p>
            <button
                onClick={() => addToCart(product)}
                className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default Product;
