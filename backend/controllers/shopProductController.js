import ShopProduct from '../models/shopProduct.js';


const createShopProduct = async (req, res) => {
    try {
        const { productId, productTitle, productPrice, productImage, productDescription, shopName } = req.body;

        const shopProduct = new ShopProduct({
            productId,
            productTitle,
            productPrice,
            productImage,
            productDescription,
            shopName
        });

        await shopProduct.save();
        res.status(201).json({ message: 'Product is added' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Function to get all shop products
const getAllShopProducts = async (req, res) => {
    try {
        const products = await ShopProduct.find();
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Function to get a specific shop product by productId
const getShopProductById = async (req, res) => {
    try {
        const productId = req.params.productId;
        const product = await ShopProduct.findOne({ productId: productId });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

export default {
    createShopProduct,
    getAllShopProducts,
    getShopProductById
};