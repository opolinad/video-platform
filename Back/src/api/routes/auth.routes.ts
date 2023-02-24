import express from 'express';
import { refreshToken, signInUser, signUpUser } from '../modules/auth/auth.controller';
import { refreshTokenValidator, signInUserValidator, signUpUserValidator } from '../modules/auth/auth.validators';

const router = express.Router();

router.post('/log-in', signInUserValidator, signInUser);
router.post('/sign-up', signUpUserValidator, signUpUser);
router.post('/refresh-token',refreshTokenValidator, refreshToken);

export default router;