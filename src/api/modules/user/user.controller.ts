import { Response } from 'express';
import { userProfileRequest } from '../../middlewares/userExist.middleware';
import { getUserProfile } from './user.service';

export const userProfile = async (req: userProfileRequest, res: Response) =>{
    const { user } = req;
    try {
        const userInformation = await getUserProfile(user);
        res.json({user:userInformation});

    } catch (error) {
        res.status(error.status).json({ error: error.message });
    }
}