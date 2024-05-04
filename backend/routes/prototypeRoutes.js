import express from 'express';
import { uploadPrototype, getAllPrototypes } from '../controllers/prototypeController.js';

const router = express.Router();

// POST route to upload prototype
router.post('/upload', uploadPrototype);
router.get('/prototypes', getAllPrototypes);


export default router;
