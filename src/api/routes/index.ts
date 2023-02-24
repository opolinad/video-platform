import express, { Router } from 'express';
import authRoutes from './auth.routes';
import userRoutes from './user.routes';
import videoRoutes from './video.routes';

const router:Router = express.Router();

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/video', videoRoutes);

export default router;