import { Router } from 'express';
import shopProductController from '../controllers/shopProductController.js';

const { createShopProduct, getAllShopProducts, getShopProductById } = shopProductController;

const router = Router();

router.post('/createShopProduct', createShopProduct);
router.get('/', getAllShopProducts);
router.get('/:productId', getShopProductById);

export default router;