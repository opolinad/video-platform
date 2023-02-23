import { Response } from 'express';
import { ServerException } from '../../errors/serverException.errors';
import { userProfileRequest } from '../../middlewares/userExist.middleware';
import { getUserProfile } from './user.service';

export const userProfile = async (req: userProfileRequest, res: Response) =>{
    const { user } = req;
    try {
        const userInformation = await getUserProfile(user);
        res.json({user:userInformation});

    } catch (error) {
        throw new ServerException();
    }
}