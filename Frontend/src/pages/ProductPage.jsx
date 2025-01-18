import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Product = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const [showModal, setShowModal] = useState(false);

    const handleAddToCart = (product) => {
        addToCart(product);
        setShowModal(true);

        // Auto-hide the modal after 3 seconds
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
    const [selectedCategory, setSelectedCategory] = useState('All');
    const products = [
        { id: 1, name: "Acrylic Painting", image: "https://i.pinimg.com/736x/a3/73/ae/a373ae5e93ea9021463721f7e8a1d84e.jpg", price: "250", category: "Paintings" },
        { id: 2, name: "Stitch Painting", image: "https://i.pinimg.com/736x/58/10/8c/58108ce93f792797a391e20c6ddf7bb2.jpg", price: "250", category: "Mini Canvas" },
        { id: 3, name: "Gift Illustration", image: "https://i.pinimg.com/736x/8d/da/d9/8ddad936d2da36abdd766976c250aa15.jpg", price: "100", category: "Mini Canvas" },
        { id: 4, name: "Shivshakti Painting", image: "https://i.pinimg.com/736x/b1/df/2e/b1df2e9a51aa81e7c415983d9447603d.jpg", price: "750", category: "Religious Art" },
        { id: 5, name: "Krishna Paintings", image: "https://i.pinimg.com/736x/6f/39/c4/6f39c4c39661d1eacf2eabb675a14ee4.jpg", price: "105", category: "Religious Art" },
        { id: 7, name: "Custom Kitchen Art", image: "https://i.pinimg.com/736x/b5/85/59/b585595ea9cd8f15aa186b8a18d91619.jpg", price: "200", category: "Custom Art" },
        { id: 8, name: "krishna theme phonecase", image: "https://i.pinimg.com/736x/5b/6e/8e/5b6e8e1b698bd6463ad00023eb143d51.jpg", price: "200", category: "Custom Art" },
        { id: 9, name: "Saraswati maa drawing", image: "https://i.pinimg.com/736x/94/ad/d4/94add4d6f3ec8e1793a122ca17214855.jpg", price: "200", category: "Religious Art" },
        { id: 10, name: "Painting", image: "https://i.pinimg.com/736x/ed/af/0f/edaf0fa30d60e47422c5659ff2cfd7d9.jpg", price: "200", category: "Paintings" },
        { id: 11, name: "Canvas", image: "https://i.pinimg.com/736x/88/85/a8/8885a8c8362067ebe43660e5fd38d8de.jpg", price: "200", category: "Mini Canvas" },
        { id: 12, name: "Sculpture Art", image: "https://i.pinimg.com/736x/88/85/a8/8885a8c8362067ebe43660e5fd38d8de.jpg", price: "200", category: "Sculpture" },
        { id: 13, name: "Sculpture Art", image: "https://i.pinimg.com/736x/cb/0a/d7/cb0ad7433a94770882514c0df08c95ef.jpg", price: "200", category: "Sculpture" },
        { id: 14, name: "Sculpture Art", image: "https://i.pinimg.com/736x/8d/44/28/8d44285a642048159cbf9a56148f99a5.jpg", price: "200", category: "Sculpture" },
        { id: 15, name: "Sculpture Art", image: "https://i.pinimg.com/736x/9f/7a/2f/9f7a2fb8ae07c6ce1f7a8da2c56c3002.jpg", price: "200", category: "Sculpture" },
        { id: 16, name: "Sculpture Art", image: "https://i.pinimg.com/736x/06/71/81/0671819f384d6c2e27513f2f641e8261.jpg", price: "200", category: "Sculpture" },
        { id: 17, name: "Sculpture Art", image: "https://i.pinimg.com/736x/77/3e/52/773e52e39a05faec277822b8cbf98f49.jpg", price: "200", category: "Sculpture" },
        { id: 18, name: "Sketch", image: "https://i.pinimg.com/736x/e7/56/4c/e7564cf308ade5629272d1c1147d2d09.jpg", price: "200", category: "Sketch" },
        { id: 19, name: "Sketch", image: "https://i.pinimg.com/736x/96/b3/0c/96b30c9a6a83ab6e44aab82ed07b7951.jpg", price: "200", category: "Sketch" },
        { id: 20, name: "Sketch", image: "https://i.pinimg.com/736x/11/bf/ae/11bfae80251c10f8823ab8738d52a6f1.jpg", price: "200", category: "Sketch" },
        { id: 21, name: "Sketch", image: "https://i.pinimg.com/736x/0c/25/d5/0c25d5bfebdc9947c3e68ec4db59b127.jpg", price: "200", category: "Sketch" },
        { id: 22, name: "Sketch", image: "https://i.pinimg.com/736x/96/b3/0c/96b30c9a6a83ab6e44aab82ed07b7951.jpg", price: "200", category: "Sketch" },
        { id: 23, name: "Custom Art", image: "https://i.pinimg.com/736x/37/1e/04/371e040d1f354030c4db0a2e626175c9.jpg", price: "200", category: "Custom Art" },
        { id: 24, name: "Custom  Art", image: "https://i.pinimg.com/736x/68/49/16/68491636d1a18e53544e329eda6f02a0.jpg", price: "200", category: "Custom Art" },
        { id: 25, name: "Custom Art", image: "https://i.pinimg.com/736x/7d/0f/23/7d0f23e61da500dadbb3d24d971084ae.jpg", price: "200", category: "Custom Art" },
        { id: 26, name: "Custom Art", image: "https://i.pinimg.com/736x/ec/cf/cc/eccfccf321baad9ea35ae28e7b76928a.jpg", price: "200", category: "Custom Art" },
        { id: 27, name: "Custom Art", image: "https://i.pinimg.com/736x/6e/6d/42/6e6d421a61b67bb5bb67cfea3b4f4fe9.jpg", price: "200", category: "Custom Art" },
        { id: 28, name: "Custom Art", image: "https://i.pinimg.com/736x/fb/be/55/fbbe55dde48fb6b6513ca29757d958ac.jpg", price: "200", category: "Custom Art" },
        { id: 29, name: "Painting", image: "https://i.pinimg.com/736x/8d/ca/de/8dcade54a409a76204370e48cc0a583c.jpg", price: "250", category: "Paintings" },
        { id: 30, name: "Painting", image: "https://i.pinimg.com/736x/7e/12/55/7e125544cf0f844f744357156176e0b6.jpg", price: "250", category: "Paintings" },
        { id: 31, name: "Painting", image: "https://i.pinimg.com/736x/94/f1/d3/94f1d3587704e9ef15ba930ab168f218.jpg", price: "250", category: "Paintings" },
        { id: 32, name: "Painting", image: "https://i.pinimg.com/736x/92/6d/54/926d5472069dfcf2e9121d3c86325ce8.jpg", price: "250", category: "Paintings" },
        { id: 33, name: "Painting", image: "https://i.pinimg.com/736x/6c/64/b9/6c64b9c628657ff8767980b890880b4c.jpg", price: "250", category: "Paintings" },
        { id: 34, name: "Painting", image: "https://i.pinimg.com/736x/08/ea/8d/08ea8daa2ff7bd472cc9dcceca45fcd5.jpg", price: "250", category: "Paintings" },
        { id: 35, name: "Painting", image: "https://i.pinimg.com/736x/79/42/7f/79427f3842f044b315e063fde1e677bf.jpg", price: "250", category: "Paintings" },
        { id: 36, name: "Mini Canvas", image: "https://i.pinimg.com/736x/2f/7b/84/2f7b84780a3852ec196a81e5999044c5.jpg", price: "250", category: "Mini Canvas" },
        { id: 37, name: "Mini Canvas", image: "https://i.pinimg.com/736x/73/a8/d6/73a8d6e3c7d5ccd620d2cd3e905e1843.jpg", price: "250", category: "Mini Canvas" },
        { id: 38, name: "Mini Canvas", image: "https://i.pinimg.com/736x/88/0e/2f/880e2f0403ff53d6515a398bef6ad5fc.jpg", price: "250", category: "Mini Canvas" },
        { id: 39, name: "Mini Canvas", image: "https://i.pinimg.com/736x/0c/83/96/0c8396f95f410c2b4ed3af6954c35619.jpg" ,price: "250", category: "Mini Canvas" },
        { id: 40, name: "Mini Canvas", image: "https://i.pinimg.com/736x/3a/33/72/3a3372bd67a60b05c79ba4dfa798170b.jpg", price: "250", category: "Mini Canvas" },
        { id: 41, name: "Religious Art", image: "https://i.pinimg.com/736x/b7/9a/b3/b79ab3ad5d289c2d5607f01cc4eb009a.jpg", price: "105", category: "Religious Art" },
        { id: 42, name: "Religious Art", image: "https://i.pinimg.com/736x/8b/46/93/8b469330fa4798fcda69cd3b1b781ada.jpg ", price: "105", category: "Religious Art" },
        { id: 43, name: "Religious Art", image: "https://i.pinimg.com/736x/59/22/e7/5922e77d29e9ca04c3d38ad4d73e54b1.jpg", price: "105", category: "Religious Art" },
        { id: 44, name: "Religious Art", image: "https://i.pinimg.com/736x/d5/24/16/d52416b7f5ee86db6878b8b6b91ad93f.jpg", price: "105", category: "Religious Art" },
        { id: 45, name: "Religious Art", image: "https://i.pinimg.com/736x/c9/8b/50/c98b507bad882fb2684a3cc1ae23e5c0.jpg", price: "105", category: "Religious Art" },
        { id: 46, name: "Abstract Art", image: "https://i.pinimg.com/736x/be/f6/27/bef627ba3335fb4962f9fc622b1051eb.jpg", price: "105", category: "Abstract Art" },
        { id: 47, name: "Abstract Art", image: "https://i.pinimg.com/736x/48/b6/68/48b668cbd2de8c0c37ffb599317f3a94.jpg", price: "105", category: "Abstract Art" },
        { id: 48, name: "Abstract Art", image: "https://i.pinimg.com/736x/fd/15/71/fd1571a50eb8592dcee7cc97c87a9ac3.jpg", price: "105", category: "Abstract Art" },
        { id: 49, name: "Abstract Art", image: "https://i.pinimg.com/736x/40/2b/54/402b54d686af63247bfac22f24b03a1c.jpg", price: "105", category: "Abstract Art" },
        { id: 50, name: "Abstract Art", image: "https://i.pinimg.com/736x/fe/2d/40/fe2d40b545bcb9bafce8f5db9c168da2.jpg", price: "105", category: "Abstract Art" },
        { id: 51, name: "Abstract Art", image: "https://i.pinimg.com/736x/62/f9/93/62f993fa796d073abb566a8e052f72eb.jpg", price: "105", category: "Abstract Art" },
        { id: 52, name: "Abstract Art", image: "https://i.pinimg.com/736x/d8/e9/79/d8e9798a72cba33b326a3ddfa7823b04.jpg", price: "105", category: "Abstract Art" },
        { id: 53, name: "Abstract Art", image: "https://i.pinimg.com/736x/d8/0a/68/d80a68d77c03563de4dfaf3a54b73850.jpg", price: "105", category: "Abstract Art" },
    
        { id: 54, name: "Mandala", image: "https://i.pinimg.com/736x/a8/73/3c/a8733c38a4d4021c86fc83ead4314142.jpg", price: "105", category: "Mandala" },
        { id: 55, name: "Mandala", image: "https://i.pinimg.com/736x/eb/58/f2/eb58f2c71e0fe24197e576fddc7d70c2.jpg", price: "105", category: "Mandala" },
        { id: 56, name: "Mandala", image: "https://i.pinimg.com/736x/ca/31/5e/ca315eb176daf5ca0f9dc2a4c35269b8.jpg", price: "105", category: "Mandala" },
        { id: 57, name: "Mandala", image: "https://i.pinimg.com/736x/c9/b5/12/c9b5125b8a44a61f46056c7b08a2b5f5.jpg", price: "105", category: "Mandala" },
        { id: 58, name: "Mandala", image: "https://i.pinimg.com/736x/3e/17/2f/3e172f9f22bc459a886295cd72e96a25.jpg", price: "105", category: "Mandala" },
        { id: 59, name: "Mandala", image: "https://i.pinimg.com/736x/b1/8e/fe/b18efec43b1d2a3f65142295e7d02a3f.jpg", price: "105", category: "Mandala" },
        { id: 60, name: "Mandala", image: "https://i.pinimg.com/736x/fe/b3/a9/feb3a93a7e929ad427c915d2486f5376.jpg", price: "105", category: "Mandala" },
        { id: 61, name: "Mandala", image: "https://i.pinimg.com/736x/fe/b3/a9/feb3a93a7e929ad427c915d2486f5376.jpg", price: "105", category: "Mandala" },
       
    
    
    
    
    
    
    
    
    
    
    ];

    const categories = ['All', ...new Set(products.map((product) => product.category))];

    const filteredProducts =
        selectedCategory === 'All'
            ? products
            : products.filter((product) => product.category === selectedCategory);

    return (
        <div className="product-list-container p-6">
            {/* Category Selector */}
            <div className="categories mb-6 flex flex-wrap gap-4">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-lg ${
                            selectedCategory === category
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-200 text-gray-800'
                        } hover:bg-blue-700 hover:text-white transition duration-300`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Product List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
