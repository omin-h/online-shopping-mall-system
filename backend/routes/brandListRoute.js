const express = require('express');
const router = express.Router();
const brandListController = require('../controllers/brandListController');

router.get('/', brandListController.getAllbrandlist);
router.get('/:id', brandListController.getbrandlistById);

module.exports = router;