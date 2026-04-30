import express from 'express';
import { getNavData } from '../controllers/navControllers.js';

const router = express.Router();
router.get('/items', getNavData);

export default router;