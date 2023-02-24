import express, { Router } from 'express';
import { isUserAuthenticated } from '../middlewares/isUserAuthenticated.middleware';
import authRoutes from './auth.routes';
import userRoutes from './user.routes';
import videoRoutes from './video.routes';

const router:Router = express.Router();

router.use('/auth', authRoutes);
router.all('*',isUserAuthenticated);
router.use('/user', userRoutes);
router.use('/video', videoRoutes);

export default router;