import { Response } from 'express';
import { userProfileRequest } from '../../middlewares/userExist.middleware';
import { paginationItems } from '../../utils/paginationItems.utils';
import { getLikedVideosOfUser, getUserProfile } from './user.service';

export const userProfile = async (req: userProfileRequest, res: Response) =>{
    const { user } = req;
    try {
        const userInformation = await getUserProfile(user);
        res.json({user:userInformation});

    } catch (error) {
        res.status(error.status).json({ error: error.message });
    }
}

export const likedVideosByUser = async (req: userProfileRequest, res: Response) =>{
    const { user } = req;
    const { page, perPage } = req.query
    try {
        const pagination = paginationItems(page as string, perPage as string);
        const videos = await getLikedVideosOfUser(user.id, pagination,`${user.id}/videos`);
        res.json({videos});

    } catch (error) {
        res.status(error.status).json({ error: error.message });
    }
}