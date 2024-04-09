import { Router } from 'express';
import shopProductController from '../controllers/shopProductController.js';

const { createShopProduct } = shopProductController;

const router = Router();

router.post('/', createShopProduct);

export default router;