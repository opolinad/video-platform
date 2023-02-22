import express from 'express';
import { signUpUser } from '../modules/auth/auth.controller';
import { signUpUserValidator } from '../modules/auth/auth.validators';

const router = express.Router();
try {
    router.post('/sign-in', signUpUserValidator, signUpUser);
} catch (error) {
    console.log('**************************************');
    console.log('**************************************');
    console.log('**************************************');
    console.log('**************************************');
    console.log('**************************************');
    console.log('**************************************');
}
// router.post('/sign-up', );
// router.post('/refresh-token', );

export default router;