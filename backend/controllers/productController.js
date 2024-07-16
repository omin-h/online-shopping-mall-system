const Prd = require('../models/productModel');

const getAllProducts = async (req, res) => {
    try {
        const products = await Prd.find({});

        res.json(products);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

const createProduct = async (req, res) => {
    try {
        const products = await Prd.create(req.body)
        res.status(200).json(products)
  
      } catch (error) {
          res.status(500).json({msg:error.message})
      }
};

module.exports = { getAllProducts, createProduct };