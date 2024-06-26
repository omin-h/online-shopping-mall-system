import mongoose from 'mongoose';

const shopProductSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true
    },

    productTitle: {
        type: String,
        required: true
    },

    productPrice: {
        type: Number,
        required: true
    },

    productImage: {
        type: String,
        required: true
    },  

    productDescription: {
        type: String,
        required: true
    },

    shopName: {
        type: String,
        required: true
    }

});

const ShopProduct = mongoose.model('ShopProduct', shopProductSchema);

export default ShopProduct;