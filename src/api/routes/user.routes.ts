import express from 'express';
import { userExists } from '../middlewares/userExist.middleware';
import { userProfile } from '../modules/user/user.controller';
import { userProfileValidator } from '../modules/user/user.validator';


const router = express.Router();

router.get('/:userId',userProfileValidator, userExists, userProfile);


export default router;