import express from 'express';
import { getRecovery } from '../controllers/recoveryController.js';

const router = express.Router();

router.get('/recovery', getRecovery);

export default router;