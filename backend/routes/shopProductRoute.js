import { Router } from 'express';
import shopProductController from '../controllers/shopProductController.js';



const { createShopProduct, getAllShopProducts, getShopProductByItemNo } = shopProductController;

const router = Router();

router.post('/createShopProduct', createShopProduct);
router.get('/', getAllShopProducts);

router.get('/:itemNo', getShopProductByItemNo);

export default router;