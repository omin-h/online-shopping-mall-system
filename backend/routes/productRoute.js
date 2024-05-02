const router = require('express').Router();
let Products = require('../models/productModel');

router.route('/').get((req, res) => {
    Products.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/add').post((req, res) => {
    const modelNumber = req.body.modelNumber;
    const title = req.body.title;
    const price = Number(req.body.price);
    const image = req.body.image;
    const brand = req.body.brand;
    const category = req.body.category;
    const description = req.body.description;

    const newProduct = new Products({
        modelNumber,
        title,
        price,
        image,
        brand,
        category,
        description,
    });

    newProduct.save()
        .then(() => res.json('Product added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;