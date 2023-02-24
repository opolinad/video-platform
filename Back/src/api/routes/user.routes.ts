import express from 'express';
import { followedUserExists } from '../middlewares/followedUserExist.middleware';
import { userExists } from '../middlewares/userExist.middleware';
import { likedVideosByUser, updateFollowing, userProfile } from '../modules/user/user.controller';
import { userProfileValidator } from '../modules/user/user.validator';


const router = express.Router();

router.get('/:userId',userProfileValidator, userExists, userProfile);
router.get('/:userId/videos',userExists, likedVideosByUser);
router.post('/:userId/follows/:followedUserId',userExists, followedUserExists, updateFollowing);


export default router;