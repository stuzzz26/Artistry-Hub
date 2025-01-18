import React from 'react';

const Home = () => {
    return (
        <div
            className="home min-h-screen bg-gray-100 flex items-center justify-center p-6"
            style={{
                backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/033/228/003/non_2x/bright-abstract-acrylic-art-painting-background-brush-strokes-stains-creativity-free-photo.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="text-center max-w-full p-8 rounded-lg shadow-2xl">
                {/* Title Section */}
                <h1 className="text-6xl font-extrabold text-black mb-6 hover:text-white transition-colors duration-300">
                    Artistry Hub
                </h1>

                {/* Boxes of Different Paintings History */}
                <div className="grid grid-cols-4 gap-6 mt-8">
                    <div className="box bg-red-300 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4 hover:text-white transition-colors duration-300">
                            Paintings
                        </h3>
                        <p className="text-gray-700 hover:text-white transition-colors duration-300">
                            Paintings are one of the most traditional forms of art. They typically involve applying pigments to a surface (usually canvas, wood, or paper) using brushes, palette knives, or other tools.
                        </p>
                    </div>
                    <div className="box bg-blue-300 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4 hover:text-white transition-colors duration-300">
                            Mini Canvas
                        </h3>
                        <p className="text-gray-700 hover:text-white transition-colors duration-300">
                            Mini Canvases are small-scale works of art that allow artists to explore creativity on a smaller, more manageable surface.
                        </p>
                    </div>
                    <div className="box bg-yellow-300 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4 hover:text-white transition-colors duration-300">
                            Sketch
                        </h3>
                        <p className="text-gray-700 hover:text-white transition-colors duration-300">
                            Sketching is a fast and loose drawing technique that captures the basic shapes and outlines of a subject, often without the level of detail found in a finished piece.
                        </p>
                    </div>
                    <div className="box bg-green-300 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4 hover:text-white transition-colors duration-300">
                            Sculptures
                        </h3>
                        <p className="text-gray-700 hover:text-white transition-colors duration-300">
                            Sculptures are three-dimensional works of art created by shaping or carving materials like clay, wood, metal, stone, or modern synthetic materials.
                        </p>
                    </div>
                    <div className="box bg-purple-300 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4 hover:text-white transition-colors duration-300">
                            Custom Art
                        </h3>
                        <p className="text-gray-700 hover:text-white transition-colors duration-300">
                            Custom Art refers to artwork that is specifically created to meet a client's preferences or needs. This type of art can vary widely, from portraits and personalized designs to customized sculptures or murals.
                        </p>
                    </div>
                    <div className="box bg-pink-300 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4 hover:text-white transition-colors duration-300">
                            Mandalas
                        </h3>
                        <p className="text-gray-700 hover:text-white transition-colors duration-300">
                            Mandalas are geometric patterns or designs that have symbolic significance, often representing the universe, spiritual balance, or wholeness. Originating in Hinduism and Buddhism, mandalas are used in meditation and spiritual practices.
                        </p>
                    </div>
                    <div className="box bg-teal-300 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4 hover:text-white transition-colors duration-300">
                            Abstract Art
                        </h3>
                        <p className="text-gray-700 hover:text-white transition-colors duration-300">
                            Abstract Art does not aim to represent reality directly. Instead, it uses shapes, colors, and forms to create compositions that evoke emotions or ideas.
                        </p>
                    </div>
                    <div className="box bg-indigo-300 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4 hover:text-white transition-colors duration-300">
                            Religious Art
                        </h3>
                        <p className="text-gray-700 hover:text-white transition-colors duration-300">
                            Religious Art often depicts themes, figures, and stories from religious traditions. It is commonly found in temples, churches, and other places of worship.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
