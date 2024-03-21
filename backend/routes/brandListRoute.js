import express from 'express';
import { getAllbrandlist, getbrandlistById, addbrandList } from '../controllers/brandListController.js';

const router = express.Router();

router.get('/brandList', getAllbrandlist);
router.get('/brandList/:id', getbrandlistById);
router.post('/brand', addbrandList);

export default router;
