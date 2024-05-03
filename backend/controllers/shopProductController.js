import ShopProduct from '../models/shopProduct.js';



const createShopProduct = async (req, res) => {
    try {
        const { itemNo, productTitle, productPrice, productImage, productDescription} = req.body;

        const shopProduct = new ShopProduct({
            itemNo,
            productTitle,
            productPrice,
            productImage,
            productDescription
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




const getShopProductByItemNo = async (req, res) => {
    try {
        const product = await ShopProduct.findOne({ itemNo: req.params.itemNo });
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
    getShopProductByItemNo
  
};