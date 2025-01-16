import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('/api/products');
            setProducts(response.data);
        };

        fetchProducts();
    }, []);

    return (
        <div className="product-list py-6 px-4 bg-gray-100 min-h-screen">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <Product key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
