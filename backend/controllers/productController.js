const Product = require('../models/productModel');

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

exports.createProduct = async (req, res) => {
    const { name, description, price, image } = req.body;

    try {
        const product = new Product({ name, description, price, image });
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};