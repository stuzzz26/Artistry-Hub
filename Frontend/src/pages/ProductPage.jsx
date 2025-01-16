import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Product = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const [showModal, setShowModal] = useState(false);

    const handleAddToCart = (product) => {
        addToCart(product);
        setShowModal(true);

        // Auto-hide the modal after 3 seconds (optional)
        setTimeout(() => {
            setShowModal(false);
        }, 3000);
    };

    return (
        <div className="product bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
            <p className="text-xl font-bold text-blue-600 mb-4">{product.price}</p>
            <button
                onClick={() => handleAddToCart(product)}
                className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
                Add to Cart
            </button>

            {/* Modal for Add to Cart confirmation */}
            {showModal && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold text-green-600">Item Added to Cart!</h3>
                        <button
                            onClick={() => setShowModal(false)}
                            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

const ProductList = () => {
    const products = [
        {
            id: 1,
            name: "ABSTRACT ACRYLIC PAINTING ON CANVAS",
            image: "https://i.pinimg.com/736x/a3/73/ae/a373ae5e93ea9021463721f7e8a1d84e.jpg",
            price: "250",
        },
        {
            id: 2,
            name: "Stitch painting",
            image: "https://i.pinimg.com/736x/58/10/8c/58108ce93f792797a391e20c6ddf7bb2.jpg",
            price: "250",
        },
        {
            id: 3,
            name: "Gift customised illustration",
            image: "https://i.pinimg.com/736x/8d/da/d9/8ddad936d2da36abdd766976c250aa15.jpg",
            price: "100",
        },
        {
            id: 4,
            name: "Shivshakti Painting",
            image: "https://i.pinimg.com/736x/b1/df/2e/b1df2e9a51aa81e7c415983d9447603d.jpg",
            price: "750",
        },
        {
            id: 5,
            name: "Krishna Paintings",
            image: "https://i.pinimg.com/736x/6f/39/c4/6f39c4c39661d1eacf2eabb675a14ee4.jpg",
            price: "105",
        },
        {
            id: 6,
            name: "Krishna Paintings",
            image: "https://i.pinimg.com/736x/5a/11/c8/5a11c8d0dca6b185e04e3e53796cdbaa.jpg",
            price: "120",
        },
        {
            id: 7,
            name: "Customised Kitchen",
            image: "https://i.pinimg.com/736x/b5/85/59/b585595ea9cd8f15aa186b8a18d91619.jpg",
            price: "200",
        },
        {
            id: 8,
            name: "krishna theme phonecase",
            image: "https://i.pinimg.com/736x/5b/6e/8e/5b6e8e1b698bd6463ad00023eb143d51.jpg",
            price: "200",
        },
        {
            id: 9,
            name: "Saraswati maa drawing",
            image: "https://i.pinimg.com/736x/94/ad/d4/94add4d6f3ec8e1793a122ca17214855.jpg",
            price: "650",
        },
        {
            id: 10,
            name: "Painting",
            image: "https://i.pinimg.com/736x/ed/af/0f/edaf0fa30d60e47422c5659ff2cfd7d9.jpg",
            price: "500",
        },
        {
            id: 11,
            name: "Art",
            image: "https://i.pinimg.com/736x/3b/41/b4/3b41b412a3055163113807edab49895d.jpg",
            price: "500",
        },
        {
            id: 12,
            name: "Canvas",
            image: "https://i.pinimg.com/736x/88/85/a8/8885a8c8362067ebe43660e5fd38d8de.jpg ",
            price: "800",
        },
    ];

    return (
        <div className="product-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
