import express from 'express';
import { userExists } from '../middlewares/userExist.middleware';
import { likedVideosByUser, userProfile } from '../modules/user/user.controller';
import { userProfileValidator } from '../modules/user/user.validator';


const router = express.Router();

router.get('/:userId',userProfileValidator, userExists, userProfile);
router.get('/:userId/videos',userExists, likedVideosByUser);


export default router;