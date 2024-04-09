const ShopProduct = require('../model  s/shopProduct');

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
        res.status(201).json({ message: 'Product Created' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    createShopProduct
};