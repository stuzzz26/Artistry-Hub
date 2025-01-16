import React from 'react';

const Home = () => {
    return (
        <div
            className="home min-h-screen bg-gray-100 flex items-center justify-center p-6"
            style={{
                backgroundImage: "url('https://i.pinimg.com/736x/77/76/5b/77765b57263ea32f4d0740940f9f3a8c.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="text-center max-w-3xl bg-white bg-opacity-90 p-8 rounded-lg shadow-2xl transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                <h1 className="text-4xl font-bold text-gray-800 mb-6 hover:text-blue-600 transition-colors duration-300">
                    Welcome to Our Artistry Hub!
                </h1>
                <p className="text-lg text-gray-700 mb-4 hover:text-gray-800 transition-colors duration-300">
                    We are thrilled to present a curated collection of stunning artworks from talented artists around the world. Our Artistry Hub offers a space where art lovers, collectors, and creatives can discover, appreciate, and purchase a wide range of original art pieces.
                </p>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition-colors duration-300">
                    Explore Unique Artworks
                </h2>
                <p className="text-lg text-gray-700 mb-4 hover:text-gray-800 transition-colors duration-300">
                    Our gallery features an eclectic mix of styles, mediums, and genres, including painting, photography, sculpture, digital art, and more. Whether you're looking for a classic masterpiece, a contemporary piece, or something completely avant-garde, you’ll find it here. Our collection is constantly updated with new works, so there’s always something fresh to discover.
                </p>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition-colors duration-300">
                    Support Independent Artists
                </h2>
                <p className="text-lg text-gray-700 mb-4 hover:text-gray-800 transition-colors duration-300">
                    By purchasing art from our gallery, you are directly supporting independent artists who pour their passion and creativity into every piece. We believe in empowering artists by providing them with a global platform to showcase their work and connect with a wider audience. Each artwork comes with a story, and we are proud to share those stories with you.
                </p>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition-colors duration-300">
                    Easy and Secure Shopping Experience
                </h2>
                <p className="text-lg text-gray-700 mb-4 hover:text-gray-800 transition-colors duration-300">
                    Our platform is designed to provide a seamless shopping experience. With just a few clicks, you can browse, save, and purchase your favorite pieces. Our secure checkout process ensures that your transactions are safe, and we offer various payment options for your convenience.
                </p>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition-colors duration-300">
                    Discover Art That Speaks to You
                </h2>
                <p className="text-lg text-gray-700 mb-4 hover:text-gray-800 transition-colors duration-300">
                    Art has the power to inspire, challenge, and transform. Whether you're decorating your home, office, or simply looking to expand your collection, our gallery offers pieces that reflect a diverse range of expressions and emotions. Find art that resonates with you and adds a personal touch to your space.
                </p>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition-colors duration-300">
                    Stay Connected and Inspired
                </h2>
                <p className="text-lg text-gray-700 mb-4 hover:text-gray-800 transition-colors duration-300">
                    Join our community of art lovers by subscribing to our newsletter. Stay up to date with new arrivals, exclusive offers, and behind-the-scenes content. Follow us on social media to engage with artists, learn about upcoming exhibitions, and discover new works that will spark your creativity.
                </p>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition-colors duration-300">
                    Our Mission
                </h2>
                <p className="text-lg text-gray-700 mb-6 hover:text-gray-800 transition-colors duration-300">
                    At our Artistry Hub, we strive to make art accessible to everyone, everywhere. We believe that art should not be confined to galleries and museums but should be enjoyed in everyday spaces. We are passionate about building a global art community that celebrates diversity, creativity, and the power of artistic expression.
                </p>
                <p className="text-lg text-gray-700 hover:text-gray-800 transition-colors duration-300">
                    Thank you for visiting our Artistry Hub. We invite you to explore, support the artists, and find the perfect piece that speaks to your heart. Happy browsing!
                </p>
            </div>
        </div>
    );
};

export default Home;
