const express = require('express');
const ShopProduct = require('../models/shopProduct');
const { createShopProduct } = require('../controllers/shopProductController');

const router = express.Router();

router.post('/createShopProduct', createShopProduct);

module.exports = router;