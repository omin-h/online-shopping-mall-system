const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    modelNumber: { type: String, required: true },
    title:       { type: String, required: true },
    price:       { type: Number, required: true },
    image:       { type: String, required: true },
    description: { type: String, required: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;