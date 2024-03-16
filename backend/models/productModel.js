//example model

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    modelNumber: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

// Path: backend/controllers/productController.js